import React, { useContext } from "react";
import { PostForm, PostList, ActiveUsersCard } from "../components";

import { PostContext } from "../store/post-context";

const Feeds = () => {
  const { authUserPosts, next, getNext } = useContext(PostContext);

  return (
    <>
      <div className="feed-content">
        <PostForm />
        <ActiveUsersCard />
        <PostList postList={authUserPosts} next={next} getNext={getNext} />
      </div>
    </>
  );
};

export default Feeds;
