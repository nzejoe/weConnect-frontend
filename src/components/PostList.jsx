import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "react-bootstrap";

import { Post } from ".";

const PostList = ({ postList, next, getNext }) => {

  return (
    <div className="post-list my-4">
      <InfiniteScroll
        dataLength={postList.length}
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
        {postList &&
          postList.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
      </InfiniteScroll>
    </div>
  );
};

export default PostList;
