import React from "react";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li><Link to="/engine" className="custom-link">Research Engine</Link></li>
        <li>Add Case</li>
        <li><Link to="/case-prediction" className="custom-link">Case Prediction</Link></li>
        <li>File Summariser</li>
        <li>Judge's Portal</li>
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
