import { createContext, useReducer } from "react";
import axios from "axios";

const initialState = {
  profileRefresh: 0,
  profileNotFound: false,
  profileUser: {},
  profilePosts: [],
};

// REDUCER
const reducer = (state, action) => {

  if (action.type === "SET_USER") {
    return { ...state, profileUser: action.payload };
  }

  if (action.type === "SET_PROFILE_POST") {
    return { ...state, profilePosts: action.payload };
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
  getProfilePost: () => {},
  refreshProfile: () => {},
});

// PROVIDER
const UserProfileProvider = ({ children }) => {
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
    getProfilePost,
    refreshProfile,
  };

  return (
    <UserProfileContext.Provider value={context}>
      {children}
    </UserProfileContext.Provider>
  );
}; // PROVIDER .//

export default UserProfileProvider;
