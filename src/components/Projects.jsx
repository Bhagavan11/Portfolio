import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "QuickPrep – AI-Powered Interview Prep Platform",
      description: "Built a full-stack MERN application with AI-powered chatbot for contextual concept explanations and resume-driven mock interviews with personalized learning paths.",
      technologies: "React.js, Express.js, PostgreSQL, Gemini API, Judge API",
      github: "https://github.com/Bhagavan11/QuickPrep",
      demo: "" // No demo link
    },
    {
      title: "CineStream — Netflix-style Streaming App",
      description: "Developed a full-stack OTT platform with JWT authentication, personalized watch lists, and genre-based content grid using TMDB API.",
      technologies: "React.js, Node.js, Express.js, MongoDB, TMDB API, Tailwind CSS",
      github: "https://github.com/Bhagavan11/CineStream",
      demo: "https://cine-stream-4q9u.vercel.app" // No demo link
    },
    {
      title: "Real-Time Chat App",
      description: "Built a full-stack real-time messaging platform with Socket.IO for persistent communication and MongoDB for chat history storage.",
      technologies: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Socket.IO",
      github: "https://github.com/Bhagavan11/RealTime-Chat-App",
      demo: "" // No demo link
    },
    {
      title: "Campus Connect: Intelligent College Chatbot",
      description: "AI-powered chatbot using Gemini API to automate student query resolution for academics and campus life.",
      technologies: "React.js, Node.js, Express.js, CSS, PostgreSQL, Gemini Api",
      github: "https://github.com/Bhagavan11/Campus-Connect",
      demo: "" // No demo link
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <h2>#Projects</h2>
        <div className="header-line"></div>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div 
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              delay: index * 0.15,
              duration: 0.5,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              y: -5,
              boxShadow: "0 10px 20px rgba(199, 112, 240, 0.2)"
            }}
          >
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                <span>Technologies:</span> {project.technologies}
              </div>
            </div>

            <motion.div 
              className="project-links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.15 + 0.3 }}
            >
              <motion.a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Code
              </motion.a>
              {project.demo ? (
                <motion.a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="demo-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo
                </motion.a>
              ) : (
                <motion.span 
                  className="demo-disabled"
                  whileHover={{ scale: 1.03 }}
                >
                  Not Yet Deployed
                </motion.span>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;