import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { CusNav, SideBlog } from ".";
import { MdPeople } from "react-icons/md";

// context
import { AuthUserContext } from "../store/auth-user-context";
import { UsersContext } from "../store/users-context";

const Base = ({ children }) => {
  const { isAuthenticated, getUserInfo } = useContext(AuthUserContext);
  const { getUserList } = useContext(UsersContext);
  const [show, setShow] = useState(false);

  // user info getter
  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line
  }, [isAuthenticated]);

  // user list getter
  useEffect(() => {
    getUserList();
    // eslint-disable-next-line
  }, [isAuthenticated]);

  useEffect(() => {
    if (show) {
      document.querySelector("body").classList.add("nav__shown");
    } else {
      document.querySelector("body").classList.remove("nav__shown");
    }
  }, [show]);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (e.target.innerWidth > 768) {
        setShow(false);
      }
    });
  }, []);

  return (
    <div className="main py-4">
      <div className="cus__navbar w-100 pe-3">
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
      </div>
      <Container className="h-sm-100">
        <Row sm={1} md={3}>
          <Col md={3} className="h-100 sticky-top">
            <CusNav show={show} setShow={setShow} />
          </Col>
          <Col md={6} className="main-content">
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
