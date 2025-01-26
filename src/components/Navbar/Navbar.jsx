import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">TikTok Clone</div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">🏠 Home</Link>
        <Link to="/profile" className="navbar-link">👤 Profile</Link>
        <Link to="/notifications" className="navbar-link">🔔 Notifications</Link>
      </div>
    </div>
  );
}

export default Navbar;
