import React, { useState } from "react";
import { FormControl, Form, Card, Image } from "react-bootstrap";
import { MdAccountCircle } from "react-icons/md";

const CommentList = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="comments">
      {/* comment form */}
      <Form className="d-flex align-items-center comment-form px-2">
        <MdAccountCircle className="icon text-primary me-2" />
        <FormControl size="sm" className="" placeholder="Write your comment" />
      </Form>
      <div className="comment-list px-2 mt-3">
        <div className="comment mb-2">
          <div className="comment-inner d-flex justify-content-start">
            <div className="img-container">
              <Image fluid roundedCircle src="img/profile/profile-2.jpg" />
            </div>
            <Card className="ms-2 p-2 bg-light-cus mb-0">
              <Card.Title>Mel Emmanuel</Card.Title>
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

        <div className="comment mb-2">
          <div className="comment-inner d-flex justify-content-start">
            <div className="img-container">
              <Image fluid roundedCircle src="img/profile/profile-5.jpg" />
            </div>
            <Card className="ms-2 p-2 bg-light-cus mb-0">
              <Card.Title>Sara Wiliams</Card.Title>
              <Card.Text className="text-muted">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                vitae fugit odio accusantium blanditiis aut esse aliquid culpa
                consectetur! Dolores.{" "}
              </Card.Text>
            </Card>
          </div>
          <div className="footer ms-5 px-3 text-muted">
            <small className="clickable">Like</small> .{" "}
            <small className="clickable">Reply</small> . <small>30min</small>
          </div>
        </div>

        <div className="comment mb-2">
          <div className="comment-inner d-flex justify-content-start">
            <div className="img-container">
              <Image fluid roundedCircle src="img/profile/profile-1.jpg" />
            </div>
            <Card className="ms-2 p-2 bg-light-cus mb-0">
              <Card.Title>David Max</Card.Title>
              <Card.Text className="text-muted">
                {" "}
                Lorem ipsum dolor Omnis vitae fugit odio accusantium blanditiis
                aut esse aliquid culpa consectetur! Dolores.{" "}
              </Card.Text>
            </Card>
          </div>
          <div className="footer ms-5 px-3 text-muted">
            <small className="clickable">Like</small> .{" "}
            <small className="clickable">Reply</small> . <small>25min</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentList;
