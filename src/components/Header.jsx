// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// export default function Header({ darkMode, toggleDarkMode }) {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   // Handle scroll event to change header style
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close mobile menu when route changes
//   useEffect(() => {
//     setMenuOpen(false);
//   }, [location]);

//   return (
//     <header className={`header ${scrolled ? 'scrolled' : ''} ${darkMode ? 'dark-mode' : ''}`}>
//       <div className="container">
//         <div className="navbar">
//           <Link to="/" className="logo">
//             <span className="logo-text">M.Zaid</span>
//             <span className="logo-dot">.</span>
//             <span className="logo-dev">dev</span>
//           </Link>
          
//           <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
//             <div className={`hamburger ${menuOpen ? 'active' : ''}`}>
//               <span></span>
//               <span></span>
//               <span></span>
//             </div>
//           </div>

//           <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
//             <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
//             <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
//             <Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>Skills</Link>
//             <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link>
//             <Link to="/experience" className={location.pathname === '/experience' ? 'active' : ''}>Experience</Link>
//             <Link to="/education" className={location.pathname === '/education' ? 'active' : ''}>Education</Link>
//             <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
//           </nav>
          
//           <button 
//             onClick={toggleDarkMode} 
//             className="theme-toggle"
//             aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
//           >
//             {darkMode ? '☀️' : '🌙'}
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Header({ darkMode, setDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event to change header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo">MZ TechLab</Link>
          
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
          
          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/skills" onClick={() => setMobileMenuOpen(false)}>Skills</Link>
            <Link to="/projects" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
            <Link to="/experience" onClick={() => setMobileMenuOpen(false)}>Experience</Link>
            <Link to="/education" onClick={() => setMobileMenuOpen(false)}>Education</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </div>
          
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </nav>
      </div>
    </header>
  );
}