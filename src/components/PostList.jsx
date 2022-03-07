import { useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "react-bootstrap";

import { PostContext } from "../store/post-context";
import { Post } from ".";

const PostList = () => {
  const { authUserPosts, next, getNext } = useContext(PostContext);

  return (
    <div className="post-list my-4">
      <InfiniteScroll
        dataLength={authUserPosts.length}
        next={getNext}
        hasMore={Boolean(next)}
        loader={
          <div className="text-center">
            <Spinner animation="grow" variant="primary" />
          </div>
        }
        endMessage={
          <div className="text-center">
            <p>No more post at this time.</p>
          </div>
        }
      >
        {authUserPosts &&
          authUserPosts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
      </InfiniteScroll>
    </div>
  );
};

export default PostList;
