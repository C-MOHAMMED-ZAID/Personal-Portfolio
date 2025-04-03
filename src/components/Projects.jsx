import { useState, useEffect } from 'react';
import Image1 from './1.png'
import Image2 from './2.png'
import Image3 from './3.png'
import Image4 from './4.png'
import Image5 from './5.png'
import Image6 from './6.png'

export default function Projects() {
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    // Animation for content reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });
    
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));
    
    return () => {
      hiddenElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "AI Customer Feedback Tool",
      description: "A comprehensive application that analyzes customer feedback using natural language processing and machine learning techniques. The system categorizes feedback based on sentiment and provides actionable insights through an intuitive dashboard.",
      longDescription: "This project utilizes the MERN stack with advanced AI integration. MongoDB stores structured and unstructured feedback data, while the Express/Node.js backend handles data processing and API endpoints. React frontend delivers responsive visualization components that update in real-time. The AI component uses TensorFlow.js for sentiment analysis and feedback categorization.",
      image: Image1,
      tech: ["React", "Node.js", "MongoDB", "Express", "TensorFlow.js"],
      category: "fullstack",
      demo: "https://ai-feedback-demo.example.com",
      code: "https://github.com/example/ai-feedback-tool"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "A fully-featured e-commerce solution with product catalog, user authentication, shopping cart, payment integration, and order management system. Supports multiple product categories and user roles.",
      longDescription: "Built with scalability in mind, this platform handles thousands of products and concurrent users. Features include dynamic product filtering, real-time inventory updates, secure payment processing through Stripe, and a comprehensive admin dashboard for inventory and order management. Implemented with React for the frontend, Node.js/Express for the backend, and MongoDB for data storage.",
      image: Image2,
      tech: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe API"],
      category: "fullstack",
      demo: "https://ecommerce-demo.example.com",
      code: "https://github.com/example/ecommerce-platform"
    },
    {
      id: 3,
      title: "Project Management Dashboard",
      description: "An intuitive project management tool designed for team collaboration. Features task tracking, timeline visualization, resource allocation, and automated reporting.",
      longDescription: "This dashboard provides a centralized platform for teams to plan, track, and manage projects efficiently. It includes features like drag-and-drop task management, Gantt charts for timeline visualization, resource allocation tracking, real-time collaboration, and automated report generation. Built with React and Material UI for the frontend, Firebase for real-time data synchronization, and Node.js for backend processes.",
      image: Image3,
      tech: ["React", "Material UI", "Firebase", "Chart.js", "Node.js"],
      category: "frontend",
      demo: "https://pm-dashboard.example.com",
      code: "https://github.com/example/project-dashboard"
    },
    {
      id: 4,
      title: "RESTful API Service",
      description: "A comprehensive API service that provides data endpoints for various client applications. Implements authentication, rate limiting, data validation, and comprehensive documentation.",
      longDescription: "This API service follows REST principles and best practices including HATEOAS. It provides secure endpoints with JWT authentication, implements role-based access control, includes rate limiting to prevent abuse, and features comprehensive Swagger documentation. Built with Node.js, Express, and MongoDB, with automated testing using Jest and Supertest.",
      image: Image4,
      tech: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
      category: "backend",
      demo: "https://api-docs.example.com",
      code: "https://github.com/example/rest-api-service"
    },
    {
      id: 5,
      title: "Real-time Chat Application",
      description: "A feature-rich chat application supporting private messaging, group chats, file sharing, and message threading. Includes read receipts and typing indicators.",
      longDescription: "This application provides a seamless communication experience with real-time message delivery, read receipts, typing indicators, and message threading. Users can create group chats, share files, and search through message history. The frontend is built with React and styled-components, while the backend uses Node.js with Socket.io for real-time communication and MongoDB for data persistence.",
      image: Image5,
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
      category: "fullstack",
      demo: "https://chat-app.example.com",
      code: "https://github.com/example/realtime-chat"
    },
    {
      id: 6,
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard that transforms complex datasets into intuitive visualizations. Features customizable charts, filters, and export options.",
      longDescription: "This dashboard takes complex data and presents it through intuitive visualizations that help users make informed decisions. It includes multiple chart types (bar, line, pie, scatter, heatmaps), interactive filtering and sorting, downloadable reports, and responsive design for mobile viewing. Built with React, D3.js, and recharts for visualization components.",
      image: Image6,
      tech: ["React", "D3.js", "Chart.js", "Material UI", "CSV/Excel Export"],
      category: "frontend",
      demo: "https://data-viz.example.com",
      code: "https://github.com/example/data-visualization"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="projects-section">
      <div className="container">
        <div className="section-header hidden">
          <h2>My Projects</h2>
          <div className="underline"></div>
        </div>
        
        <div className="projects-intro hidden">
          <p>Here's a collection of my recent work that demonstrates my technical skills and problem-solving approach. Each project represents unique challenges and solutions.</p>
        </div>
        
        <div className="project-filters hidden">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`} 
            onClick={() => setFilter('frontend')}
          >
            Frontend
          </button>
          <button 
            className={`filter-btn ${filter === 'backend' ? 'active' : ''}`} 
            onClick={() => setFilter('backend')}
          >
            Backend
          </button>
          <button 
            className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`} 
            onClick={() => setFilter('fullstack')}
          >
            Full Stack
          </button>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="project-card hidden" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="project-image">
                {/* Display the project image */}
                <img src={project.image} alt={project.title} />
                <div className="image-placeholder">
                  <span>{}</span>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="tech-stack">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link demo">
                    Live Demo
                  </a>
                  <a href={project.code} target="_blank" rel="noopener noreferrer" className="project-link code">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}