import React, { useState } from "react";
import { FormControl, Form, Modal, Button } from "react-bootstrap";
import {
  MdAccountCircle,
  MdOutlineArrowBackIosNew,
  MdOutlineSend,
} from "react-icons/md";

import { Comment } from ".";

const CommentList = ({ comments }) => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const textChangeHandler = (e) => {
    setText(e.target.value);
  };

  // SUBMIT HANDLER
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length !== 0) {
      console.log(text);
      handleClose();
    }
  };

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
          {comments &&
            comments.map((comment) => {
              return <Comment key={comment.id} comment={comment} />;
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
            onChange={textChangeHandler}
            className="form-control"
            placeholder="Write your comment"
          ></textarea>
        </Modal.Body>
        <Modal.Footer className="justify-content-center align-items-center">
          <Button
            onClick={handleSubmit}
            className="d-flex justify-content-center align-items-center btn-primary"
            variant="lg"
            disabled={text.trim().length === 0}
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
