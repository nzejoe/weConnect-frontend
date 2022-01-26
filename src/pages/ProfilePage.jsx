import React, { useState } from 'react';
import { Card, Image, Button } from "react-bootstrap";
import {
  MdDone,
  MdAdd,
  MdOutlineLink,
  MdOutlineCalendarToday,
} from "react-icons/md";
import { Link } from 'react-router-dom';
import { PageHeader, ProfileTabs, PostList } from '../components';

const ProfilePage = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const tabIndexHandler = (index) => {
    setTabIndex(index)
  }

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
              <MdOutlineLink className="me-1 text-muted" />
              <Link to="/profile/2443/" className="text-small user-link">
                /profile/mayajonathan/
              </Link>
            </span>
            <span className="text-small">
              {" "}
              <MdOutlineCalendarToday className="me-1" /> Joined on Jan 2022
            </span>
          </p>
        </Card.Body>
        <Card.Body className="pt-0">
          <div className="user-follow d-flex">
            <div className="followers me-5">
              <p className="text-small m-0">12k Followers</p>
              <div className="images">
                <Image
                  roundedCircle
                  src="/img/profile/profile-1.jpg"
                  width={20}
                />
                <Image
                  roundedCircle
                  src="/img/profile/profile-2.jpg"
                  width={20}
                />
                <Image
                  roundedCircle
                  src="/img/profile/profile-3.jpg"
                  width={20}
                />
                <Image
                  roundedCircle
                  src="/img/profile/profile-4.jpg"
                  width={20}
                />
              </div>
            </div>
            <div className="followering">
              <p className="text-small m-0">4 Following</p>
              <div className="images">
                <Image
                  roundedCircle
                  src="/img/profile/profile-4.jpg"
                  width={20}
                />
                <Image
                  roundedCircle
                  src="/img/profile/profile-2.jpg"
                  width={20}
                />
                <Image
                  roundedCircle
                  src="/img/profile/profile-3.jpg"
                  width={20}
                />
                <Image
                  roundedCircle
                  src="/img/profile/profile-5.jpg"
                  width={20}
                />
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
      <ProfileTabs getTabIndex={tabIndexHandler}/>
      <div className="tab-contents">
        {tabIndex === 0 && <PostList/> }
        {tabIndex === 1 && <PostList/> }
      </div>
    </div>
  );
};

export default ProfilePage;
