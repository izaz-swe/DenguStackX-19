import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faUserGraduate, faUserTie, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faGithub, faResearchgate } from '@fortawesome/free-brands-svg-icons';

const Team = () => {
  const teamMembers = [
    {
      name: 'A.K.M. Fazlul Kobir Siam',
      role: 'B.Sc Student',
      description: 'Computer Science and Engineering, Daffodil International University',
      icon: faUserGraduate,
      social: [
        { icon: faLinkedin, href: '#' },
        { icon: faGithub, href: '#' },
        { icon: faEnvelope, href: '#' }
      ]
    },
    {
      name: 'Izaz Ahmmed Tuhin',
      role: 'B.Sc, Lecturer',
      description: 'Software Engineering, Daffodil International University',
      icon: faUserTie,
      social: [
        { icon: faLinkedin, href: '#' },
        { icon: faGithub, href: '#' },
        { icon: faEnvelope, href: '#' }
      ]
    },
    {
      name: 'Md Mahfuzur Rahman Shanto',
      role: 'B.Sc Student',
      description: 'Software Engineering, Daffodil International University',
      icon: faUserGraduate,
      social: [
        { icon: faLinkedin, href: '#' },
        { icon: faGithub, href: '#' },
        { icon: faEnvelope, href: '#' }
      ]
    },
    {
      name: 'Md Rajib Mia',
      role: 'MSc, Lecturer (Senior Scale)',
      description: 'Software Engineering, Daffodil International University',
      icon: faUserTie,
      social: [
        { icon: faLinkedin, href: '#' },
        { icon: faResearchgate, href: '#' },
        { icon: faEnvelope, href: '#' }
      ]
    },
    {
      name: 'Dr. Imran Mahmud',
      role: 'PhD, Professor',
      description: 'Software Engineering, Daffodil International University',
      icon: faUserMd,
      social: [
        { icon: faLinkedin, href: '#' },
        { icon: faResearchgate, href: '#' },
        { icon: faEnvelope, href: '#' }
      ]
    },
    {
      name: 'Apurba Ghosh',
      role: 'MSc, Assistant Professor',
      description: 'Multimedia & Creative Technology, Daffodil International University',
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
          <h2>Authors</h2>
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