import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { MdPeople } from "react-icons/md";

const UnauthenticatedUser = ({ children }) => {
  return (
    <Container className="unauthenticated-user vh-100 pt-5">
      <Row xs={1} md={2}>
        <Col className="d-flex justify-content-center">
          <div className="brand-container d-flex align-items-center">
            <MdPeople className="icon text-primary" />
            weConnect
          </div>
        </Col>
        <Col className="d-flex justify-content-center">{children}</Col>
      </Row>
    </Container>
  );
};

export default UnauthenticatedUser;
