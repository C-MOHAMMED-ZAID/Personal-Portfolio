// import { useEffect } from 'react';

// export default function About() {
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
//     <section className="about-section">
//       <div className="container">
//         <div className="section-header hidden">
//           <h2>About Me</h2>
//           <div className="underline"></div>
//         </div>
        
//         <div className="about-content">
//           <div className="about-image hidden">
//             <div className="image-container">
//               <div className="image-placeholder">
//                 <span className="placeholder-text">Profile Image</span>
//               </div>
//             </div>
//           </div>
          
//           <div className="about-text hidden">
//             <h3>Who I Am</h3>
//             <p>I'm a passionate Full-Stack Developer with over 5 years of experience in building scalable web applications. My journey in web development began during my undergraduate studies and has evolved into a career focused on creating efficient, user-friendly digital solutions.</p>
            
//             <p>With a strong foundation in both front-end and back-end technologies, I enjoy tackling complex problems and transforming ideas into functional, elegant applications. I believe in writing clean, maintainable code and staying updated with the latest industry trends and best practices.</p>
            
//             <p>Beyond technical skills, I value effective communication and collaboration. I've worked with diverse teams and clients across different industries, adapting my approach to meet specific project requirements while maintaining high standards of quality.</p>
            
//             <h3>My Approach</h3>
//             <p>I follow a user-centered design philosophy, ensuring that the end product not only meets technical specifications but also provides an exceptional user experience. My development process involves thorough planning, iterative implementation, and rigorous testing.</p>
            
//             <div className="personal-details">
//               <div className="detail-item">
//                 <h4>Name:</h4>
//                 <p>Mohammed Zaid</p>
//               </div>
//               <div className="detail-item">
//                 <h4>Location:</h4>
//                 <p>Chennai, India</p>
//               </div>
//               <div className="detail-item">
//                 <h4>Email:</h4>
//                 <p>zaid@example.com</p>
//               </div>
//               <div className="detail-item">
//                 <h4>LinkedIn:</h4>
//                 <p>linkedin.com/in/mohammedzaidc</p>
//               </div>
//             </div>
            
//             <div className="interests">
//               <h3>Personal Interests</h3>
//               <ul>
//                 <li>Open Source Contribution</li>
//                 <li>Technical Writing</li>
//                 <li>UI/UX Design</li>
//                 <li>Cloud Computing</li>
//                 <li>Artificial Intelligence</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react';
import { Link } from 'react-router-dom';
import Resume from '../components/Resume.pdf'; 
import ProfileImage from './profile.jpg'

export default function About() {
  // Personal information
  const personalInfo = [
    { label: "Full Name", value: "C Mohammed Zaid" },
    { label: "Birth Date", value: "June 25, 2003" },
    { label: "Phone", value: "+91 90437 95013" },
    { label: "Email", value: "mohammedzaid.connect@gmail.com" },
    { label: "Location", value: "Chennai, Tamil Nadu, India" },
    { label: "Freelance", value: "Available" },
    { label: "Languages", value: "English, Tamil, Hindi, Urdu" },
    { label: "Nationality", value: "Indian" }
  ];

  // Services offered
  const services = [
    {
      title: "Web Development",
      description: "Creating responsive and interactive web applications using modern frameworks and technologies.",
      icon: "💻"
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces and seamless user experiences for web and mobile applications.",
      icon: "🎨"
    },
    {
      title: "Mobile App Development",
      description: "Building cross-platform mobile applications using React Native and related technologies.",
      icon: "📱"
    },
    {
      title: "Database Design",
      description: "Designing efficient and scalable database schemas for web and mobile applications.",
      icon: "🗄️"
    },
    {
      title: "API Development",
      description: "Creating RESTful and GraphQL APIs for seamless data exchange between applications.",
      icon: "🔄"
    },
    {
      title: "SEO Optimization",
      description: "Optimizing websites for search engines to improve visibility and organic traffic.",
      icon: "🔍"
    }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-image">
            <div className="img-placeholder">
              
              <span><img src={ProfileImage} alt="Profile" className="profile-image" /></span>
            </div>
          </div>
          
          <div className="about-text">
            <h3>Full Stack Developer & UI/UX Enthusiast</h3>
            <p>
              I'm a passionate Full Stack Developer with extensive experience in building web applications 
              using modern technologies. My journey in tech began with a curiosity about how websites work, 
              which led me to pursue formal education in Computer Applications.
            </p>
            <p>
              With over 3 years of experience in web development, I've had the opportunity to work on various 
              projects ranging from simple landing pages to complex web applications. I specialize in the MERN 
              stack (MongoDB, Express.js, React.js, Node.js) and have a keen interest in UI/UX design.
            </p>
            <p>
              My approach to development focuses on creating clean, efficient code that delivers exceptional 
              user experiences. I believe in continuous learning and stay updated with the latest technologies 
              and industry trends to provide innovative solutions to complex problems.
            </p>
            
            <div className="personal-info">
              {personalInfo.map((info, index) => (
                <div className="info-item" key={index}>
                  <span className="info-title">{info.label}:</span>
                  <span className="info-value">{info.value}</span>
                </div>
              ))}
            </div>
            
            <div className="buttons">
              <Link to="/contact" className="btn btn-primary">Hire Me</Link>
              <a href={Resume} download className="btn btn-outline">Download CV</a>
            </div>
          </div>
        </div>
        
        <div className="services-section">
          <h3 className="services-title">What I Do</h3>
          <div className="services-container">
            {services.map((service, index) => (
              <div className="service-item" key={index}>
                <div className="service-icon">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}