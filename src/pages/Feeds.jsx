import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
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
        {loading ? (
          <div className="w-100 text-center mt-5">
            <Spinner animation="grow" />
          </div>
        ) : (
          <PostList />
        )}
      </div>
    </>
  );
};

export default Feeds;
