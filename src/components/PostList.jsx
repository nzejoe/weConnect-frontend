import React, { useContext } from "react";
import {
  Card,
  Image,
} from "react-bootstrap";
import {
  MdMoreVert,
  MdChatBubbleOutline,
  MdOutlineThumbUp,
} from "react-icons/md";

import { baseURL, debug, getProfileImage } from "../utils";

import { CommentList } from ".";

// context
import { PostContext } from "../store/post-context";

const PostList = () => {
  const { authUserPosts } = useContext(PostContext);

  console.log(authUserPosts)
  
  return (
    <div className="post-list my-4">
      { authUserPosts && authUserPosts.map(post=>{
        const fullName = `${post.author.first_name} ${post.author.last_name}`;
        return (
          <div className="post my-3" key={post.id}>
            <Card>
              <div className="post-header mb-3 p-3 d-flex justify-content-between align-items-center">
                <div className="post-author d-flex">
                  <Image
                    fluid
                    roundedCircle
                    width={60}
                    src={ getProfileImage(post.author) }
                  />
                  <div className="author-info ms-2">
                    <Card.Title className="m-0">{fullName}</Card.Title>
                    <Card.Text className="text-muted m-0 username">
                      @{post.author.username}
                    </Card.Text>
                  </div>
                </div>
                <div className="post-date">
                  <p className="text-muted date d-flex align-items-center">
                    {post.created}{" "}
                    <MdMoreVert className="option-icon ms-2 p-1" />
                  </p>
                </div>
              </div>
              <div className="post-body">
                <p className="post-text text-muted px-3">{post.text}</p>
                {post.image && (
                  <Card.Img
                    className="post-img"
                    src={debug ? `${baseURL + post.image}` : `${post.image}`}
                  ></Card.Img>
                )}
              </div>
              <div className="post-actions py-2">
                <div className="count d-flex text-muted mb-1 px-4">
                  <div className="like clickable me-5">
                    <MdOutlineThumbUp className="count-icon" /> 20k
                  </div>
                  <div className="comment-count clickable">
                    <MdChatBubbleOutline className="count-icon" /> 10k
                  </div>
                </div>

                {/* comment list */}
                <CommentList />
              </div>
            </Card>
          </div>
        );
      })
      }
    </div>
  );
};

export default PostList;
