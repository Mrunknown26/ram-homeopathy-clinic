import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import doctorimage from "../../assests/images/doctorImage.png"
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="page-title"
          >
            About <span className="gradient-text">Us</span>
          </motion.h1>
        </div>
      </div>

      <div className="container about-container">
        <div className="about-grid">

          <motion.div
            className="doctor-image-container"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-panel image-frame">
              <img
                src={doctorimage}
                alt="Dr. Bhumika Lakhamsibhai Ukani"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="experience-badge glass-panel">
              <span className="years">2+</span>
              <span className="text">Years<br />Experience</span>
            </div>
          </motion.div>

          <motion.div
            className="doctor-info"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="doctor-name">Dr. Bhumika Lakhamsibhai Ukani</h2>
            <h4 className="doctor-qualifications">BHMS (Homoeopathy)</h4>

            <p className="doctor-bio">
              Welcome to Ram Homoeopathic Clinic. With a profound belief in restoring health intrinsically without harmful side effects, our clinic is dedicated to providing superior classical homoeopathic treatments.
              <br /><br />
              Our approach treats the patient, not just the disease. Focusing on deep-acting remedies, we've successfully addressed chronic conditions spanning dermatology, respiratory health, orthopaedics, psychological wellbeing, and specialized disorders. We aim to elevate your immunity and inner vitality for long-lasting health.
            </p>

            <div className="highlights-row">
              <div className="highlight-item">
                <GraduationCap size={28} className="highlight-icon" />
                <span>Expert Qualifications</span>
              </div>
              <div className="highlight-item">
                <Award size={28} className="highlight-icon" />
                <span>Certified & Recognized</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default About;
