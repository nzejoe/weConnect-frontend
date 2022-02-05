import React from "react";
import { Image, Card } from 'react-bootstrap';

// utils
import { getProfileImage } from '../utils'

const Comment = ({ comment }) => {
  return (
    <div className="comment mb-2" key={comment.id}>
      <div className="comment-inner d-flex justify-content-start">
        <div className="img-container">
          <Image fluid roundedCircle src={getProfileImage(comment.author)} />
        </div>
        <Card className="ms-2 p-2 bg-light-cus mb-0">
          <Card.Title>{comment.author.full_name}</Card.Title>
          <Card.Text className="text-muted">
            {" "}
            accusantium blanditiis aut esse aliquid culpa cAtque culpa{" "}
          </Card.Text>
        </Card>
      </div>
      <div className="footer ms-5 px-3 text-muted">
        <small className="clickable">Like</small> .{" "}
        <small className="clickable">Reply</small> . <small>1h</small>
      </div>
    </div>
  );
};

export default Comment;
