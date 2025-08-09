import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlay, 
  faBook, 
  faBrain, 
  faBalanceScale, 
  faChartLine, 
  faVirus 
} from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Advanced <span class="gradient-text">Dengue Prediction</span><br>Using Machine Learning';

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 50);

    return () => clearInterval(typing);
  }, []);

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
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 
            className="hero-title"
            dangerouslySetInnerHTML={{ __html: typedText }}
          />
          <p className="hero-description">
            Comparing multiple ML algorithms with different data balancing techniques 
            to improve dengue fever diagnosis accuracy using medical laboratory data.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('#test')}
            >
              <FontAwesomeIcon icon={faPlay} />
              Test Our Models
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('#research')}
            >
              <FontAwesomeIcon icon={faBook} />
              View Research
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">6</span>
              <span className="stat-label">Balancing Techniques</span>
            </div>
            <div className="stat">
              <span className="stat-number">8+</span>
              <span className="stat-label">ML Algorithms</span>
            </div>
            <div className="stat">
              <span className="stat-number">1523</span>
              <span className="stat-label">Patient Records</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-container">
            <div className="floating-card card-1">
              <FontAwesomeIcon icon={faBrain} color="#fff" size="2x" />
              <span>Neural Networks</span>
            </div>
            <div className="floating-card card-2">
              <FontAwesomeIcon icon={faBalanceScale} color="#fff" size="2x" />
              <span>SMOTE</span>
            </div>
            <div className="floating-card card-3">
              <FontAwesomeIcon icon={faChartLine} color="#fff" size="2x" />
              <span>96.5% Accuracy</span>
            </div>
            <div className="floating-card card-4">
              <FontAwesomeIcon icon={faVirus} color="#fff" size="2x" />
              <span>Dengue Detection</span>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;