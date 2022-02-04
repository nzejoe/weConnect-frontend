import React, { useState, useEffect } from "react";
import { Card, Image, Button } from "react-bootstrap";
import {
  MdMoreVert,
  MdOutlineThumbUp,
  MdChatBubbleOutline,
} from "react-icons/md";

// utils
import { debug, getProfileImage, baseURL } from "../utils";

import { CommentList, ClickOutsideDetector } from ".";

const Post = ({ post }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const likes = post.likes.length;
  const comments = post.comments;

  // show menu toggler
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const deleteMenuCloseHandler = () => {
      setIsDelete(false);
      setShowMenu(false);
  }

  // handle closing delete menu on click outside the div
  useEffect(()=>{
    if(!showMenu){
        setIsDelete(false);
    }
  },[showMenu])

  return (
    <div className="post my-3" key={post.id}>
      <Card>
        <div className="post-header mb-3 p-3 d-flex justify-content-between align-items-center">
          <div className="post-author d-flex">
            <Image
              fluid
              roundedCircle
              width={60}
              src={getProfileImage(post.author)}
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
                      <p className="edit m-0 py-2 px-5">Edit</p>
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
                        <Button className="bg-danger text-white me-1">
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
            </div>
          </div>
        </div>
        <div className="post-body">
          <p className="post-text text-muted px-3">{post.text}</p>
          {post.image && (
            <Card.Img
              className="post-img"
              src={debug ? `${baseURL + post.image}` : `${post.image}`}
            ></Card.Img>
          )}
        </div>
        <div className="post-actions py-2">
          <div className="count d-flex text-muted mb-1 px-4">
            <div className="like clickable me-5">
              <MdOutlineThumbUp className="count-icon" /> {likes}
            </div>
            <div className="comment-count clickable">
              <MdChatBubbleOutline className="count-icon" /> {comments.length}
            </div>
          </div>

          {/* comment list */}
          <CommentList comments={comments} />
        </div>
      </Card>
    </div>
  );
};

export default Post;
