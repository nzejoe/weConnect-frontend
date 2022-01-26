import React from "react";
import { PostForm, PostList, ActiveUsersCard } from "../components";

const Feeds = () => {
  return (
    <>
      <div className="feed-content">
        <PostForm />
        <ActiveUsersCard />
        <PostList />
      </div>
    </>
  );
};

export default Feeds;
