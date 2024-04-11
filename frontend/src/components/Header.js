// src/components/Header/Header.js
import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="logo">Ira Trubova</div>
      <nav className={`nav ${isMenuOpen ? 'show' : ''}`}>
        <div className='nav_wrapper'>
          <ul>
  <Link to="/" onClick={toggleMenu}>My hobbies</Link> 
  <Link to="/products" onClick={toggleMenu}>My books</Link> 
  <Link to="/" onClick={toggleMenu}>My gallery</Link> 
  <Link to="/" onClick={toggleMenu}>My projects</Link>
  <Link to="/" onClick={toggleMenu}>Contact</Link>
  </ul>
  </div>
      </nav>
      {/* Add conditional class for the hamburger menu */}
      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;


