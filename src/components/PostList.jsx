import React from "react";
import { Card, Image } from "react-bootstrap";
import { MdMoreVert } from "react-icons/md";

const PostList = () => {
  return (
    <div className="post-list my-4">
      <div className="post my-2">
        <Card>
          <div className="header  p-3 d-flex justify-content-between align-items-center">
            <div className="post-author d-flex">
              <Image
                fluid
                roundedCircle
                width={50}
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
        </Card>
      </div>
    </div>
  );
};

export default PostList;
