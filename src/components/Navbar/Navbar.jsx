import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav>
        <ul>
          <li>
            <Link to="book" className="nav-link">
              <h4>Home</h4>
            </Link>
          </li>
          <li>
            <Link to="about" className="nav-link">
              <h4>About</h4>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
