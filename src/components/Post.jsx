import React, { useState, useEffect, useContext } from "react";
import { Card, Image, Button } from "react-bootstrap";
import {
  MdMoreVert,
  MdThumbUp,
  MdOutlineThumbUp,
  MdChatBubbleOutline,
} from "react-icons/md";
// contex
import { AuthUserContext } from "../store/auth-user-context";
import { PostContext } from "../store/post-context";

// utils
import { isLiked } from "../utils";

import { CommentList, ClickOutsideDetector, PostUpdateForm } from ".";

const Post = ({ post }) => {
  const { user } = useContext(AuthUserContext);
  const { postDelete, postLike, postUnlike } = useContext(PostContext);

  const [showMenu, setShowMenu] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const likes = post.likes.length;
  const comments = post.comments;

  // show menu toggler
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const deleteMenuCloseHandler = () => {
    setIsDelete(false);
    setShowMenu(false);
  };

  const handleEditing = (bool) => {
    setIsEditing(bool);
  };

  // post delete handler function
  const postDeleteHandler = (postId) => {
    setIsDelete(false);
    setShowMenu(false);
    postDelete(postId);
  };

  // handle closing delete menu on click outside the div
  useEffect(() => {
    if (!showMenu) {
      setIsDelete(false);
    }
  }, [showMenu]);

  return (
    <>
      <div className="post my-3" key={post.id}>
        <Card>
          <div className="post-header mb-3 p-3 d-flex justify-content-between align-items-center">
            <div className="post-author d-flex">
              <Image
                fluid
                roundedCircle
                width={60}
                src={post.author.avatar}
              />
              <div className="author-info ms-2">
                <Card.Title className="m-0">{post.author.full_name}</Card.Title>
                <Card.Text className="text-muted m-0 username">
                  @{post.author.username}
                </Card.Text>
              </div>
            </div>
            <div className="post-date">
              <div className="text-muted date d-flex align-items-center">
                {post.created} {/* post option */}
                {/* CHECK IF USER IS OWNER OF THE POST */}
                {user && user.id === post.author.id && (
                  <div className="post-option position-relative">
                    {!isDelete ? (
                      <ClickOutsideDetector
                        isOpen={showMenu}
                        closeMenu={handleShowMenu}
                        className={`option-menu bg-light text-center clickable shadow-lg ${
                          showMenu ? "show-menu" : ""
                        }`}
                      >
                        <div>
                          <p
                            className="edit m-0 py-2 px-5"
                            onClick={() => handleEditing(true)}
                          >
                            Edit
                          </p>
                          <p
                            className="delete m-0 py-2 px-5"
                            onClick={() => setIsDelete(true)}
                          >
                            Delete
                          </p>
                        </div>
                      </ClickOutsideDetector>
                    ) : (
                      <ClickOutsideDetector
                        isOpen={showMenu}
                        closeMenu={handleShowMenu}
                        className={`option-menu delete-option bg-secondary text-white shadow-lg text-small p-2 ${
                          showMenu ? "show-menu" : ""
                        }`}
                      >
                        <div>
                          <p>Are sure you want to delete this post?</p>
                          <div className="d-flex justify-content-end">
                            <Button
                              className="bg-danger text-white me-1"
                              onClick={() => postDeleteHandler(post.id)}
                            >
                              Yes, Sure!
                            </Button>
                            <Button
                              className="bg-success text-white"
                              onClick={deleteMenuCloseHandler}
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      </ClickOutsideDetector>
                    )}

                    <MdMoreVert
                      className="option-icon ms-2 p-1"
                      onClick={handleShowMenu}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="post-body">
            <p className="post-text text-muted px-3">{post.text}</p>
            {post.image && (
              <Card.Img
                className="post-img"
                src={`${post.image}`}
              ></Card.Img>
            )}
          </div>
          <div className="post-actions py-2">
            <div className="count d-flex text-muted mb-1 px-4">
              <div className="like clickable me-5 mb-2">
                {isLiked(user, post) ? (
                  <MdThumbUp
                    className="count-icon text-primary"
                    onClick={() => postUnlike(post.id)}
                  />
                ) : (
                  <MdOutlineThumbUp
                    className="count-icon"
                    onClick={() => postLike(post.id)}
                  />
                )}{" "}
                {likes}
              </div>
              <div className="comment-count clickable">
                <MdChatBubbleOutline className="count-icon" /> {comments.length}
              </div>
            </div>

            {/* comment list */}
            <CommentList post={post} />
          </div>
        </Card>
      </div>
      {isEditing && (
        <PostUpdateForm
          isEditing={isEditing}
          handleEditing={handleEditing}
          postData={post}
        />
      )}
    </>
  );
};

export default Post;
