import React from 'react';
import { Row, Col } from 'react-bootstrap'
import { MdPeople } from "react-icons/md";

const UnauthenticatedUser = ({ children }) => {
  return <div className='unauthenticated-user'>
      <Row sm={1} md={2}>
        <Col>
            <div className="brand-container">
                <MdPeople/>
                weConnect
            </div>
        </Col>
        <Col>{children}</Col>
      </Row>
  </div>;
};

export default UnauthenticatedUser;
