import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Image } from "react-bootstrap";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { AuthUserContext } from "../store/auth-user-context";
// temp
import { chatMessages } from "../utils/temp";
import { Base } from "../components";

const DirectMessagePage = () => {
  const { user } = useContext(AuthUserContext);
  const { thread } = useParams();
  const thisThread = chatMessages.find((chat) => chat.id === thread);

  // this will return list of all messages from other user but be sliced down to just one
  const otherUser = thisThread.messages.filter(
    (chat) => chat.user.username !== user.username
  )[0];

  return (
    <Base>
      <Card className={`messages p-0`}>
        <Card.Header className="d-flex align-items-center">
          <Link to={'/messages/'}>
              <MdOutlineKeyboardBackspace/>
          </Link>
          <Card.Title className="d-flex ms-5">
            <Image
              src={otherUser.user.avatar}
              width={50}
              height={50}
              roundedCircle
            />
            <div className="ms-2">
              <h6 className="mb-0">{otherUser.user.username}</h6>
            </div>
          </Card.Title>
        </Card.Header>
        <Card.Body>
            {user && thisThread.messages.map((chat, idx) => {
                if (chat.user.username === user.username) {
                  return (
                    <div key={idx} className="my-chat">
                      <p className="py-2 px-3 text-muted">{chat.message}</p>
                    </div>
                  );
                }
                return (
                  <div key={idx} className="other-chat d-flex">
                    <Image
                      src={chat.user.avatar}
                      width={40}
                      height={40}
                      roundedCircle
                    />
                    <p className=" ms-2 py-2 px-3 text-muted">
                      {chat.message}
                    </p>
                  </div>
                );
            })}
        </Card.Body>
      </Card>
    </Base>
  );
};

export default DirectMessagePage;
