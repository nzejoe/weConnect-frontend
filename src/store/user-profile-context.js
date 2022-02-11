import { createContext, useReducer } from "react";
import axios from "axios";

const initialState = {
  profileRefresh: 0,
  profileUser: {name: 'Johnny'},
  profilePosts: [],
};

// REDUCER
const reducer = (state, action) => {

  if (action.type === "SET_USER") {
    return { ...state, profileUser: action.payload };
  }

  if (action.type === "REFRESH") {
    return { ...state, profileRefresh: Math.random() };
  }
  return state;
};

// CONTEXT
export const UserProfileContext = createContext({
  profileRefresh: 0,
  profileUser: {},
  profilePosts: [],
  getProfileUser: () => {},
  refreshProfile: () => {},
});

// PROVIDER
const UserProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProfileUser = async (userId) => {
    const accessToken = JSON.parse(localStorage.getItem("weConnect_user"));

    try {
      const response = await axios({
        url: `/users/${userId}/`,
        method: "GET",
        headers: {
          authorization: `Bearer ${accessToken.access_token}`,
        },
      });

      if (response.status === 200) {
        dispatch({ type: "SET_USER", payload: response.data });
      }
    } catch (error) {
      const err = { ...error };
      console.log(err.response.data);
    }
  };

  const refreshProfile = () => {
    dispatch({ type: "REFRESH" });
  };

  const context = {
    profileRefresh: state.profileRefresh,
    profileUser: state.profileUser,
    profilePosts: state.profilePosts,
    getProfileUser,
    refreshProfile,
  };

  return (
    <UserProfileContext.Provider value={context}>
      {children}
    </UserProfileContext.Provider>
  );
}; // PROVIDER .//

export default UserProfileProvider;
