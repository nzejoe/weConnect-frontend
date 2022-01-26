import React from 'react';
import { Card, Image, Button } from "react-bootstrap";
import { MdAdd, MdOutlineOpenInNew, MdDone } from "react-icons/md";

const Music = () => {
  return (
    <div className="music mb-3">
      <h6 className="mb-3">Music</h6>
      <Card>
        <Card.Body className="d-flex justify-content-between align-items-center clickable">
          <div className="user-container d-flex align-items-center">
            <Image
              fluid
              roundedCircle
              width={60}
              src="img/profile/profile-1.jpg"
              className="me-2"
            />
            <div className="user-info">
              <h6 className="d-flex">
                Adam Lavigne
                <span className="verified-badge bg-primary">
                  <MdDone className="text-white" />
                </span>
              </h6>
              <p className="text-small">@adamlavigne</p>
              <p className="text">
                <MdOutlineOpenInNew />
                Promoted
              </p>
            </div>
          </div>
          <div className="btn-follow">
            <Button variant="outline-primary d-flex align-items-center">
              <MdAdd />
              Follow
            </Button>
          </div>
        </Card.Body>
        <hr />
        <Card.Body className="d-flex justify-content-between align-items-center clickable">
          <div className="user-container d-flex align-items-center">
            <Image
              fluid
              roundedCircle
              width={60}
              src="img/profile/profile-2.jpg"
              className="me-2"
            />
            <div className="user-info">
              <h6 className="d-flex">
                H.E.R
                <span className="verified-badge bg-primary">
                  <MdDone className="text-white" />
                </span>
              </h6>
              <p className="text-small">@hermusic</p>
              <p className="text">Musician/Song Writer/Performer</p>
            </div>
          </div>
          <div className="btn-follow">
            <Button variant="outline-primary d-flex align-items-center">
              <MdAdd />
              Follow
            </Button>
          </div>
        </Card.Body>
        <hr />
        <Card.Body className="d-flex justify-content-between align-items-center clickable">
          <div className="user-container d-flex align-items-center">
            <Image
              fluid
              roundedCircle
              width={60}
              src="img/profile/profile-4.jpg"
              className="me-2"
            />
            <div className="user-info">
              <h6 className="d-flex align-items-center">
                Adele{" "}
                <span className="verified-badge bg-primary">
                  <MdDone className="text-white" />
                </span>
              </h6>
              <p className="text-small">@adele</p>
              <p className="text">Musician/Song Writer</p>
            </div>
          </div>
          <div className="btn-follow">
            <Button variant="outline-primary d-flex align-items-center">
              <MdAdd />
              Follow
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Music;
