import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";

const NavTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const getIndex = (index) => {
    setTabIndex(index);
  };

  return (
    <div className="nav-tabs">
      <Card className="tabs shadow-sm w-100">
        <Row>
          <Col
            className={`feeds ${tabIndex === 0 ? "active" : ""}`}
            onClick={() => getIndex(0)}
          >
            <p className="text-dark text-muted m-0 text-center py-2">FEEDS</p>
          </Col>
          <Col
            className={`people ${tabIndex === 1 ? "active" : ""}`}
            onClick={() => getIndex(1)}
          >
            <p className="text-dark text-muted m-0 text-center py-2">PEOPLE</p>
          </Col>
          <Col
            className={`trending ${tabIndex === 2 ? "active" : ""}`}
            onClick={() => getIndex(2)}
          >
            <p className="text-dark text-muted m-0 text-center py-2">TRENDING</p>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default NavTabs;
