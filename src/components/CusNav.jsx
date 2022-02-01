import React, { useState, useEffect } from "react";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { NavLink as RLink, useNavigate } from "react-router-dom";

// react icons
import {
  MdHome,
  MdAccountCircle,
  MdExplore,
  MdOutlineTranslate,
  MdOutlineLogout,
  MdOutlineWeb,
  MdOutlineLocalFireDepartment,
  MdPeople,
} from "react-icons/md";

const CusNav = ({ show, setShow }) => {
  const[loggedOut, setLoggedOut] = useState(false);
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('weConnect_user');
    setLoggedOut(true);
  }

  useEffect(()=>{
    if(loggedOut){
      navigate("/account/login/", { replace: true });
    }
  },[loggedOut, navigate])

  return (
    <aside className={`cus__col cus__nav ${show ? "show" : "hide"}`}>
      <div className="backdrop" onClick={() => setShow(false)}></div>
      <div className="brand py-5 px-2 d-flex align-items-center">
      <MdPeople className="brand-icon text-primary"/> weConnect
      </div>
      <Nav className="content navbar-nav">
        <NavItem className="mb-2">
          <NavLink
            as={RLink}
            to="/"
            className="text-dark text-upper text-muted align-items-center d-flex p-3"
          >
            <MdHome  className="icon"/> Home
          </NavLink>
        </NavItem>
        <NavItem className="mb-2">
          <NavLink
            as={RLink}
            to="/profile/2345/"
            className="text-dark text-upper text-muted align-items-center d-flex p-3"
          >
            <MdAccountCircle  className="icon"/> Profile
          </NavLink>
        </NavItem>
        <NavItem className="mb-2">
          <NavLink
            as={RLink}
            to="/explore"
            className="text-dark text-upper text-muted align-items-center d-flex p-3"
          >
           <MdExplore className="icon"/> Explore
          </NavLink>
        </NavItem>
        <NavItem className="mb-2">
          <NavLink
            as={RLink}
            to="/language/"
            className="text-dark text-upper text-muted align-items-center d-flex p-3"
          >
            <MdOutlineTranslate className="icon"/> Language
          </NavLink>
        </NavItem>
        <NavItem className="mb-2">
          <NavLink
            as={RLink}
            to='/'
            onClick={handleLogout}
            className="text-dark text-upper text-muted align-items-center d-flex p-3"
          >
            <MdOutlineLogout className="icon"/> Logout
          </NavLink>
        </NavItem>
        <NavItem className="mb-2">
          <NavLink
            as={RLink}
            to="/pages/"
            className="text-dark text-upper text-muted align-items-center d-flex p-3"
          >
            <MdOutlineWeb className="icon"/> Pages
          </NavLink>
        </NavItem>
        <NavItem className="mb-2">
          <NavLink
            as={RLink}
            to="/trending/"
            className="text-dark text-upper text-muted align-items-center d-flex p-3"
          >
            <MdOutlineLocalFireDepartment className="icon"/> Trending
          </NavLink>
        </NavItem>
      </Nav>
    </aside>
  );
};

export default CusNav;
