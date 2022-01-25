import React from "react";
import {
  Card,
  Image,
} from "react-bootstrap";
import {
  MdMoreVert,
  MdChatBubbleOutline,
  MdOutlineThumbUp,
} from "react-icons/md";

import { CommentList } from ".";

const PostList = () => {
  
  return (
    <div className="post-list my-4">
      <div className="post my-2">
        <Card>
          <div className="post-header mb-3 p-3 d-flex justify-content-between align-items-center">
            <div className="post-author d-flex">
              <Image
                fluid
                roundedCircle
                width={60}
                src="img/profile/profile-4.jpg"
              />
              <div className="author-info ms-2">
                <Card.Title className="m-0">Maya Jonathan</Card.Title>
                <Card.Text className="text-muted m-0 username">@maya</Card.Text>
              </div>
            </div>
            <div className="post-date">
              <p className="text-muted date d-flex align-items-center">
                23 Dec <MdMoreVert className="option-icon ms-2 p-1" />
              </p>
            </div>
          </div>
          <div className="post-body">
            <p className="post-text text-muted px-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
              tempore ratione perferendis iure quisquam consectetur. Est magni
              ut possimus rem! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Enim, unde!
            </p>
            <Card.Img className="post-img" src="img/post/post-3.jpg"></Card.Img>
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
    </div>
  );
};

export default PostList;
