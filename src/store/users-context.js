import { createContext, useReducer } from "react";
import axios from "axios";

const initialState = {
  refresh: 0,
  isLoading: false,
  profileNotFound: false,
  userList: [],
  profileUser: {},
  profilePosts: [],
  next: null,
};

// REDUCER
const reducer = (state, action) => {

  if (action.type === "LOADING") {
    return { ...state, isLoading: action.payload };
  }

  if (action.type === "SET_USER") {
    return { ...state, profileUser: action.payload, profileNotFound: false };
  }

  if (action.type === "SET_PROFILE_NOT_FOUND") {
    return { ...state, profileUser: {}, profileNotFound: true, profilePosts: [] };
  }

  if (action.type === "SET_PROFILE_POST") {
    const { results, next} = action.payload
    return { ...state, profilePosts: results, next: next};
  }

  if (action.type === "SET_NEXT_POSTS") {
    const { results, next } = action.payload;
    return { ...state, profilePosts:[...state.profilePosts, ...results], next: next };
  }

  if (action.type === "REFRESH") {
    return { ...state, refresh: Math.random() };
  }

  if (action.type === "SET_USER_LIST") {
    return { ...state, userList: action.payload };
  }
  return state;
};

// CONTEXT
export const UsersContext = createContext({
  refresh: 0,
  isLoading: false,
  userList: [],
  profileUser: {},
  profileNotFound: false,
  profilePosts: [],
  next: null,
  getProfileUser: () => {},
  getProfilePost: () => {},
  getNext: () => {},
  getUserList: () => {},
  refreshProfile: () => {},
  userFollow: () => {},
  userUnfollow: () => {},
});


// PROVIDER
const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // LOADING HANDLER FUNCTION
  const setLoading = (status) => {
    dispatch({ type: "LOADING", payload: status });
  };

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

  // PROFILE POST GETTER
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

  // GET NEXT
  const getNext = async (username) => {
    const accessToken = JSON.parse(localStorage.getItem("weConnect_user"));
    const cursor = state.next && state.next.split("=")[1];
    setLoading(true);
    try {
      const response = await axios({
        url: `/posts/${username}/`,
        method: "GET",
        headers: {
          authorization: `Bearer ${accessToken.access_token}`,
        },
        params: { cursor: cursor },
      });

      if (response.status === 200) {
        dispatch({ type: "SET_NEXT_POSTS", payload: response.data });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  // GET NEXT

  const refreshProfile = () => {
    dispatch({ type: "REFRESH" });
  };

  // USERS LIST GETTER
  const getUserList = async () => {
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
  };

  // USER FOLLOW HANDLER
  const userFollow = async (userId) => {
    const accessToken = JSON.parse(localStorage.getItem("weConnect_user"));
    setLoading(true);
    try {
      const response = await axios({
        url: `/users/${userId}/follow/`,
        method: "POST",
        headers: {
          authorization: `Bearer ${accessToken.access_token}`,
        },
      });
      if (response.status === 200) {
        setLoading(false);
        refreshProfile();
      }
    } catch (error) {
      setLoading(false);
      const err = { ...error };
      console.log(err.response.data);
    }
  };

  // USER UNFOLLOW HANDLER
  const userUnfollow = async (userId) => {
    const accessToken = JSON.parse(localStorage.getItem("weConnect_user"));
    setLoading(true);
    try {
      const response = await axios({
        url: `/users/${userId}/follow/`,
        method: "DELETE",
        headers: {
          authorization: `Bearer ${accessToken.access_token}`,
        },
      });
      if (response.status === 200) {
        refreshProfile();
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      const err = { ...error };
      console.log(err.response.data);
    }
  };

  const context = {
    refresh: state.refresh,
    isLoading: state.isLoading,
    userList: state.userList,
    profileUser: state.profileUser,
    profileNotFound: state.profileNotFound,
    profilePosts: state.profilePosts,
    next: state.next,
    getProfileUser,
    getUserList,
    getProfilePost,
    getNext,
    refreshProfile,
    userFollow,
    userUnfollow,
  };

  return (
    <UsersContext.Provider value={context}>{children}</UsersContext.Provider>
  );
}; // PROVIDER .//

export default UsersProvider;
