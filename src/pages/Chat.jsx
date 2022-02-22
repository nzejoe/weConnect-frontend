import React, { useState } from "react";
import { useParams } from 'react-router-dom'
import { Container, Form, Button, Card, InputGroup } from "react-bootstrap";

const Chat = () => {
  const [messages, setMessages] = useState(['hi']);
  const [chatMessage, setChatMessage] = useState('');

  const { room } = useParams();

 

  const token = JSON.parse(localStorage.getItem('weConnect_user')).access_token

   document.cookie = `authorization="bearer ${token};`; 
  const endpoint = `ws://localhost:8000/ws/chat/${room}/`;
  const sockect = new WebSocket(endpoint);

  const handleInputChange = (e) => {
    setChatMessage(e.target.value)
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    sockect.onopen = function(e){
      sockect.send(chatMessage);
    }

    setChatMessage('');

  }

  sockect.onmessage = (e)=>{
    const msg = JSON.parse(e.data);
    setMessages(preMsg => [...preMsg, msg['message']]);
  }

  

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
          {messages && messages.map((msg,idx) => {
              return <li key={idx}>{msg}</li>;
          })}
        </ul>
        <Form className="top" onSubmit={handleSubmit}>
          <InputGroup>
            <Form.Control placeholder="Type a new message"onChange={handleInputChange} value={chatMessage}/>
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
