import { createContext, useReducer } from "react";
import axios from "axios";

const initialState = {
  authUserPosts: [],
  loading: false,
};

const reducer = (state, actions) => {
  if (actions.type === "SET_USER_POSTS") {
    return { ...state, authUserPosts: actions.payload };
  }

  if (actions.type === "LOADING") {
    return { ...state, loading: actions.payload };
  }
  return state;
};

// context
export const PostContext = createContext({
  authUserPosts: [],
  loading: false,
  getUserPosts: () => {},
});

// provider
const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { access_token } = JSON.parse(localStorage.getItem("weConnect_user"));

  const setLoading = (status) => {
    dispatch({ type: "LOADING", payload: status });
  };

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
  };

  const context = {
    authUserPosts: state.authUserPosts,
    loading: state.loading,
    getUserPosts,
  };

  return (
    <PostContext.Provider value={context}>{children}</PostContext.Provider>
  );
};

export default PostProvider;
