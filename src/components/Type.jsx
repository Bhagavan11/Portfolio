import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import './Type.css';
import bhagavan from "../assests/bhagavan.pdf";

function Type() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2 style={{ color: 'yellow', marginBottom: '20px' }}>
        <Typewriter
          options={{
            strings: ['Problem Solver...', 'MERN Stack Developer...'],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </h2>

      {showContent && (
        <div className="transparent-container">
          <div className="icon-links">
            <a href="https://leetcode.com/u/bhagavan_9182/" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="Leetcode" style={{ height: "40px", width: "40px" }} />
            </a>
            <a href="https://github.com/Bhagavan11" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/doodle/40/000000/github--v1.png" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/bhagavan-porapu-26a696289/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/doodle/40/000000/linkedin--v2.png" alt="LinkedIn" />
            </a>
          </div>

          <a href={bhagavan} download className="resume-btn">
            Download Resume
          </a>
        </div>
      )}
    </div>
  );
}

export default Type;
