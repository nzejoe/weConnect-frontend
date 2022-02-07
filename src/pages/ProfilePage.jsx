import React, { useState, useContext, useEffect } from "react";
import { Card, Image, Button, Spinner } from "react-bootstrap";
import { MdDone, MdOutlineLink, MdOutlineCalendarToday } from "react-icons/md";
import { Link } from "react-router-dom";
// context
import { AuthUserContext } from "../store/auth-user-context";
import { PostContext } from "../store/post-context";
import { PageHeader, ProfileTabs, PostList, Base } from "../components";

// utils
import { getJoinedDate, debug, baseURL, getProfileImage } from "../utils";

const ProfilePage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { isAuthenticated, user, getUserInfo } = useContext(AuthUserContext);
  const { loading, getUserPosts } = useContext(PostContext);


  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line
  }, [isAuthenticated]);

  useEffect(() => {
    getUserPosts();
    // eslint-disable-next-line
  }, []);

  const tabIndexHandler = (index) => {
    setTabIndex(index);
  };

  return (
    <Base>
      {user.last_name && (
        <div className="profile-page">
          <PageHeader pageTitle={`${user.first_name} ${user.last_name}`} />
          <Card>
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div className="user-container d-flex align-items-center">
                <Image
                  fluid
                  roundedCircle
                  width={80}
                  src={getProfileImage(user)}
                  className="me-2"
                />
                <div className="user-info">
                  <h6 className="d-flex m-0">
                    {user.first_name} {user.last_name}{" "}
                    <span className="verified-badge bg-primary">
                      <MdDone className="text-white" />
                    </span>
                  </h6>
                  <p className="text-small">@maya</p>
                </div>
              </div>
              <div className="btn-follow">
                <Button variant="outline-primary d-flex align-items-center">
                  Edit profile
                </Button>
              </div>
            </Card.Body>
            <Card.Body>
              <h6 className="text-muted">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                quod, ipsa similique dolores ducimus deserunt nulla, ex
                necessitatibus animi illum harum enim numquam aperiam
                doloremque. Commodi officia reiciendis iure ea.
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
                  <MdOutlineCalendarToday className="me-1" /> Joined on{" "}
                  {getJoinedDate(user.date_joined)}
                </span>
              </p>
            </Card.Body>
            <Card.Body className="pt-0">
              {/* followers */}
              <div className="user-follow d-flex">
                <div className="followers me-5">
                  <p className="text-small m-0">
                    {user.followers.length} Followers
                  </p>
                  <div className="images">
                    {user.followers.slice(0, 4).map((fw, idx) => {
                      return (
                        <Image
                          key={idx}
                          roundedCircle
                          src={getProfileImage(fw.follower)}
                          width={20}
                        />
                      );
                    })}
                  </div>
                </div>
                {/* following */}
                <div className="followering">
                  <p className="text-small m-0">
                    {user.following.length} Following
                  </p>
                  <div className="images">
                    {user.following.slice(0, 4).map((fw, idx) => {
                      return (
                        <Image
                          key={idx}
                          roundedCircle
                          src={getProfileImage(fw.following)}
                          width={20}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <ProfileTabs getTabIndex={tabIndexHandler} />
          {!loading ? (
            <div className="tab-contents">
              {tabIndex === 0 && <PostList />}
              {tabIndex === 1 && <PostList />}
            </div>
          ) : (
            <div className="w-100 text-center">
              <Spinner animation="grow" />
            </div>
          )}
        </div>
      )}
    </Base>
  );
};

export default ProfilePage;
