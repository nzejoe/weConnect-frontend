import React, { useState } from "react";
import { FormControl, Form, Card, Image, Modal, Button } from "react-bootstrap";
import {
  MdAccountCircle,
  MdOutlineArrowBackIosNew,
  MdOutlineSend,
} from "react-icons/md";

// utils
import { getProfileImage } from "../utils";


const CommentList = ({ comments }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="comments">
        {/* comment form */}
        <Form className="d-flex align-items-center comment-form px-2">
          <MdAccountCircle className="icon text-primary me-2" />
          <FormControl
            size="sm"
            className=""
            placeholder="Write your comment"
            onClick={handleShow}
          />
        </Form>
        <div className="comment-list px-2 mt-3">
          
          {comments && comments.map(comment => {
            const fullName = `${comment.author.first_name} ${comment.author.last_name}`;
            return (
              <div className="comment mb-2" key={comment.id}>
                <div className="comment-inner d-flex justify-content-start">
                  <div className="img-container">
                    <Image
                      fluid
                      roundedCircle
                      src={getProfileImage(comment.author)}
                    />
                  </div>
                  <Card className="ms-2 p-2 bg-light-cus mb-0">
                    <Card.Title>{fullName}</Card.Title>
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
          })}
        </div>
      </div>

      {/* INPUT MODAL */}
      <Modal
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        show={show}
        id="feed-modal"
      >
        <Modal.Header className="d-block">
          <MdOutlineArrowBackIosNew
            onClick={handleClose}
            className="icon text-muted"
          />
          <MdAccountCircle className="icon text-muted" />
        </Modal.Header>
        <Modal.Body>
          <textarea
            name=""
            id=""
            rows="8"
            className="form-control"
            placeholder="Write your comment"
          ></textarea>
        </Modal.Body>
        <Modal.Footer className="justify-content-center align-items-center">
          <Button
            onClick={handleClose}
            className="d-flex justify-content-center align-items-center btn-primary"
            variant="lg"
          >
            Post
            <MdOutlineSend className="d-block ml-1" />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CommentList;
