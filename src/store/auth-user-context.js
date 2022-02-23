import { createContext, useReducer } from "react";
import axios from "axios";

const initialState = {
  isAuthenticated: localStorage.getItem('weConnect_user'),
  refresh: 0,
  user: {},
  posts: [],
};

// REDUCER
const reducer = (state, action) => {
  if (action.type === "SET_USER") {
    return { ...state, user: action.payload };
  }

  if (action.type === "SET_AUTHENTICATED") {
    return {
      ...state,
      isAuthenticated: localStorage.getItem("weConnect_user"),
    };
  }

  if (action.type === "REFRESH") {
    return { ...state, refresh: Math.random() };
  }

  if (action.type === "SET_SESSION") {
    return { ...state, isSessionExpired: action.payload };
  }
  return state;
};

// CONTEXT
export const AuthUserContext = createContext({
  refresh: 0,
  user: {},
  isAuthenticated: localStorage.getItem("weConnect_user"),
  posts: [],
  getUserInfo: () => {},
  refreshUser: () => {},
  setIsAuthenticated: () => {},
});

// PROVIDER
const AuthUserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getUserInfo = async () => {
    const accessToken = JSON.parse(localStorage.getItem("weConnect_user"));

    try {
      const response = await axios({
        url: "/users/my_details/",
        method: "GET",
        headers: {
          authorization: `Bearer ${accessToken.access_token}`,
        },
      });

      if (response.status === 200) {
        localStorage.setItem("__weconnect_user__", JSON.stringify(response.data));
        dispatch({ type: "SET_USER", payload: response.data });
      }
    } catch (error) {
      const err = { ...error };
      if (err.response && err.response.status === 401) {
        // redirect user to login page if session expired
        if (window.location.pathname.indexOf("login") === -1) {
          localStorage.setItem("isSessionExpired", true);
          localStorage.removeItem("weConnect_user");
          window.location.pathname = "/account/login/";
        }
      }
      console.log(err.response.data);
    }
  };

  const refreshUser = () => {
    dispatch({ type: "REFRESH" });
  };

  const setIsAuthenticated = () => {
    dispatch({ type: "SET_AUTHENTICATED" });
  };

  const context = {
    refresh: state.refresh,
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    posts: state.posts,
    getUserInfo,
    refreshUser,
    setIsAuthenticated,
  };

  return (
    <AuthUserContext.Provider value={context}>
      {children}
    </AuthUserContext.Provider>
  );
}; // PROVIDER .//

export default AuthUserProvider;
