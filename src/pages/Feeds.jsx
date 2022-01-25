import React, { useState } from "react";
import {
  InputGroup,
  FormControl,
  Modal,
  Button,
  Form,
  Card,
  Image,
} from "react-bootstrap";
import {
  MdAccountCircle,
  MdAddCircleOutline,
  MdOutlineArrowBackIosNew,
  MdImage,
  MdOutlineSend,
  MdAdd,
} from "react-icons/md";
import { PostList } from "../components";

const Feeds = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="feed-content">
        <InputGroup onClick={handleShow}>
          <InputGroup.Text className="bg-white">
            <MdAccountCircle className="icon text-primary" />
          </InputGroup.Text>
          <FormControl placeholder="What's on your mind?" />
          <InputGroup.Text className="bg-white">
            <MdAddCircleOutline className="icon text-primary" />
          </InputGroup.Text>
        </InputGroup>

        {/* ACTIVE USERS */}
        <div className="active-users mt-3">
          <div className="header">
            <h6 className="text-dark">Follow People</h6>
          </div>
          <div className="body">
            <div className="card-wrapper">
              <Card className="d-flex flex-column justify-content-between align-items-center py-3 px-4">
                <Image
                  roundedCircle={true}
                  fluid={true}
                  src="img/profile/profile-4.jpg"
                  width={60}
                />
                <div className="text-center">
                  <Card.Title className="m-0">Maya Jonathan</Card.Title>
                  <Card.Text classname="text-muted">@maya</Card.Text>
                </div>
                <Button variant="sm" className="btn-primary">
                  Following
                </Button>
              </Card>
              <Card className="d-flex flex-column justify-content-between align-items-center py-3 px-4">
                <Image
                  roundedCircle={true}
                  fluid={true}
                  src="img/profile/profile-5.jpg"
                  width={60}
                />
                <div className="text-center">
                  <Card.Title className="m-0">Sara Williams</Card.Title>
                  <Card.Text classname="text-muted">@sara</Card.Text>
                </div>
                <Button
                  variant="sm"
                  className="btn-outline-primary btn-follow px-3"
                >
                  <MdAdd />
                  Follow
                </Button>
              </Card>
              <Card className="d-flex flex-column justify-content-between align-items-center py-3 px-4">
                <Image
                  roundedCircle={true}
                  fluid={true}
                  src="img/profile/profile-2.jpg"
                  width={60}
                />
                <div className="text-center">
                  <Card.Title className="m-0">Mel Emmanuel</Card.Title>
                  <Card.Text classname="text-muted">@mel</Card.Text>
                </div>
                <Button
                  variant="sm"
                  className="btn-outline-primary btn-follow px-3"
                >
                  <MdAdd />
                  Follow
                </Button>
              </Card>
              <Card className="d-flex flex-column justify-content-between align-items-center py-3 px-4">
                <Image
                  roundedCircle={true}
                  fluid={true}
                  src="img/profile/profile-3.jpg"
                  width={60}
                />
                <div className="text-center">
                  <Card.Title className="m-0">David Max</Card.Title>
                  <Card.Text classname="text-muted">@daveyoung</Card.Text>
                </div>
                <Button
                  variant="sm"
                  className="btn-outline-primary btn-follow px-3"
                >
                  <MdAdd />
                  Follow
                </Button>
              </Card>
              <Card className="d-flex flex-column justify-content-between align-items-center py-3 px-4">
                <Image
                  roundedCircle={true}
                  fluid={true}
                  src="img/profile/profile-1.jpg"
                  width={60}
                />
                <div className="text-center">
                  <Card.Title className="m-0">Mabel Olaniyi</Card.Title>
                  <Card.Text classname="text-muted">@mabel265</Card.Text>
                </div>
                <Button
                  variant="sm"
                  className="btn-outline-primary btn-follow px-3"
                >
                  <MdAdd />
                  Follow
                </Button>
              </Card>
            </div>
          </div>
        </div>
        <PostList />
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

export default Feeds;
