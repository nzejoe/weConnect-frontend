import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "react-bootstrap";
import { BsEnvelope } from "react-icons/bs";
import { AuthUserContext } from "../store/auth-user-context";
// temp
import { chatMessages } from "../utils/temp";
import { Base } from "../components";

const MessagesPage = () => {
  const { user } = useContext(AuthUserContext);
  return (
    <Base>
      <Card className={`messages p-0`}>
        <Card.Header className="d-flex justify-content-between bg-primary text-white">
          <Card.Title className="m-0">Messages</Card.Title>
          <BsEnvelope />
        </Card.Header>
        <Card.Body>
            {chatMessages.map(thread=>{
                const otherUser = user && thread.messages.filter(chat=>{
                    return chat.user.username !== user.username
                })
                const otherUserLast = otherUser[otherUser.length - 1];
                return (
                  <Link key={thread.id} to={`/messages/${thread.id}/`}>
                    <Card.Body className="thread d-flex clickable border-bottom">
                      <Image
                        src={otherUserLast.user.avatar}
                        width={50}
                        height={50}
                        roundedCircle
                      />
                      <div className="ms-4">
                        <h6 className="mb-0">{otherUserLast.user.username}</h6>
                        <p className="text-muted">{otherUserLast.message}</p>
                      </div>
                    </Card.Body>
                  </Link>
                );
            })}
        </Card.Body>
      </Card>
    </Base>
  );
};

export default MessagesPage;
