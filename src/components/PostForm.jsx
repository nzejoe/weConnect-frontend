import React, { useState, useEffect, useContext } from "react";
import { InputGroup, FormControl, Modal, Button, Form, Image } from "react-bootstrap";
// context
import { PostContext } from "../store/post-context";
import {
  MdAccountCircle,
  MdAddCircleOutline,
  MdOutlineArrowBackIosNew,
  MdImage,
  MdOutlineSend,
} from "react-icons/md";

const PostForm = () => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [text, setText] = useState("");
  const [formTouched, setFormTouched] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const { postCreate } = useContext(PostContext);

  const handleClose = () => {
    setShow(false);
    setText("");
    setErrorMsg("");
    setFormTouched(false);
    setImage(null);
  };

  const handleShow = () => setShow(true);

  // FILE HANDLER
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file.type.indexOf("image") !== -1) {
      setImage(file);
      setImageURL(URL.createObjectURL(file));
    } else {
      setFormValid(false)
      setErrorMsg("Sorry only images allowed");
    }
  };

  // TEXT HANDLER
  useEffect(()=>{
    if (!text && formTouched) {
      setFormValid(false);
      setErrorMsg("Please write a short note about your post.");
      return;
    }
    setFormValid(true);
  },[text, formTouched])

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // SUBMIT HANDLER
  const handleSubmit = (e) => {
    e.preventDefault();


    if (formValid && formTouched) {
      const formData = new FormData();
      formData.append("text", text);
      // check if image was uploaded
      if (image) {
        formData.append("image", image, image.name);
      } else {
        formData.append("image", "null");
        formData.delete("image");
      }

      postCreate(formData);
     
      setShow(false);
      setText('');
      setErrorMsg('');
      setFormTouched(false);
      setImage(null);
    }
  };

  return (
    <>
      <div className="post-form">
        <InputGroup onClick={handleShow}>
          <InputGroup.Text className="bg-white">
            <MdAccountCircle className="icon text-primary" />
          </InputGroup.Text>
          <FormControl
            placeholder="What's on your mind?"
            onChange={(e) => setText(e.target.value)}
          />
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
        {!formValid && (
          <div className="error-msg p-0 px-2 pt-2 text-danger">
            <p className="">{errorMsg}</p>
          </div>
        )}
        <Modal.Body>
          <textarea
            name=""
            id=""
            value={text}
            onBlur={() => setFormTouched(true)}
            onChange={handleTextChange}
            rows="8"
            className="form-control"
            placeholder="What's on your mind?"
          ></textarea>
          {/* IMAGE PREVIEWER */}
          {image && (
            <div className="m-0 m-2">
              <Image src={imageURL} width={100} />
              <br />
              <Button
                variant="outline-warning"
                size="sm"
                className="text-muted"
                onClick={() => setImage(null)}
              >
                Clear image
              </Button>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className="justify-content-center align-items-center">
          <Form.Group controlId="formFileSm" className="h-100">
            <Form.Label>
              <MdImage className="icon text-muted" />
            </Form.Label>
            <Form.Control
              type="file"
              size="sm"
              hidden
              onChange={handleFileChange}
            />
          </Form.Group>
          <Button
            onClick={handleSubmit}
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
