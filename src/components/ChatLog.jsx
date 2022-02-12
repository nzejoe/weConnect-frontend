import React, { useState } from "react";
import { Card } from "react-bootstrap";
import {
  BsEnvelope,
  BsChevronDoubleDown,
  BsChevronDoubleUp,
} from "react-icons/bs";

const ChatLog = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  return (
    <Card className={`chat-log position-fixed ${show ? "show" : "hide"}`}>
      <Card.Header className="d-flex justify-content-between bg-primary text-white">
        <Card.Title className="m-0">Messages</Card.Title>
        <div className="icon-container">
          <BsEnvelope />
          <span className="arrows ms-2 clickable">
            {show ? <BsChevronDoubleDown onClick={toggleShow}/> : <BsChevronDoubleUp onClick={toggleShow}/>}
          </span>
        </div>
      </Card.Header>
      <Card.Body>
        <p>hi everyone</p>
      </Card.Body>
    </Card>
  );
};

export default ChatLog;
