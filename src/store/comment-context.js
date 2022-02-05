import { createContext } from "react";

// context
export const CommentContext = createContext({
  commentCreate: () => {},
});

// provider
const CommentProvider = ({ children }) => {
  const commentCreate = (data) => {};

  const context = {
    commentCreate,
  };
  return (
    <CommentContext.Provider value={context}>
      {children}
    </CommentContext.Provider>
  );
};

export default CommentProvider;
