import React, { useContext } from "react";
import { PostForm, PostList, ActiveUsersCard } from "../components";

// context
import { PostContext } from "../store/post-context";

const Feeds = () => {
  const { loading } = useContext(PostContext);
  return (
    <>
      <div className="feed-content">
        <PostForm />
        <ActiveUsersCard />
        {loading ? <p>Loading</p> : <PostList />}
      </div>
    </>
  );
};

export default Feeds;
