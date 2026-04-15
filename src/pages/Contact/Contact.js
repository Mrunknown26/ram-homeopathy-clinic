import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Map } from 'lucide-react';
import { envConfig } from '../../config/config';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${envConfig.EMAIL}?subject=New Inquiry from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
  };

  const openGoogleMaps = () => {
    window.open(`https://www.google.com/maps/place/23%C2%B050'08.6%22N+72%C2%B007'43.4%22E/@23.8357104,72.1261419,17z/data=!3m1!4b1!4m4!3m3!8m2!3d23.8357104!4d72.1287168?hl=en&entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D`, '_blank');
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="page-title"
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="page-subtitle"
          >
            Have questions or want to book an appointment? Reach out to us. We are here to help you on your journey to natural wellness.
          </motion.p>
        </div>
      </div>

      <div className="container contact-container">
        <div className="contact-grid">

          {/* Contact Details & Map */}
          <motion.div
            className="contact-info-panel glass-panel"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Contact Information</h2>
            <div className="contact-item">
              <div className="icon-circle"><MapPin size={24} /></div>
              <div>
                <h4>Address</h4>
                <p>5, Krishnapark soc. opp. padamnath mandir 1st gate, patan, gujarat, 384265</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon-circle"><Phone size={24} /></div>
              <div>
                <h4>Phone</h4>
                <p>+91 {envConfig.NUMBER}</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon-circle"><Mail size={24} /></div>
              <div>
                <h4>Email</h4>
                <p>{envConfig.EMAIL}</p>
              </div>
            </div>

            <div className="map-container">
              <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3649.518636524931!2d72.12614187533855!3d23.83571037861229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDUwJzA4LjYiTiA3MsKwMDcnNDMuNCJF!5e0!3m2!1sen!2sin!4v1775835399342!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: 'var(--radius-md)' }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title='Ram Homeopathy Clinic Location'
              ></iframe>
              <button className="btn btn-outline map-btn" onClick={openGoogleMaps}>
                <Map size={18} /> Get Directions
              </button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-form-panel"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-panel form-wrapper">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">

                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Contact Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="Enter your contact number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
