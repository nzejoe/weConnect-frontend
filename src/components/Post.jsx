import React, { useState } from 'react';
import { Card, Image,  } from 'react-bootstrap'
import { MdMoreVert, MdOutlineThumbUp, MdChatBubbleOutline } from "react-icons/md";

// utils
import { debug, getProfileImage, baseURL, } from '../utils';

import { CommentList } from '.';

const Post = ({ post }) => {
    const [showMenu, setShowMenu] = useState(false);

    const likes = post.likes.length;
    const comments = post.comments;

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    }

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
                <div className={`option-menu bg-light text-center clickable ${showMenu? 'show-menu': ''}`}>
                  <p className="edit m-0 py-2 px-5">Edit</p>
                  <p className="delete m-0 py-2 px-5">Delete</p>
                </div>
                <MdMoreVert className="option-icon ms-2 p-1" onClick={handleShowMenu}/>
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
