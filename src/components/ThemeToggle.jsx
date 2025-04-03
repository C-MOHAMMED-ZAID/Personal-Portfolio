import React, { useEffect } from 'react';

export default function ThemeToggle({ darkMode, setDarkMode }) {
  // Apply theme class to body when component mounts or darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
    // Save preference to localStorage
    localStorage.setItem('darkMode', !darkMode);
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="theme-toggle" 
      aria-label="Toggle dark mode"
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
}