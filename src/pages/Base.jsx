import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { CusNav, SideBlog } from "../components";

const Base = ({ children }) => {
  const [show, setShow] = useState(false);

useEffect(()=>{
     window.addEventListener('resize',(e)=>{
        if(e.target.innerWidth > 576){
            setShow(false);
        }
    })
}, [])
 
  return (
    <div>
        <Container className="cus__navbar">
            <div className="cus__brand">
              <Link to="/">weConnect</Link>
            </div>
            <div
              className={`nav__toggler ${show ? "show" : ""}`}
              onClick={() => setShow(!show)}
            >
              <span></span>
            </div>
        </Container>
        <Container className="cus__row">
          <CusNav show={show} setShow={setShow}/>
          {children}
          <SideBlog />
        </Container>
    </div>
  );
};

export default Base;
