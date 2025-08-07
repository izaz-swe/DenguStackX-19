import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicroscope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className="navbar" 
      style={{
        background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
        boxShadow: scrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <div className="nav-container">
        <div className="nav-logo">
          <FontAwesomeIcon icon={faMicroscope} />
          <span>Dengue Research</span>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a 
              href="#home" 
              className="nav-link" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#research" 
              className="nav-link"
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
              className="nav-link"
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
              className="nav-link"
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
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#team');
              }}
            >
              Team
            </a>
          </li>
        </ul>
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Header;