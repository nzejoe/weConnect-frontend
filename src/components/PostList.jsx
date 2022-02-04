import React, { useContext } from "react";

import { Post } from ".";

// context
import { PostContext } from "../store/post-context";

const PostList = () => {
  const { authUserPosts } = useContext(PostContext);

  return (
    <div className="post-list my-4">
      {authUserPosts &&
        authUserPosts.map((post) => {
          return (
            <Post key={post.id} post={post}/>
          );
        })}
    </div>
  );
};

export default PostList;
