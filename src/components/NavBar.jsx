import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">BHAGAVAN</div>

      <img
        src="https://img.shields.io/badge/dynamic/json?style=for-the-badge&labelColor=black&color=%23ffa116&label=Solved&query=solvedOverTotal&url=https%3A%2F%2Fleetcode-badge.vercel.app%2Fapi%2Fusers%2Fbhagavan_9182&logo=leetcode&logoColor=yellow"
        alt="LeetCode Badge"
      />

      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="home" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>About</Link>
        <Link to="skills" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Skills</Link>
        <Link to="projects" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Projects</Link>
        <Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Contact</Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default NavBar;
