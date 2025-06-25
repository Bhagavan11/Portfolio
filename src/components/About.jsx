import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';
import bhagavan1 from '../assests/bhagavan1.png';

const About = () => {
  const [expanded, setExpanded] = useState(true);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const expandedContentVariants = {
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        when: "afterChildren"
      }
    }
  };

  return (
    <motion.section 
      ref={ref}
      className="about-section" 
      id="about"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.div className="section-header" variants={itemVariants}>
        <h2>#About</h2>
        <div className="header-line"></div>
      </motion.div>
      
      <div className="about-content">
        <motion.div 
          className="image-quote-container"
          variants={itemVariants}
        >
          <div className="image-container">
            <motion.img 
              src={bhagavan1} 
              alt="Bhagavan Porapu" 
              className="profile-image"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </div>
        </motion.div>
        
        <motion.div 
          className="text-content"
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants}>
            👋 Hi, I'm <span className="highlight">Bhagavan Porapu</span>
          </motion.h1>
          <motion.p className="intro-line" variants={itemVariants}>
            A passionate B.Tech 3rd-year student at GMRIT, specializing in Full-Stack Web Development using the MERN stack.
          </motion.p>
          
          <motion.div
            animate={expanded ? "visible" : "hidden"}
            variants={expandedContentVariants}
            initial={false}
          >
            {expanded && (
              <>
                <motion.p variants={itemVariants}>
                  I'm deeply interested in building web apps, solving Data Structures & Algorithms problems, and diving into Machine Learning and Cloud Computing (AWS).
                </motion.p>
                <motion.p variants={itemVariants}>
                  With strong skills in Java, C, Python, and a love for clean, responsive design, I enjoy turning complex problems into simple, functional solutions.
                </motion.p>
                <motion.p variants={itemVariants}>
                  I'm a consistent learner who enjoys collaborating, building, and growing. My goal is to become a well-rounded software engineer who contributes to impactful projects and teams.
                </motion.p>
              </>
            )}
          </motion.div>

          <motion.button 
            className="read-more" 
            onClick={() => setExpanded(!expanded)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            {expanded ? 'Read Less' : 'Read More'}
          </motion.button>

          <motion.div variants={itemVariants}>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              className="contact-box"
            >
              Contact me!!
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;