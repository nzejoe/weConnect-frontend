import { Post } from ".";

const PostList = ({ postList }) => {

  return (
    <div className="post-list my-4">
      {postList &&
        postList.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
    </div>
  );
};

export default PostList;
