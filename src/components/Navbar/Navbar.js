import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container nav-container">
        <NavLink to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
          <img src="/ramhomeopathylogo.svg" alt="Logo" className="logo-icon" />
          <div className="logo-text">
            <h1>Ram Homoeopathic</h1>
            <span>Clinic</span>
          </div>
        </NavLink>

        <div className="nav-links desktop-menu">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>HOME</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>TREATMENT/SERVICES</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>ABOUT US</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>CONTACT</NavLink>
        </div>

        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`mobile-menu glass-panel ${isOpen ? 'open' : ''}`}>
        <NavLink to="/" className="mobile-link" onClick={() => setIsOpen(false)}>HOME</NavLink>
        <NavLink to="/services" className="mobile-link" onClick={() => setIsOpen(false)}>TREATMENT/SERVICES</NavLink>
        <NavLink to="/about" className="mobile-link" onClick={() => setIsOpen(false)}>ABOUT US</NavLink>
        <NavLink to="/contact" className="mobile-link" onClick={() => setIsOpen(false)}>CONTACT</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
