import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";

const NavTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const getIndex = (index) => {
    setTabIndex(index);
  };

  return (
    <div className="nav-tabs mb-4">
      <Card className="tabs shadow-sm w-100">
        <Row>
          <Col
            className={`feeds ${tabIndex === 0 ? "active" : ""}`}
            onClick={() => getIndex(0)}
          >
            <p className="text-dark text-muted m-0 text-center py-3">FEEDS</p>
          </Col>
          <Col
            className={`people ${tabIndex === 1 ? "active" : ""}`}
            onClick={() => getIndex(1)}
          >
            <p className="text-dark text-muted m-0 text-center py-3">PEOPLE</p>
          </Col>
          <Col
            className={`trending ${tabIndex === 2 ? "active" : ""}`}
            onClick={() => getIndex(2)}
          >
            <p className="text-dark text-muted m-0 text-center py-3">TRENDING</p>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default NavTabs;
