import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import aws from "../assests/aws.png";
import './Internship.css';

const Internship = () => {
    return (
        <section className="internship-section" id="internship">
            {/* Section Header */}
            <div className="section-header">
                <h2>#Experience</h2>
                <div className="header-line"></div>
                
            </div>

            {/* Internship Content */}
            <div className="internship-content">
                {/* Company Logo */}
                <div className="company-logo-container">
                    <img src={aws} alt="Hashtek Logo" className="company-logo" />
                </div>

                {/* Internship Details */}
                <div className="internship-details">
                    <h3>AWS Cloud Intern</h3>
                    <p className="company-duration">Hashtek Solution, Vizag | One Month</p>
                    
                    <ul className="responsibilities-list">
                        <li>
                            <FiCheckCircle className="icon" />
                            <span>Proficient in core AWS services including EC2, S3, IAM, VPN, and Load Balancers</span>
                        </li>
                        <li>
                            <FiCheckCircle className="icon" />
                            <span>Demonstrated strong understanding of cloud architecture and service models</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Tools & Databases */}
            
      
        </section>
    );
};

export default Internship;