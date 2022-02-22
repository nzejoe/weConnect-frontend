import React, { useState, useEffect, useContext } from "react";
import { Nav, NavItem, NavLink, Card, Image } from "react-bootstrap";
import { NavLink as RLink, useNavigate } from "react-router-dom";

// react icons
import {
  MdHome,
  MdAccountCircle,
  MdExplore,
  MdOutlineLogout,
  MdOutlineWeb,
  MdOutlineLocalFireDepartment,
  MdPeople,
  MdMailOutline,
} from "react-icons/md";

// context
import { AuthUserContext } from "../store/auth-user-context";
// utils
import { getProfileImage } from "../utils";

const CusNav = ({ show, setShow }) => {
  const { user, setIsAuthenticated } = useContext(AuthUserContext);
  const [loggedOut, setLoggedOut] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("weConnect_user");
    setIsAuthenticated();
    setLoggedOut(true);
  };

  useEffect(() => {
    if (loggedOut) {
      navigate("/account/login/", { replace: true });
    }
  }, [loggedOut, navigate]);

  return (
    <aside className={`cus__col cus__nav ${show ? "show" : "hide"}`}>
      <div className="backdrop" onClick={() => setShow(false)}></div>
      <div className="brand py-5 px-2 d-flex align-items-center">
        <MdPeople className="brand-icon text-primary" /> weConnect
      </div>
      <Nav className="content navbar-nav">
        <NavItem className="mb-2">
          <NavLink
            as={RLink}
            to="/"
            className="text-dark text-upper text-muted align-items-center d-flex p-3"
          >
            <MdHome className="icon" /> Home
          </NavLink>
        </NavItem>
        <NavItem className="mb-2">
          <NavLink
            as={RLink}
            to={`/profile/${user && user.username}/`}
            className="text-dark text-upper text-muted align-items-center d-flex p-3"
          >
            <MdAccountCircle className="icon" /> Profile
          </NavLink>
        </NavItem>
        <NavItem className="mb-2">
          <NavLink
            as={RLink}
            to="/explore"
            className="text-dark text-upper text-muted align-items-center d-flex p-3"
          >
            <MdExplore className="icon" /> Explore
          </NavLink>
        </NavItem>
        <NavItem className="mb-2">
          <NavLink
            as={RLink}
            to="/messages/"
            className="text-dark text-upper text-muted align-items-center d-flex p-3"
          >
            <MdMailOutline className="icon" /> Messages
          </NavLink>
        </NavItem>
        <NavItem className="mb-2">
          <button
            as={RLink}
            onClick={handleLogout}
            className="text-dark text-upper text-muted align-items-center d-flex p-3"
          >
            <MdOutlineLogout className="icon" /> Logout
          </button>
        </NavItem>
        <NavItem className="mb-2">
          <NavLink
            as={RLink}
            to="/pages/"
            className="text-dark text-upper text-muted align-items-center d-flex p-3"
          >
            <MdOutlineWeb className="icon" /> Pages
          </NavLink>
        </NavItem>
        <NavItem className="mb-2">
          <NavLink
            as={RLink}
            to="/trending/"
            className="text-dark text-upper text-muted align-items-center d-flex p-3"
          >
            <MdOutlineLocalFireDepartment className="icon" /> Trending
          </NavLink>
        </NavItem>
        <hr />
        {user && (
          <Card className="p-2 flex-row">
            <Image src={getProfileImage(user)} width={70} fluid roundedCircle />
            <div className="ms-2">
              <h6 className="m-0">{user.full_name}</h6>
              <p className="m-0 text-small">@{user.username}</p>
            </div>
          </Card>
        )}
      </Nav>
    </aside>
  );
};

export default CusNav;
