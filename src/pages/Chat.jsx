import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Form, Button, Card, InputGroup } from "react-bootstrap";
// context
import { AuthUserContext } from "../store/auth-user-context";

const Chat = () => {
  const { user, getUserInfo } = useContext(AuthUserContext);
  const [messages, setMessages] = useState(["hi"]);
  const [chatMessage, setChatMessage] = useState("");

  const { room } = useParams();

  const endpoint = `ws://localhost:8000/ws/chat/${room}/?user_id=${user.id}`;
  const sockect = new WebSocket(endpoint);

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line
  }, []);

  const handleInputChange = (e) => {
    setChatMessage(e.target.value);
  };

  // this function wait for websocket connection before sending message
  // const waitForConnection = (message, interval) => {
  //   if (sockect.readyState === 1) {
  //     sockect.send(message);
  //   } else {
  //     setTimeout(() => {
  //       sockect.send(message);
  //     }, interval);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(chatMessage.trim()){
      if (sockect.readyState === 1) {
        sockect.send(chatMessage);
      } else {
        setTimeout(() => {
          sockect.send(chatMessage);
        }, 1000);
      }
      setChatMessage("");
    }
  };

  sockect.onmessage = (e) => {
    const msg = JSON.parse(e.data);
    setMessages((preMsg) => [...preMsg, msg["message"]]);
  };

  const style = {
    width: "30rem",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <Container className="position-relative vw-100 vh-100">
      <Card style={style} className="p-3">
        <ul style={{ minHeight: "300px" }}>
          {messages &&
            messages.map((msg, idx) => {
              return <li key={idx}>{msg}</li>;
            })}
        </ul>
        <Form className="top" onSubmit={handleSubmit}>
          <InputGroup>
            <Form.Control
              placeholder="Type a new message"
              onChange={handleInputChange}
              value={chatMessage}
            />
            <InputGroup.Text className="bg-primary">
              <Button type="submit">Send</Button>
            </InputGroup.Text>
          </InputGroup>
        </Form>
      </Card>
    </Container>
  );
};

export default Chat;
