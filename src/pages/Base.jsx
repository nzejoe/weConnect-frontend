import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { CusNav, SideBlog, NavTabs } from "../components";
import { MdPeople } from "react-icons/md";

const Base = ({ children, indexHandler }) => {
  const [show, setShow] = useState(false);

  
  useEffect(() => {
    if (show) {
      document.querySelector("body").classList.add("nav__shown");
    } else {
      document.querySelector("body").classList.remove("nav__shown");
    }
  }, [show]);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (e.target.innerWidth > 576) {
        setShow(false);
      }
    });
  }, []);

  return (
    <div className="main-content py-4">
      <Container className="cus__navbar">
        <div className="cus__brand d-flex align-items-center">
          <Link to="/" className="nav-link">
            <MdPeople className="icon" />
            weConnect
          </Link>
        </div>
        <div
          className={`nav__toggler ${show ? "show" : ""}`}
          onClick={() => setShow(!show)}
        >
          <span></span>
        </div>
      </Container>
      <Container className="h-sm-100">
        <Row sm={1} md={3}>
          <Col md={3} className="h-100 sticky-top">
            <CusNav show={show} setShow={setShow} />
          </Col>
          <Col md={6}>
            <NavTabs indexHandler={indexHandler} />
            {children}
          </Col>
          <Col md={3}>
            <SideBlog />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Base;
