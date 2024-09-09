import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
          <h1>Tez Raftar <span>Official</span></h1>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <NavLink to="/" activeClassName="active">
            HOME
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/vehicules" activeClassName="active">
            VEHICLES
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/about" activeClassName="active">
            ABOUT US
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/contact" activeClassName="active">
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
