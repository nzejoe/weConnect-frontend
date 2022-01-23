import React from 'react';
import { NavLink } from 'react-router-dom';

const CusNav = ({ show, setShow }) => {
  return (
    <div className={`cus__col cus__nav ${show ? "show" : ""}`}>
      <div className="backdrop" onClick={()=>setShow(false)}></div>
      <ul className="content">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/profile/2345/">Profile</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default CusNav;
