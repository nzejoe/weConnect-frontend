import React, { useState } from "react";
import { InputGroup, FormControl, Modal, Button, Form } from "react-bootstrap";
import {
  MdAccountCircle,
  MdAddCircleOutline,
  MdOutlineArrowBackIosNew,
  MdImage,
  MdOutlineSend,
} from "react-icons/md";

const PostForm = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <div className="post-form">
        <InputGroup onClick={handleShow}>
          <InputGroup.Text className="bg-white">
            <MdAccountCircle className="icon text-primary" />
          </InputGroup.Text>
          <FormControl placeholder="What's on your mind?" />
          <InputGroup.Text className="bg-white">
            <MdAddCircleOutline className="icon text-primary" />
          </InputGroup.Text>
        </InputGroup>
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
            placeholder="What's on your mind?"
          ></textarea>
        </Modal.Body>
        <Modal.Footer className="justify-content-center align-items-center">
          <Form.Group controlId="formFileSm" className="h-100">
            <Form.Label>
              <MdImage className="icon text-muted" />
            </Form.Label>
            <Form.Control type="file" size="sm" hidden />
          </Form.Group>
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

export default PostForm;
