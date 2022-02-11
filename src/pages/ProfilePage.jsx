import React, { useState, useContext, useEffect } from "react";
import { Card, Image, Button, Spinner, Modal } from "react-bootstrap";
import {
  MdDone,
  MdOutlineLink,
  MdOutlineCalendarToday,
  MdOutlineKeyboardBackspace,
  MdOutlineClose,
} from "react-icons/md";
import { Link } from "react-router-dom";
// context
import { AuthUserContext } from "../store/auth-user-context";
import { PostContext } from "../store/post-context";
import { UserProfileContext } from "../store/user-profile-context";
import {
  PageHeader,
  ProfileTabs,
  PostList,
  Base,
  UserUpdateForm,
  PasswordChangeForm,
} from "../components";

// utils
import { getJoinedDate, getProfileImage } from "../utils";

const ProfilePage = () => {
  // context
  const { loading, getUserPosts } = useContext(PostContext);
  const { isAuthenticated, user, refresh, getUserInfo } = useContext(AuthUserContext);
  const { profileUser } = useContext(UserProfileContext);

  console.log(profileUser)

  const [tabIndex, setTabIndex] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isPasswordChange, setIsPasswordChange] = useState(false);

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line
  }, [isAuthenticated, refresh]);

  useEffect(() => {
    getUserPosts();
    // eslint-disable-next-line
  }, [refresh]);

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
      {user.last_name && (
        <div className="profile-page">
          <PageHeader pageTitle={user.full_name} />

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
                    {user.full_name}{" "}
                    <span className="verified-badge bg-primary">
                      <MdDone className="text-white" />
                    </span>
                  </h6>
                  <p className="text-small">@{user.username}</p>
                </div>
              </div>
              <div className="btn-follow">
                <Button
                  variant="outline-primary d-flex align-items-center"
                  onClick={() => isUpdateHandler(true)}
                >
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
      {/* USER UPDATE MODAL */}
      <Modal
        show={isUpdate}
        onHide={() => isUpdateHandler(false)}
        backdrop="static"
        keyboard={false}
        className="profile-modal"
      >
        <Modal.Header >
          <Modal.Title className="text-center">
            {!isPasswordChange ? "Edit profile" : "Password change"}
          </Modal.Title>
            <MdOutlineClose className="clickable close-icon" onClick={()=>isUpdateHandler(false)}/>
        </Modal.Header>
        <Modal.Body>
          {!isPasswordChange ? (
            <UserUpdateForm isUpdateHandler={isUpdateHandler} />
          ) : (
            <PasswordChangeForm isUpdateHandler={isUpdateHandler}/>
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
              <MdOutlineKeyboardBackspace className="back-icon text-muted"/>
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
    </Base>
  );
};

export default ProfilePage;
