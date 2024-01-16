
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="nav">
      <div className="logo">
        <Link to="/">BK</Link>
      </div>
      <div className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰ Menu
        </button>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="signup">Join Us</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
