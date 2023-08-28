import React from 'react';
import './style.css';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src='Group 18.png' alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">What We Do</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
