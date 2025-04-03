// import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Experience from './components/Experience';
// import Education from './components/Education';
// import Contact from './components/Contact';
// import ThemeToggle from './components/ThemeToggle';

// function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     // Check for saved theme preference
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'dark') {
//       setDarkMode(true);
//       document.body.classList.add('dark-mode');
//     }
//   }, []);

//   const toggleDarkMode = () => {
//     setDarkMode(prevMode => {
//       const newMode = !prevMode;
//       localStorage.setItem('theme', newMode ? 'dark' : 'light');
      
//       if (newMode) {
//         document.body.classList.add('dark-mode');
//       } else {
//         document.body.classList.remove('dark-mode');
//       }
      
//       return newMode;
//     });
//   };

//   return (
//     <Router>
//       <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
//         <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
//         <main className="main-content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/skills" element={<Skills />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/experience" element={<Experience />} />
//             <Route path="/education" element={<Education />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </main>
        
//         <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  // Initialize darkMode state from localStorage or default to false
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // Update localStorage whenever darkMode changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <Router>
      <div className={`app ${darkMode ? 'dark-theme' : ''}`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;