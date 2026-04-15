import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Shield, HeartPulse, Activity, Video, Phone } from 'lucide-react';
import BeforeAfter from '../../components/BeforeAfter/BeforeAfter';
import beforeOne from "../../assests/images/beforeOne.jpeg"
import afterOne from "../../assests/images/afterOne.jpeg"
import beforeTwo from "../../assests/images/beforeTwo.jpeg"
import afterTwo from "../../assests/images/afterTwo.jpeg"
import onlineConsultation from "../../assests/images/onlineConsultation.png"

import './Home.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeUp} className="hero-title">
              Holistic Healing <br /> with <span className="gradient-text">Homoeopathy</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="hero-subtitle">
              Welcome to Ram Homoeopathic Clinic. We provide comprehensive, natural, and side-effect-free treatments tailored to your unique constitution.
            </motion.p>
            <motion.div variants={fadeUp} className="hero-actions">
              <NavLink to="/contact" className="btn btn-primary">
                Book an Appointment <ArrowRight size={20} />
              </NavLink>
              <NavLink to="/services" className="btn btn-outline">
                Explore Treatments
              </NavLink>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-panel image-glass">
              <div className="abstract-shape shape-1"></div>
              <div className="abstract-shape shape-2"></div>
              <div className="hero-img-placeholder">
                <HeartPulse size={80} color="var(--color-primary)" />
                <p>Natural Healing</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights-section">
        <div className="container">
          <motion.div
            className="features-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="feature-card glass-panel">
              <div className="icon-wrapper"><Shield size={32} /></div>
              <h3>Safe & Natural</h3>
              <p>Our medicines are derived from natural substances and are entirely safe for all age groups.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="feature-card glass-panel">
              <div className="icon-wrapper"><Activity size={32} /></div>
              <h3>Root Cause Treatment</h3>
              <p>We believe in treating the individual, going to the root cause of the disease rather than suppressing symptoms.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="feature-card glass-panel">
              <div className="icon-wrapper"><HeartPulse size={32} /></div>
              <h3>Holistic Approach</h3>
              <p>We consider physical, physiological, and psychological aspects to restore complete health.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="results-section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="section-title">
              Real Patients, <span className="gradient-text">Real Results</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle">
              See the transformative power of holistic homoeopathic healing on chronic conditions and overall wellness.
            </motion.p>
          </motion.div>

          <div className="before-after-container-home">
            {/* <motion.div
              className="before-after-wrapper"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <BeforeAfter
                beforeImage="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=600&q=80"
                afterImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                beforeLabel="Before"
                afterLabel="After"
              />
            </motion.div> */}
            <motion.div
              className="before-after-wrapper"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              <BeforeAfter
                beforeImage={beforeOne}
                afterImage={afterOne}
                beforeLabel="Before"
                afterLabel="After"
              />
            </motion.div>
            <motion.div
              className="before-after-wrapper"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <BeforeAfter
                beforeImage={beforeTwo}
                afterImage={afterTwo}
                beforeLabel="Before"
                afterLabel="After"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Online Consultation CTA */}
      <section className="online-consultation-section">
        <div className="container">
          <motion.div
            className="consultation-card glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="consultation-content">
              <h2>Expert Care, <span className="highlight-text">From Anywhere</span></h2>
              <p>Experience the same quality of holistic homoeopathic care from the comfort of your home. Book an online consultation today and start your journey towards better health.</p>

              <div className="consultation-features">
                <div className="c-feature">
                  <div className="c-icon"><Video size={24} /></div>
                  <span>Video/Audio Calls</span>
                </div>
                <div className="c-feature">
                  <div className="c-icon"><Phone size={24} /></div>
                  <span>Quick Setup</span>
                </div>
              </div>

              <NavLink to="/contact" className="btn btn-primary consultation-btn">
                Book Online Consultation <ArrowRight size={20} />
              </NavLink>
            </div>

            <div className="consultation-visual">
              <div className="visual-ring ring-1"></div>
              <div className="visual-ring ring-2"></div>
              <img src={onlineConsultation} alt="Online Consultation" className="consultation-img" />
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
