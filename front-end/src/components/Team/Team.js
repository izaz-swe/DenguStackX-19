import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faUserGraduate, faUserTie, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faGithub, faResearchgate } from '@fortawesome/free-brands-svg-icons';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Research Lead',
      role: 'Principal Investigator',
      description: 'Specializes in machine learning applications in healthcare and infectious disease prediction.',
      icon: faUserMd,
      social: [
        { icon: faLinkedin, href: '#' },
        { icon: faTwitter, href: '#' },
        { icon: faEnvelope, href: '#' }
      ]
    },
    {
      name: 'Data Scientist',
      role: 'ML Engineer',
      description: 'Expert in data balancing techniques and neural network architectures for medical diagnosis.',
      icon: faUserGraduate,
      social: [
        { icon: faLinkedin, href: '#' },
        { icon: faGithub, href: '#' },
        { icon: faEnvelope, href: '#' }
      ]
    },
    {
      name: 'Medical Advisor',
      role: 'Clinical Consultant',
      description: 'Provides clinical insights for feature selection and validation of prediction results.',
      icon: faUserTie,
      social: [
        { icon: faLinkedin, href: '#' },
        { icon: faResearchgate, href: '#' },
        { icon: faEnvelope, href: '#' }
      ]
    }
  ];

  return (
    <section id="team" className="team">
      <div className="container">
        <div className="section-header">
          <h2>Research Team</h2>
          <p>Meet the researchers behind this innovative dengue prediction study</p>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-avatar">
                <FontAwesomeIcon icon={member.icon} />
              </div>
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-description">{member.description}</p>
              <div className="team-social">
                {member.social.map((social, socialIndex) => (
                  <a key={socialIndex} href={social.href}>
                    <FontAwesomeIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;