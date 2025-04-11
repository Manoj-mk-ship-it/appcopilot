// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // optional styling

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark px-4 py-3">
      <Link className="navbar-brand" to="/">Madison Hotels</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
