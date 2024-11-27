import React from "react";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Judge's Portal</li>
        <li>Support</li>
        <li>Security</li>
        </ul>
        <ul className="features">
        <li>
          <select className="language-select">
            <option>Switch Language</option>
            <option>English</option>
            <option>Hindi</option>
          </select>
        </li>
        <li>
          <i className="user-icon">👤</i>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
