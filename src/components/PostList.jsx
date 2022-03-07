import { useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

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
        loader={<h4>loading...</h4>}
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
