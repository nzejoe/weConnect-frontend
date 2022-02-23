import React, { useState, useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Image, Button, Modal } from "react-bootstrap";
import {
  MdDone,
  MdOutlineLink,
  MdOutlineCalendarToday,
  MdOutlineKeyboardBackspace,
  MdOutlineClose,
  MdAdd,
  MdOutlineMailOutline,
} from "react-icons/md";
// context
import { PostContext } from "../store/post-context";
import { UsersContext } from "../store/users-context";
import { AuthUserContext } from "../store/auth-user-context";

import { NotFound } from "../pages";
import {
  PageHeader,
  ProfileTabs,
  PostList,
  Base,
  UserUpdateForm,
  PasswordChangeForm,
} from "../components";

// utils
import { getJoinedDate, getProfileImage, isFollowing } from "../utils";

const ProfilePage = () => {
  // context
  const { refresh } = useContext(PostContext);
  const { user } = useContext(AuthUserContext);
  const {
    refresh: userRefresh,
    profileUser,
    profileNotFound,
    profilePosts,
    getProfileUser,
    getProfilePost,
    userFollow,
    userUnfollow,
  } = useContext(UsersContext);

  const [tabIndex, setTabIndex] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isPasswordChange, setIsPasswordChange] = useState(false);

  const { username } = useParams();

  // PROFILE USER
  useEffect(() => {
    getProfileUser(username);
    // eslint-disable-next-line
  }, [username, userRefresh]);

  useEffect(() => {
    getProfilePost(username);
    // eslint-disable-next-line
  }, [username, refresh]);
  // PROFILE USER ..//

  const tabIndexHandler = (index) => {
    setTabIndex(index);
  };

  const isUpdateHandler = (bool) => {
    setIsUpdate(bool);
    setIsPasswordChange(false);
  };

  const passwordChangeHandler = (bool) => {
    setIsPasswordChange(bool);
  };

  return (
    <Base>
      {profileNotFound ? (
        <NotFound />
      ) : (
        <>
          {profileUser.last_name && (
            <div className="profile-page">
              <PageHeader pageTitle={profileUser.full_name} />

              <Card>
                <Card.Body className="d-flex justify-content-between">
                  <div className="user-container d-flex align-items-center">
                    <Image
                      fluid
                      roundedCircle
                      width={80}
                      src={getProfileImage(profileUser)}
                      className="me-2"
                    />
                    <div className="user-info">
                      <h6 className="d-flex m-0">
                        {profileUser.full_name}{" "}
                        <span className="verified-badge bg-primary">
                          <MdDone className="text-white" />
                        </span>
                      </h6>
                      <p className="text-small">@{profileUser.username}</p>
                    </div>
                  </div>
                  <div className="btn-follow">
                    {user && user.username === username ? (
                      <Button
                        variant="outline-primary d-flex align-items-center"
                        onClick={() => isUpdateHandler(true)}
                      >
                        Edit profile
                      </Button>
                    ) : (
                      <div className="d-flex">
                        <Link to={`/messages/${profileUser.username}/`} className="me-2 h-100">
                          <MdOutlineMailOutline className="message-icon" />
                        </Link>
                        {isFollowing(user, profileUser) ? (
                          <Button
                            variant="sm"
                            className="btn-primary"
                            onClick={() => userUnfollow(profileUser.id)}
                          >
                            Following
                          </Button>
                        ) : (
                          <Button
                            variant="sm"
                            className="btn-outline-primary btn-follow px-3"
                            onClick={() => userFollow(profileUser.id)}
                          >
                            <MdAdd />
                            Follow
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </Card.Body>
                <Card.Body>
                  <h6 className="text-muted">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis, quod, ipsa similique dolores ducimus deserunt nulla,
                    ex necessitatibus animi illum harum enim numquam aperiam
                    doloremque. Commodi officia reiciendis iure ea.
                  </h6>
                  <p>
                    <span className="me-3">
                      <MdOutlineLink className="me-1 text-muted" />
                      <Link
                        to={`/profile/${username}/`}
                        className="text-small user-link"
                      >
                        /profile/{username}/
                      </Link>
                    </span>
                    <span className="text-small">
                      {" "}
                      <MdOutlineCalendarToday className="me-1" /> Joined on{" "}
                      {getJoinedDate(profileUser.date_joined)}
                    </span>
                  </p>
                </Card.Body>
                <Card.Body className="pt-0">
                  {/* followers */}
                  <div className="user-follow d-flex">
                    <div className="followers me-5">
                      <p className="text-small m-0">
                        {profileUser.followers.length} Followers
                      </p>
                      <div className="images">
                        {profileUser.followers.slice(0, 4).map((fw, idx) => {
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
                        {profileUser.following.length} Following
                      </p>
                      <div className="images">
                        {profileUser.following.slice(0, 4).map((fw, idx) => {
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
              <div className="tab-contents">
                {tabIndex === 0 && <PostList postList={profilePosts} />}
                {tabIndex === 1 && <PostList postList={profilePosts} />}
              </div>
            </div>
          )}
          {/* USER UPDATE MODAL */}
          <Modal
            show={isUpdate}
            onHide={() => isUpdateHandler(false)}
            backdrop="static"
            keyboard={false}
            className="profile-modal"
          >
            <Modal.Header>
              <Modal.Title className="text-center">
                {!isPasswordChange ? "Edit profile" : "Password change"}
              </Modal.Title>
              <MdOutlineClose
                className="clickable close-icon"
                onClick={() => isUpdateHandler(false)}
              />
            </Modal.Header>
            <Modal.Body>
              {!isPasswordChange ? (
                <UserUpdateForm isUpdateHandler={isUpdateHandler} />
              ) : (
                <PasswordChangeForm isUpdateHandler={isUpdateHandler} />
              )}
            </Modal.Body>
            <Modal.Footer>
              {!isPasswordChange ? (
                <p className="d-flex align-items-center text-small">
                  To change your password use{" "}
                  <Button
                    variant=""
                    className="px-1 text-primary"
                    onClick={() => passwordChangeHandler(true)}
                  >
                    this form
                  </Button>
                </p>
              ) : (
                <p className="d-flex align-items-center text-small">
                  <MdOutlineKeyboardBackspace className="back-icon text-muted" />
                  <Button
                    variant=""
                    className="px-1 text-primary"
                    onClick={() => passwordChangeHandler(false)}
                  >
                    Go back
                  </Button>
                </p>
              )}
            </Modal.Footer>
          </Modal>
        </>
      )}
    </Base>
  );
};

export default ProfilePage;
