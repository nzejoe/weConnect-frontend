import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const CusNav = ({ show, setShow }) => {
  return (
    <aside className={`cus__col cus__nav ${show ? "show" : "hide"}`}>
      <div className="backdrop" onClick={() => setShow(false)}></div>
      <ul className="content navbar-nav justify-content-center flex-grow-1">
        <li className="nav-item mb-4">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item mb-4">
          <NavLink to="/profile/2345/">Profile</NavLink>
        </li>
        <li className="nav-item mb-4">
          <NavLink to="/profile/2345/">Explore</NavLink>
        </li>
        <li className="nav-item mb-4">
          <NavLink to="/profile/2345/">Language</NavLink>
        </li>
        <li className="nav-item mb-4">
          <NavLink to="/profile/2345/">Logout</NavLink>
        </li>
        <li className="nav-item mb-4">
          <NavLink to="/">Pages</NavLink>
        </li>
        <li className="nav-item mb-4">
          <NavLink to="/">Trending</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default CusNav;
