import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>C MOHAMMED ZAID</h3>
            <p>Full-Stack Developer passionate about creating exceptional web experiences.</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/experience">Experience</Link></li>
              <li><Link to="/education">Education</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Info</h4>
            <p>📍 Chennai, Tamil Nadu, India</p>
            <p>📱 +91 90437 95013</p>
            <p>✉️ mohammedzaid.connect@gmail.com</p>
          </div>
          
          <div className="footer-social">
            <h4>Connect With Me</h4>
            <div className="social-icons">
              <a href="https://github.com/c-mohammed-zaid" target="_blank" rel="noopener noreferrer" className="social-icon">GitHub</a>
              <a href="www.linkedin.com/in/mohammedzaidc" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-icon">Twitter</a>
              <a href="https://www.instagram.com/the__debug_life/" target="_blank" rel="noopener noreferrer" className="social-icon">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Mohammed Zaid. All rights reserved.</p>
          <p>
            <Link to="/privacy-policy">Privacy Policy</Link> | 
            <Link to="/terms-of-service">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}