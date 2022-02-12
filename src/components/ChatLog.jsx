import React from "react";
import { Card } from "react-bootstrap";
import {
  BsEnvelope,
  BsChevronDoubleDown,
  BsChevronDoubleUp,
} from "react-icons/bs";

const ChatLog = () => {
  return (
    <Card className="chat-log">
      <Card.Header className="d-flex justify-content-between">
        <Card.Title>Messages</Card.Title>
        <div className="icon-container">
            <BsEnvelope/>
            <span className="arrows">
                <BsChevronDoubleDown/>
            </span>
        </div>
      </Card.Header>
    </Card>
  );
};

export default ChatLog;
