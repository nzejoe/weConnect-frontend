import React, { useState } from "react";
import { InputGroup, FormControl, Form } from "react-bootstrap";
import { MdAccountCircle } from "react-icons/md";

const CommentList = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="comments">
      {/* comment form */}
      <Form className="d-flex align-items-center comment-form px-2">
        <MdAccountCircle className="icon text-primary me-2"/>
        <FormControl size="sm" className="" placeholder="Write your comment"/>
      </Form>
    </div>
  );
};

export default CommentList;
