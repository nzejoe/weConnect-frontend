import { createContext, useReducer } from "react";
import axios from "axios";

const initialState = {
  profileRefresh: 0,
  profileNotFound: false,
  userList: [],
  profileUser: {},
  profilePosts: [],
};

// REDUCER
const reducer = (state, action) => {

  if (action.type === "SET_USER") {
    return { ...state, profileUser: action.payload, profileNotFound: false };
  }

  if (action.type === "SET_PROFILE_NOT_FOUND") {
    return { ...state, profileUser: {}, profileNotFound: true, profilePosts: [] };
  }

  if (action.type === "SET_PROFILE_POST") {
    return { ...state, profilePosts: action.payload };
  }

  if (action.type === "REFRESH") {
    return { ...state, profileRefresh: Math.random() };
  }

  if (action.type === "SET_USER_LIST") {
    return { ...state, userList: action.payload };
  }
  return state;
};

// CONTEXT
export const UsersContext = createContext({
  profileRefresh: 0,
  userList: [],
  profileUser: {},
  profileNotFound: false,
  profilePosts: [],
  getProfileUser: () => {},
  getProfilePost: () => {},
  getUserList: () => {},
  refreshProfile: () => {},
});

// PROVIDER
const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProfileUser = async (username) => {
    const accessToken = JSON.parse(localStorage.getItem("weConnect_user"));

   try {
     const response = await axios({
       url: `/users/${username}/`,
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


  const getProfilePost = async (username) => {
    const accessToken = JSON.parse(localStorage.getItem("weConnect_user"));

    try {
      const response = await axios({
        url: `/posts/${username}/`,
        method: "GET",
        headers: {
          authorization: `Bearer ${accessToken.access_token}`,
        },
      });
      if (response.status === 200) {
        dispatch({ type: "SET_PROFILE_POST", payload: response.data });
      }
    } catch (error) {
      const err = { ...error };
      dispatch({ type: "SET_PROFILE_NOT_FOUND" });
      console.log(err.response.data);
    }
  };

  const refreshProfile = () => {
    dispatch({ type: "REFRESH" });
  };

  const getUserList = async() => {
    const accessToken = JSON.parse(localStorage.getItem("weConnect_user"));

    try {
      const response = await axios({
        url: `/users/`,
        method: "GET",
        headers: {
          authorization: `Bearer ${accessToken.access_token}`,
        },
      });
      if (response.status === 200) {
        dispatch({ type: "SET_USER_LIST", payload: response.data });
      }
    } catch (error) {
      const err = { ...error };
      console.log(err.response.data);
    }
  }

  const context = {
    profileRefresh: state.profileRefresh,
    userList: state.userList,
    profileUser: state.profileUser,
    profileNotFound: state.profileNotFound,
    profilePosts: state.profilePosts,
    getProfileUser,
    getUserList,
    getProfilePost,
    refreshProfile,
  };

  return (
    <UsersContext.Provider value={context}>
      {children}
    </UsersContext.Provider>
  );
}; // PROVIDER .//

export default UsersProvider;
