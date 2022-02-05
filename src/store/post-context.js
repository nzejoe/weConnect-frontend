import { createContext, useReducer } from "react";
import axios from "axios";

const initialState = {
  authUserPosts: [],
  refresh: 0,
  loading: false,
};

// REDUCER
const reducer = (state, actions) => {
  if (actions.type === "SET_USER_POSTS") {
    return { ...state, authUserPosts: actions.payload };
  }

  if (actions.type === "LOADING") {
    return { ...state, loading: actions.payload };
  }

  if(actions.type === 'REFRESH'){
    return { ...state, refresh: Math.random() };
  }
  return state;
};

// context
export const PostContext = createContext({
  authUserPosts: [],
  loading: false,
  refresh: 0,
  getUserPosts: () => {},
  postCreate: (formData) => {},
  postUpdate: (data) => {},
  postDelete: (postId) => {},
  postLike: (postId) => {},
  postUnlike: (postId) => {},
});

// provider
const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { access_token } = JSON.parse(localStorage.getItem("weConnect_user"));

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
          authorization: `Bearer ${access_token}`,
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

  // CREATE POST
  const postCreate = async(formData) => {
    setLoading(true);
    try {
      const response = await axios({
        url: "/posts/",
        method: "POST",
        headers: {
          'Content-type': 'json/application',
          authorization: `Bearer ${access_token}`,
        },
        data: formData,
      });

      if (response.status === 200) {
        dispatch({ type: "REFRESH"});
        setLoading(false);
        console.log(response.data)
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };// CREATE POST .//

  // UPDATE POST
  const postUpdate = async(data) => {
    setLoading(true);
    const { postId, formData } = data;
    try {
      const response = await axios({
        url: `/posts/${postId}/`,
        method: "PUT",
        headers: {
          "Content-type": "json/application",
          authorization: `Bearer ${access_token}`,
        },
        data: formData,
      });

      if (response.status === 200) {
        dispatch({ type: "REFRESH"});
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };// UPDATE POST .//

  // DELETE POST
  const postDelete = async(postId) => {
    setLoading(true);
    try {
      const response = await axios({
        url: `/posts/${postId}/`,
        method: "DELETE",
        headers: {
          "Content-type": "json/application",
          authorization: `Bearer ${access_token}`,
        },
      });

      if (response.status === 200) {
        dispatch({ type: "REFRESH"});
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };// DELETE POST .//

  // LIKE POST
  const postLike = async(postId) => {
    setLoading(true);
    try {
      const response = await axios({
        url: `/posts/${postId}/like/`,
        method: "POST",
        headers: {
          "Content-type": "json/application",
          authorization: `Bearer ${access_token}`,
        },
      });

      if (response.status === 200) {
        dispatch({ type: "REFRESH"});
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };// LIKE POST .//

  // UNLIKE POST
  const postUnlike = async(postId) => {
    setLoading(true);
    try {
      const response = await axios({
        url: `/posts/${postId}/unlike/`,
        method: "DELETE",
        headers: {
          "Content-type": "json/application",
          authorization: `Bearer ${access_token}`,
        },
      });

      if (response.status === 200) {
        dispatch({ type: "REFRESH"});
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };// UNLIKE POST .//


  const context = {
    authUserPosts: state.authUserPosts,
    loading: state.loading,
    refresh: state.refresh,
    getUserPosts,
    postCreate,
    postUpdate,
    postDelete,
    postLike,
    postUnlike,
  };

  return (
    <PostContext.Provider value={context}>{children}</PostContext.Provider>
  );
};

export default PostProvider;
