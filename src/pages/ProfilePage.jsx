import React from 'react';
import { Card, Image, Button } from "react-bootstrap";
import {
  MdDone,
  MdAdd,
  MdOutlineLink,
  MdOutlineCalendarToday,
} from "react-icons/md";
import { Link } from 'react-router-dom';
import { PageHeader } from '../components';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <PageHeader />
      <Card>
        <Card.Body className="d-flex justify-content-between align-items-center">
          <div className="user-container d-flex align-items-center">
            <Image
              fluid
              roundedCircle
              width={80}
              src="/img/profile/profile-4.jpg"
              className="me-2"
            />
            <div className="user-info">
              <h6 className="d-flex m-0">
                Maya Jonathan{" "}
                <span className="verified-badge bg-primary">
                  <MdDone className="text-white" />
                </span>
              </h6>
              <p className="text-small">@maya</p>
            </div>
          </div>
          <div className="btn-follow">
            <Button variant="outline-primary d-flex align-items-center">
              <MdAdd />
              Follow
            </Button>
          </div>
        </Card.Body>
        <Card.Body>
          <h6 className="text-muted">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            quod, ipsa similique dolores ducimus deserunt nulla, ex
            necessitatibus animi illum harum enim numquam aperiam doloremque.
            Commodi officia reiciendis iure ea.
          </h6>
          <p>
            <span className="me-3">
              <MdOutlineLink className="me-1" />
              <Link to="/profile/2443/" className="text-small user-link">
                /profile/mayajonathan/
              </Link>
            </span>
            <span className="text-small">
              {" "}
              <MdOutlineCalendarToday className="me-1" /> Date Joined Jan 2022
            </span>
          </p>
        </Card.Body>
        <Card.Body>

        </Card.Body>
      </Card>
    </div>
  );
};

export default ProfilePage;
