import React from "react";
import { Card, Image, Button } from "react-bootstrap";
import { MdAdd, MdOutlineOpenInNew, MdDone } from "react-icons/md";

const PeopleTabContent = () => {
  return (
    <div className="people-tab">
      <div className="list">
        <div className="people-to-follow">
          <h6 className="mb-3">People you can follow</h6>
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
                  <h6>John Smith</h6>
                  <p className="text-small">@smith</p>
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
                  <h6>Julie Smith</h6>
                  <p className="text-small">@julie</p>
                  <p className="text">Designer</p>
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
                    <span className="verified-icon bg-primary">
                      <MdDone className="text-white" />
                    </span>
                  </h6>
                  <p className="text-small">@julie</p>
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
      </div>
    </div>
  );
};

export default PeopleTabContent;
