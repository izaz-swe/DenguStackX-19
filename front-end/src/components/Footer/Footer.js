import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUniversity } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Dengue Research</h4>
            <p>Advanced machine learning for infectious disease prediction and healthcare improvement.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a 
                  href="#research"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#research');
                  }}
                >
                  Research
                </a>
              </li>
              <li>
                <a 
                  href="#models"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#models');
                  }}
                >
                  Models
                </a>
              </li>
              <li>
                <a 
                  href="#test"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#test');
                  }}
                >
                  Test Model
                </a>
              </li>
              <li>
                <a 
                  href="#team"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#team');
                  }}
                >
                  Team
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> izaz35-634@diu.edu.bd
            </p>
            <p>
              <FontAwesomeIcon icon={faUniversity} /> Daffodil International University
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Dengue Prediction Research. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;