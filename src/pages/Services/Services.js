import React from 'react';
import { motion } from 'framer-motion';
import { Thermometer, Fingerprint, Wind, User, Activity, Brain } from 'lucide-react';
import './Services.css';

const services = [
  {
    id: 1,
    title: "General Ailments",
    icon: <Thermometer size={36} />,
    description: "Effective treatment for all types of fever, cold, cough, headache, and body aches. Strengthening the overall immune system naturally.",
    tags: ["Fever", "Cold", "Cough", "Headache", "Bodyache"]
  },
  {
    id: 2,
    title: "Dermatology",
    icon: <Fingerprint size={36} />,
    description: "Safe solutions for chronic skin disorders addressing the issue from within.",
    tags: ["Acne", "Allergy", "Psoriasis", "Eczema", "Herpes", "Lichen Planus", "Vitiligo", "Fungal Infection"]
  },
  {
    id: 3,
    title: "Respiratory Diseases",
    icon: <Wind size={36} />,
    description: "Comprehensive management of acute and chronic breathing illnesses and respiratory tract infections.",
    tags: ["Asthma", "Allergic Rhinitis", "Bronchitis", "Sinusitis", "Nasal Polyps", "Tonsillitis", "COPD", "T.B."]
  },
  {
    id: 4,
    title: "Male Disorders",
    icon: <User size={36} />,
    description: "Confidential and effective remedies for male reproductive and sexual health issues without artificial chemicals.",
    tags: ["Erectile Dysfunction", "Impotency", "Low Libido", "Premature Ejaculation", "Delayed/Inhibited Ejaculation", "Nightfall"]
  },
  {
    id: 5,
    title: "Orthopaedic issues",
    icon: <Activity size={36} />,
    description: "Relief from joint pains, inflammation, and musculoskeletal disorders restoring mobility and comfort.",
    tags: ["Cervical & Lumbar Spondylitis", "Sciatic Pain", "Osteoarthritis", "Rheumatoid Arthritis", "Fibromyalgia", "Backache"]
  },
  {
    id: 6,
    title: "Psychology & Mental Health",
    icon: <Brain size={36} />,
    description: "Gentle healing for mental distress and emotional imbalances, promoting a calm and balanced mind.",
    tags: ["Anxiety", "Depression", "Panic Disorder", "Phobias", "Hallucinations", "Mood Swings"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Services = () => {
  return (
    <div className="services-page">
      <div className="services-header">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="page-title"
          >
            Treatments <span className="gradient-text">& Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="page-subtitle"
          >
            We provide specialized homoeopathic treatments tailored to address the root causes of individual ailments. Explore our areas of expertise below.
          </motion.p>
        </div>
      </div>

      <div className="container services-container">
        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service) => (
            <motion.div key={service.id} className="service-card glass-panel" variants={cardVariants}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <div className="service-tags">
                {service.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
