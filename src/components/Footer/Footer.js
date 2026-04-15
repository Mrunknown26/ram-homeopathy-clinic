import React from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';
import { envConfig } from '../../config/config';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3>Ram Homoeopathic Clinic</h3>
          <p className="footer-desc">
            Providing holistic homoeopathic treatment for a wide range of diseases with care and precision.
          </p>
          <div className="social-links">
            {/* Can add social icons here if needed in future */}
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/services">Treatment & Services</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Clinic Timings</h4>
          <ul className="timing-list">
            <li>
              <span className="day">Mon - Fri:</span>
              <span className="time">10:00 AM - 12:00 PM<br />4:00 PM - 7:00 PM</span>
            </li>
            <li>
              <span className="day">Saturday:</span>
              <span className="time">10:00 AM - 12:00 PM</span>
            </li>
            <li>
              <span className="day closed">Sunday: Closed</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul className="contact-list">
            <li>
              <MapPin className="contact-icon" size={20} />
              <span>5, Krishnapark soc. opp. padamnath mandir 1st gate, patan, gujarat, 384265.</span>
            </li>
            <li>
              <Phone className="contact-icon" size={20} />
              <span>+91 {envConfig.NUMBER}</span>
            </li>
            <li>
              <Mail className="contact-icon" size={20} />
              <span>{envConfig.EMAIL}</span>
            </li>
          </ul>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ram Homoeopathic Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
