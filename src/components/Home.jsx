import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container, Row, Col } from 'react-bootstrap';
import image from '../assests/image.png';
import Particle from './Particle';
import Type from './Type';
import './Home.css';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Internship from './Inter';

const Home = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { x: -100, y: -100, opacity: 0 },
    visible: {
      x: 45,
      y: 45,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        mass: 1.3
      }
    }
  };

  const imageVariants = {
    hidden: { x: '100vw', y: '0vw', opacity: 0 },
    visible: {
      x: -200,
      y: '-20vw',
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12,
        delay: 0.4
      }
    }
  };

  const quoteVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.0,
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <section ref={ref} id="home">
        <Container fluid className="home-section">
          <Particle />
          <Container className="home-content">
            <Row className="align-items-center">
              <Col lg={7} md={12} className="text-column">
                <motion.div
                  initial="hidden"
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                  }}
                >
                  <motion.h1 className="heading" variants={textVariants}>
                    Hi There!{' '}
                    <span className="wave" role="img" aria-labelledby="wave">
                      👋🏻
                    </span>
                  </motion.h1>
                  <motion.h1 className="heading-name" variants={textVariants}>
                    I'm <strong className="main-name">Bhagavan Porapu</strong>
                  </motion.h1>
                  <motion.div className="typewriter-wrapper" variants={textVariants}>
                    <Type />
                  </motion.div>
                </motion.div>
              </Col>

              <Col lg={5} md={12} className="image-column">
                <motion.div
                  initial="hidden"
                  animate={controls}
                  variants={imageVariants}
                  className="image-container"
                >
                  <img
                    src={image}
                    alt="Bhagavan Porapu"
                    className="profile-image"
                  />
                  <motion.div
                    className="quote-box"
                    variants={quoteVariants}
                    initial="hidden"
                    animate={controls}
                  >
                    <p>"First solve the problem. Then write the code."</p>
                    <p className="author">- John Johnson</p>
                  </motion.div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>

      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="internship"><Internship /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </>
  );
};

export default Home;
