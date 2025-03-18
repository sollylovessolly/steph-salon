import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav-container">
      <div className="logo"></div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={menuOpen ? "bar open" : "bar"}></div>
        <div className={menuOpen ? "bar open" : "bar"}></div>
        <div className={menuOpen ? "bar open" : "bar"}></div>
      </div>
      <div className={`nav-items ${menuOpen ? "show" : ""}`}>
        <ul>
          <Link to="/" onClick={() => setMenuOpen(false)}><li>Home</li></Link>
          <Link to="/ServicesPage" onClick={() => setMenuOpen(false)}><li>Services</li></Link>
          <Link to="/inspo" onClick={() => setMenuOpen(false)}><li>Inspo</li></Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}><li>Products</li></Link>
          <a href="https://t.me/your_channel_or_username" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}><li>Book Now</li></a>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
