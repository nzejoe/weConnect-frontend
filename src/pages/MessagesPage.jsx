import React from "react";
import { Card } from "react-bootstrap";
import { BsEnvelope } from "react-icons/bs";

import { Base } from "../components";

const MessagesPage = () => {
  return (
    <Base>
      <Card className={`messages`}>
        <Card.Header className="d-flex justify-content-between bg-primary text-white">
          <Card.Title className="m-0">Messages</Card.Title>
          <BsEnvelope />
        </Card.Header>
        <Card.Body>
          <p>hi everyone</p>
        </Card.Body>
      </Card>
    </Base>
  );
};

export default MessagesPage;
