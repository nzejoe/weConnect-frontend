import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { MdPeople } from "react-icons/md";

const UnauthenticatedUser = ({ children, className }) => {
  return (
    <Container className={`unauthenticated-user vh-100 pt-5 ${className}`}>
      <Row xs={1} md={2}>
        <Col className="d-flex justify-content-center mb-5">
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
