import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="icon">🍽️</span> TastyRestoran
      </div>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        ☰
      </button>
      <ul
        className={isMobile ? "nav-links mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <li>
          <Link to="/" className="active">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/About">ABOUT</Link>
        </li>
        <li>
          <Link to="/Service">SERVICE</Link>
        </li>
        <li>
          <Link to="/Menu">MENU</Link>
        </li>
       <li>
        <Link to="/Team">TEAM</Link>
       </li>
        <li>
          <Link to="/Contact">CONTACT</Link>
        </li>
      </ul>
      <Link to="/book" className="book-btn">
        BOOK A TABLE
      </Link>
    </nav>
  );
};

export default Navbar;
