// import { Link } from 'react-router-dom';
// import { useEffect } from 'react';

// export default function Home() {
//   useEffect(() => {
//     // Animation for content reveal
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('visible');
//         }
//       });
//     });
    
//     const hiddenElements = document.querySelectorAll('.hidden');
//     hiddenElements.forEach(el => observer.observe(el));
    
//     return () => {
//       hiddenElements.forEach(el => observer.unobserve(el));
//     };
//   }, []);

//   return (
//     <section className="home-section">
//       <div className="container">
//         <div className="home-content">
//           <div className="intro-text hidden">
//             <span className="greeting">Hello, I'm</span>
//             <h1 className="name">Mohammed Zaid</h1>
//             <h2 className="title">Full-Stack Developer</h2>
//             <p className="tagline">Building scalable web solutions with Python & MERN Stack</p>
            
//             <div className="hero-description">
//               <p>I specialize in creating responsive web applications using modern frameworks and technologies. With a passion for clean code and user-centered design, I develop solutions that solve real-world problems.</p>
//               <p>My expertise spans across the entire development stack - from front-end interfaces to back-end systems and databases.</p>
//             </div>
            
//             <div className="buttons">
//               <Link to="/contact" className="primary-btn">Let's Connect</Link>
//               <a href="/resume.pdf" download className="secondary-btn">Download CV</a>
//             </div>
//           </div>
          
//           <div className="profile-image hidden">
//             <div className="image-container">
//               <div className="image-placeholder">
//                 <span className="placeholder-text">Profile Image</span>
//               </div>
//             </div>
            
//             <div className="social-links">
//               <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-icon github">
//                 <i className="fab fa-github"></i>
//               </a>
//               <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
//                 <i className="fab fa-linkedin"></i>
//               </a>
//               <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
//                 <i className="fab fa-twitter"></i>
//               </a>
//             </div>
//           </div>
//         </div>
        
//         <div className="tech-stack hidden">
//           <h3>Tech Stack</h3>
//           <div className="tech-icons">
//             <span className="tech-icon">React</span>
//             <span className="tech-icon">Node.js</span>
//             <span className="tech-icon">MongoDB</span>
//             <span className="tech-icon">Python</span>
//             <span className="tech-icon">JavaScript</span>
//             <span className="tech-icon">Express</span>
//           </div>
//         </div>
        
//         <div className="scroll-indicator">
//           <span>Scroll Down</span>
//           <div className="arrow"></div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Resume from '../components/Resume.pdf'; 
import ProfileImage from './profile.jpg'

export default function Home() {
  const [typedText, setTypedText] = useState('');
  const roles = ['Full-Stack Developer', 'MERN Stack Specialist', 'UI/UX Enthusiast', 'Problem Solver'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const typeWriter = () => {
      const currentRole = roles[roleIndex];
      const shouldDelete = isDeleting;
      
      // If deleting, remove character from the end
      if (shouldDelete) {
        setTypedText(currentRole.substring(0, typedText.length - 1));
        setTypingSpeed(50); // Faster when deleting
      } else {
        // If typing, add character to the end
        setTypedText(currentRole.substring(0, typedText.length + 1));
        setTypingSpeed(150); // Normal typing speed
      }

      // If completed typing the current role
      if (!shouldDelete && typedText === currentRole) {
        // Pause at the end of the word
        setTimeout(() => setIsDeleting(true), 1500);
      } 
      // If deleted the current role
      else if (shouldDelete && typedText === '') {
        setIsDeleting(false);
        // Move to next role
        setRoleIndex((roleIndex + 1) % roles.length);
        // Small pause before typing next role
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(typeWriter, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, roleIndex, isDeleting, typingSpeed, roles]);

  return (
    <section className="home" id="home">
      <div className="container">
        <div className="home-content">
          <div className="home-text">
            <h1>Hello, I'm <span>Mohammed Zaid</span></h1>
            <h2 className="typed-text">I'm a <span>{typedText}</span><span className="cursor">|</span></h2>
            <p>
              Welcome to my digital portfolio! I specialize in creating robust, scalable web applications 
              using modern technologies. With a passion for clean code and intuitive user experiences, 
              I turn complex problems into elegant solutions.
            </p>
            <div className="buttons">
              <Link to="/contact" className="btn btn-primary">Let's Connect</Link>
              <a href={Resume} download className="btn btn-outline">Download CV</a>
            </div>
          </div>
          
          <div className="home-image">
            <div className="profile-img">
              {/* Placeholder for profile image */}
              <img src={ProfileImage} alt="Profile" className="profile-image" />
              <div className="img-placeholder">
                <span></span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="home-highlights">
          <div className="highlight-item">
            <h3>25+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="highlight-item">
            <h3>3+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="highlight-item">
            <h3>15+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="highlight-item">
            <h3>10+</h3>
            <p>Technology Stack</p>
          </div>
        </div>
      </div>
    </section>
  );
}