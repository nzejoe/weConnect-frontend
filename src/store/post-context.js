import { createContext, useReducer } from "react";
import axios from "axios";

// REDUCER
const initialState = {
  authUserPosts: [],
  next: null,
  refresh: 0,
  loading: false,
};

const reducer = (state, actions) => {
  if (actions.type === "SET_USER_POSTS") {
    const { results, next } = actions.payload;
    return { ...state, authUserPosts: results, next: next };
  }

  if (actions.type === "SET_NEXT_POSTS") {
    const { results, next } = actions.payload;
    return { ...state, authUserPosts: [...state.authUserPosts, ...results], next: next };
  }

  if (actions.type === "LOADING") {
    return { ...state, loading: actions.payload };
  }

  if (actions.type === "REFRESH") {
    return { ...state, refresh: Math.random() };
  }
  return state;
};

// context
export const PostContext = createContext({
  authUserPosts: [],
  next: null,
  loading: false,
  refresh: 0,
  getUserPosts: () => {},
  getNext: () => {},
  postCreate: (formData) => {},
  postUpdate: (data) => {},
  postDelete: (postId) => {},
  postLike: (postId) => {},
  postUnlike: (postId) => {},
  commentCreate: () => {},
});

// provider
const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const token = JSON.parse(localStorage.getItem("weConnect_user"));

  const setLoading = (status) => {
    dispatch({ type: "LOADING", payload: status });
  };

  // GET USER POST
  const getUserPosts = async () => {
    setLoading(true);
    try {
      const response = await axios({
        url: "/posts/",
        method: "GET",
        headers: {
          authorization: `Bearer ${token && token.access_token}`,
        },
      });

      if (response.status === 200) {
        dispatch({ type: "SET_USER_POSTS", payload: response.data });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }; // GET USER POST .//

  // GET NEXT
  const getNext = async () => {
    const cursor = state.next && state.next.split("=")[1];
    setLoading(true);
    try {
      const response = await axios({
        url: "/posts/",
        method: "GET",
        headers: {
          authorization: `Bearer ${token && token.access_token}`,
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

  // CREATE POST
  const postCreate = async (formData) => {
    setLoading(true);
    try {
      const response = await axios({
        url: "/posts/",
        method: "POST",
        headers: {
          "Content-type": "json/application",
          authorization: `Bearer ${token && token.access_token}`,
        },
        data: formData,
      });

      if (response.status === 200) {
        dispatch({ type: "REFRESH" });
        setLoading(false);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }; // CREATE POST .//

  // UPDATE POST
  const postUpdate = async (data) => {
    setLoading(true);
    const { postId, formData } = data;
    try {
      const response = await axios({
        url: `/posts/${postId}/`,
        method: "PUT",
        headers: {
          "Content-type": "json/application",
          authorization: `Bearer ${token && token.access_token}`,
        },
        data: formData,
      });

      if (response.status === 200) {
        dispatch({ type: "REFRESH" });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }; // UPDATE POST .//

  // DELETE POST
  const postDelete = async (postId) => {
    setLoading(true);
    try {
      const response = await axios({
        url: `/posts/${postId}/`,
        method: "DELETE",
        headers: {
          "Content-type": "json/application",
          authorization: `Bearer ${token && token.access_token}`,
        },
      });

      if (response.status === 200) {
        dispatch({ type: "REFRESH" });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }; // DELETE POST .//

  // LIKE POST
  const postLike = async (postId) => {
    setLoading(true);
    try {
      const response = await axios({
        url: `/posts/${postId}/like/`,
        method: "POST",
        headers: {
          "Content-type": "json/application",
          authorization: `Bearer ${token && token.access_token}`,
        },
      });

      if (response.status === 200) {
        dispatch({ type: "REFRESH" });
        setLoading(false);
      }
    } catch (error) {
      const err = { ...error };
      console.log(err.response.data);
      setLoading(false);
    }
  }; // LIKE POST .//

  // UNLIKE POST
  const postUnlike = async (postId) => {
    setLoading(true);
    try {
      const response = await axios({
        url: `/posts/${postId}/unlike/`,
        method: "DELETE",
        headers: {
          "Content-type": "json/application",
          authorization: `Bearer ${token && token.access_token}`,
        },
      });

      if (response.status === 200) {
        dispatch({ type: "REFRESH" });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }; // UNLIKE POST .//

  // COMMENT CREATE
  const commentCreate = async (data) => {
    setLoading(true);
    const { postId, commentData } = data;

    try {
      const response = await axios({
        url: `/posts/${postId}/comments/`,
        method: "POST",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token && token.access_token}`,
        },
        data: commentData,
      });

      if (response.status === 200) {
        dispatch({ type: "REFRESH" });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }; // COMMENT CREATE .//

  const context = {
    authUserPosts: state.authUserPosts,
    next: state.next,
    loading: state.loading,
    refresh: state.refresh,
    getUserPosts,
    getNext,
    postCreate,
    postUpdate,
    postDelete,
    postLike,
    postUnlike,
    commentCreate,
  };

  return (
    <PostContext.Provider value={context}>{children}</PostContext.Provider>
  );
};

export default PostProvider;
