import React, { useContext } from "react";
import { PostForm, PostList, ActiveUsersCard } from "../components";

import { PostContext } from "../store/post-context";

const Feeds = () => {
  const { authUserPosts } = useContext(PostContext);
  
  return (
    <>
      <div className="feed-content">
        <PostForm />
        <ActiveUsersCard />
        <PostList postList={authUserPosts} />
      </div>
    </>
  );
};

export default Feeds;
