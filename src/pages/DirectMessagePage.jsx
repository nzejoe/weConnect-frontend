import React, { useContext, useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Form, Image, InputGroup } from "react-bootstrap";
import { MdOutlineKeyboardBackspace, MdSend } from "react-icons/md";
import { AuthUserContext } from "../store/auth-user-context";
// temp
import { getProfileImage } from "../utils/";
import { Base } from "../components";

const DirectMessagePage = () => {
  const { user } = useContext(AuthUserContext);
  const [messages, setMessages] = useState([]);
  const [chatMessage, setChatMessage] = useState("");
  const logRef = useRef(null);

  const { username } = useParams();

  // const thisThread = chatMessages.find((chat) => chat.id === room_id);

  // this will return list of all messages from other user but be sliced down to just one
  // const otherUser = thisThread.messages.filter(
  //   (chat) => chat.user.username !== user.username
  // )[0];

  const user_id = JSON.parse(localStorage.getItem("__weconnect_user__"));

  const endpoint = `ws://localhost:8000/ws/chat/${username}/?user_id=${user_id.id}`;
  const sockect = new WebSocket(endpoint);

  // useEffect(() => {
  //   setMessages(thisThread.messages);
  // }, [thisThread]);

  // this wiil make sure the chat log scrolls to the bottom
  useEffect(() => {
    logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [messages]);

  // this function wait for websocket connection before sending message
  const waitForConnection = (message, interval) => {
    if (sockect.readyState === 1) {
      sockect.send(message);
    } else {
      setTimeout(() => {
        sockect.send(message);
      }, interval);
    }
  };

  const messageHandler = (e) => {
    setChatMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    waitForConnection(JSON.stringify({ message: chatMessage }), 1000);
    setChatMessage("");
  };

  sockect.onmessage = (e)=>{
    const chat = JSON.parse(e.data);
    console.log(chat.message)
    setMessages((prevMessages) => [...prevMessages, chat.message]);
  }

  return (
    <Base>
      <Card className={`direct-message-page p-0`}>
        <Card.Header className="d-flex align-items-center">
          <Link to={"/messages/"}>
            <MdOutlineKeyboardBackspace />
          </Link>
          <Card.Title className="d-flex ms-5">
            <Image
              src={''}
              width={50}
              height={50}
              roundedCircle
            />
            <div className="ms-2">
              <h3 className="mb-0 text-muted">{user.username}</h3>
            </div>
          </Card.Title>
        </Card.Header>
        <Card.Body className="messages" ref={logRef}>
          {user &&
            messages &&
            messages.map((chat, idx) => {
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
                    src={getProfileImage(chat.user)}
                    width={40}
                    height={40}
                    roundedCircle
                  />
                  <p className=" ms-2 py-2 px-3 text-muted">{chat.message}</p>
                </div>
              );
            })}
        </Card.Body>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Form.Control
              value={chatMessage}
              onChange={messageHandler}
              placeholder="Start a new message"
            />
            <InputGroup.Text
              className="bg-white text-primary clickable"
              onClick={handleSubmit}
            >
              <MdSend />
            </InputGroup.Text>
          </InputGroup>
        </Form>
      </Card>
    </Base>
  );
};

export default DirectMessagePage;
