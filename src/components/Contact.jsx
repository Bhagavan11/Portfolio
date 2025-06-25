import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedin, FaGithub,  FaCode } from 'react-icons/fa';
import './Contact.css';
import leetcodeLogo from "../assests/leetcode.png"

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false // Triggers every time section enters view
  });

  React.useEffect(() => {
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
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      x: (index) => (index % 2 === 0 ? 100 : -100)
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    },
    exit: {
      opacity: 0,
      x: (index) => (index % 2 === 0 ? 100 : -100),
      transition: { duration: 0.4 }
    }
  };

  const contactItems = [
    {
      title: "Connect",
      links: [
        { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/bhagavan-porapu-26a696289/", label: "LinkedIn" },
        { icon: <FaGithub />, url: "https://github.com/Bhagavan11", label: "GitHub" }
      ]
    },
    {
      title: "Coding Profiles",
      links: [
        {
          icon: <img src={leetcodeLogo} alt="LeetCode" style={{ width: "24px", height: "24px" }} />,
          url: "https://leetcode.com/u/bhagavan_9182/",
          label: "LeetCode"
        },
        {
          icon: <FaCode />,
          url: "https://www.geeksforgeeks.org/user/bhagavagy5a/",
          label: "GFG"
        }
      ]
    }
    
  ];

  return (
    <section className="contact-section" id="contact" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5 }
          }
        }}
      >
        #Contacts
      </motion.h2>
      <div className="header-line"></div>

      <motion.p
        className="contact-description"
        initial={{ opacity: 0 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { delay: 0.3, duration: 0.6 }
          }
        }}
      >
        I'm interested in internship opportunities and full time roles. However, if you have any other queries, contact me.
      </motion.p>

      <motion.div 
        className="contact-boxes"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {contactItems.map((box, boxIndex) => (
          <motion.div
            key={box.title}
            className="contact-box"
            variants={itemVariants}
            custom={boxIndex}
            whileHover={{ y: -5 }}
          >
            <h3>{box.title}</h3>
            <div className="contact-links">
              {box.links.map((link, linkIndex) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 0.3 + boxIndex * 0.2 + linkIndex * 0.1 }
                  }}
                >
                  <span className="icon">{link.icon}</span>
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="contact-info"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { delay: 0.6, duration: 0.6 }
          }
        }}
      ><div className="info-bar">
      <div className="info-item">
        <span role="img" aria-label="location">📌</span> Rajam, Andhra Pradesh
      </div>
      <div className="info-item">📧 bhagavan9182@gmail.com</div>
      <div className="info-item">🎓 B.Tech 3rd Year @ GMRIT</div>
    </div>
    
      </motion.div>

      <motion.div
        className="contact-footer"
        initial={{ opacity: 0 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { delay: 0.8, duration: 0.5 }
          }
        }}
      >
        <div className="copyright">© Copyright 2025, All rights reserved.</div>
      </motion.div>
    </section>
  );
};

export default Contact;