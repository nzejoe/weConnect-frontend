import { createContext, useReducer } from "react";

const initialState = {
  authUserPosts: [],
};

const reducer = (state, actions) => {
  return state;
};

// context
export const PostContext = createContext({
  authUserPosts: [],
});

// provider
const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const context = {
    authUserPosts: state.authUserPosts,
  };
  return (
    <PostContext.PostProvider value={context}>
      {children}
    </PostContext.PostProvider>
  );
};

export default PostProvider;
