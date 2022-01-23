import React, { useState } from "react";
import { Link } from "react-router-dom";
import { } from 'react-bootstrap'
import { CusNav, SideBlog } from "../components";

// bootstrap
import { Container } from "react-bootstrap";

// import './Pages.scss'

const Base = ({ children }) => {
    const [show, setShow] = useState(false);
    console.log(show)
  return (
    <div>
      <Container>
        <div className="cus__row">
          <div className="cus__navbar">
            <div className="cus__brand">
              <Link to="/">weConnect</Link>
            </div>
            <div className={`nav__toggler ${show? 'show': ''}`} onClick={()=>setShow(!show)}>
              <span></span>
            </div>
          </div>
          <CusNav />
          {children}
          <SideBlog />
        </div>
      </Container>
    </div>
  );
};

export default Base;
