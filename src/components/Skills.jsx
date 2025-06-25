import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';


const Skills = () => {
  const domains = [
    {
      name: "Web Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express"]
    },
    {
      name: "Programming",
      skills: ["Python", "Java", "C", "JavaScript"]
    },
    {
      name: "Databases",
      skills: ["MySQL", "MongoDB", "PostgreSQL", "SQL"]
    },
    {
      name: "Tools",
      skills: ["VS Code", "Postman", "Git", "GitHub", "AWS"]
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="section-header">
        <h2>#Skillset</h2>
        <div className="header-line"></div>
      </div>

      <div className="skills-container">
        {/* <motion.div 
          className="developer-image"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={developerImg} alt="Developer" />
          <div className="tech-sphere"></div>
        </motion.div> */}

        <div className="domains-container">
          {domains.map((domain, index) => (
            <motion.div 
              key={domain.name}
              className="domain-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <h3>{domain.name}</h3>
              <div className="skills-list">
                {domain.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="skill-item"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + skillIndex * 0.1 }}
                    whileHover={{ scale: 1.1, color: '#c770f0' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;