import React from "react";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { NavLink as RLink } from "react-router-dom";

// react icons
import {
  MdHome,
  MdAccountCircle,
  MdExplore,
  MdOutlineTranslate,
  MdOutlineLogout,
  MdOutlineWeb,
  MdOutlineLocalFireDepartment,
} from "react-icons/md";

const CusNav = ({ show, setShow }) => {
  return (
    <aside className={`cus__col cus__nav ${show ? "show" : "hide"}`}>
      <div className="backdrop" onClick={() => setShow(false)}></div>
      <Nav className="content navbar-nav justify-content-center flex-grow-1">
        <NavItem className="mb-4">
          <NavLink
            as={RLink}
            to="/"
            className="text-dark text-upper text-muted"
          >
            <MdHome /> Home
          </NavLink>
        </NavItem>
        <NavItem className="mb-4">
          <NavLink
            as={RLink}
            to="/profile/2345/"
            className="text-dark text-upper text-muted"
          >
            <MdAccountCircle /> Profile
          </NavLink>
        </NavItem>
        <NavItem className="mb-4">
          <NavLink
            as={RLink}
            to="/profile/2345/"
            className="text-dark text-upper text-muted"
          >
           <MdExplore/> Explore
          </NavLink>
        </NavItem>
        <NavItem className="mb-4">
          <NavLink
            as={RLink}
            to="/profile/2345/"
            className="text-dark text-upper text-muted"
          >
            <MdOutlineTranslate/> Language
          </NavLink>
        </NavItem>
        <NavItem className="mb-4">
          <NavLink
            as={RLink}
            to="/profile/2345/"
            className="text-dark text-upper text-muted"
          >
            <MdOutlineLogout/> Logout
          </NavLink>
        </NavItem>
        <NavItem className="mb-4">
          <NavLink
            as={RLink}
            to="/"
            className="text-dark text-upper text-muted"
          >
            <MdOutlineWeb/> Pages
          </NavLink>
        </NavItem>
        <NavItem className="mb-4">
          <NavLink
            as={RLink}
            to="/"
            className="text-dark text-upper text-muted"
          >
            <MdOutlineLocalFireDepartment/> Trending
          </NavLink>
        </NavItem>
      </Nav>
    </aside>
  );
};

export default CusNav;
