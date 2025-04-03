// import { useEffect } from 'react';

// export default function Experience() {
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

//   const experiences = [
//     {
//       id: 1,
//       role: "Senior Full Stack Developer",
//       company: "Tech Innovations Inc.",
//       period: "January 2023 - Present",
//       location: "Chennai, India",
//       description: "Leading the development of enterprise-level web applications with a focus on scalability and performance optimization.",
//       responsibilities: [
//         "Architected and implemented microservices-based backend using Node.js and Express",
//         "Developed responsive and interactive frontends using React and Redux",
//         "Optimized database queries and implemented caching strategies for improved performance",
//         "Led a team of 5 developers, providing technical guidance and code reviews",
//         "Implemented CI/CD pipelines using GitHub Actions for automated testing and deployment",
//         "Collaborated with product managers and designers to refine requirements and design solutions"
//       ],
//       achievements: [
//         "Reduced application load time by 40% through code optimization and lazy loading",
//         "Implemented real-time data synchronization that improved user collaboration efficiency by 30%",
//         "Introduced automated testing that reduced post-deployment issues by 60%"
//       ]
//     },
//     {
//       id: 2,
//       role: "Full Stack Developer",
//       company: "Digital Solutions Ltd.",
//       period: "March 2020 - December 2022",
//       location: "Bangalore, India",
//       description: "Worked on multiple client projects developing full-stack web applications with a focus on user experience and accessibility.",
//       responsibilities: [
//         "Developed and maintained features for e-commerce platforms using MERN stack",
//         "Created RESTful APIs and integrated third-party services",
//         "Implemented authentication and authorization using JWT and OAuth",
//         "Collaborated with cross-functional teams to deliver projects on schedule",
//         "Optimized application performance and fixed critical bugs",
//         "Participated in daily scrum meetings and sprint planning"
//       ],
//       achievements: [
//         "Successfully delivered 15+ projects with 100% client satisfaction",
//         "Developed a reusable component library that reduced development time by 25%",
//         "Recognized as 'Developer of the Quarter' for exceptional contribution to a critical project"
//       ]
//     },
//     {
//       id: 3,
//       role: "Web Developer Intern",
//       company: "StartUp Nexus",
//       period: "June 2019 - February 2020",
//       location: "Chennai, India",
//       description: "Assisted in the development of web applications and gained hands-on experience with modern web technologies.",
//       responsibilities: [
//         "Developed UI components using HTML, CSS, and JavaScript",
//         "Created and optimized database queries",
//         "Fixed bugs and implemented new features",
//         "Assisted senior developers with testing and documentation",
//         "Participated in code reviews and learned best practices"
//       ],
//       achievements: [
//         "Developed a dashboard feature that was deployed to production",
//         "Reduced page load time by 30% through image optimization",
//         "Converted internship into a full-time role due to exceptional performance"
//       ]
//     }
//   ];

//   return (
//     <section className="experience-section">
//       <div className="container">
//         <div className="section-header hidden">
//           <h2>Work Experience</h2>
//           <div className="underline"></div>
//         </div>
        
//         <div className="experience-intro hidden">
//           <p>With over 5 years of professional experience, I've worked across various domains and technologies, consistently delivering high-quality solutions. Here's a snapshot of my professional journey:</p>
//         </div>
        
//         <div className="timeline">
//           {experiences.map((exp, index) => (
//             <div key={exp.id} className="timeline-item hidden" style={{animationDelay: `${index * 0.2}s`}}>
//               <div className="timeline-marker"></div>
              
//               <div className="timeline-content">
//                 <div className="timeline-header">
//                   <h3>{exp.role}</h3>
//                   <span className="company">{exp.company}</span>
//                   <div className="period-location">
//                     <span className="period">{exp.period}</span>
//                     <span className="location">{exp.location}</span>
//                   </div>
//                 </div>
                
//                 <p className="job-description">{exp.description}</p>
                
//                 <div className="responsibilities">



import React from 'react';

export default function Experience() {
  const experiences = [
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer Intern",
      duration: "May 2023 - Present",
      description: "Working on developing scalable web applications using React and Node.js. Collaborating with senior developers to implement new features and optimize existing ones.",
      achievements: [
        "Developed a customer dashboard that increased user engagement by 25%",
        "Implemented responsive design that improved mobile user experience",
        "Optimized API calls reducing page load time by 40%",
        "Participated in daily stand-ups and sprint planning meetings"
      ]
    },
    {
      company: "Digital Innovations",
      position: "Frontend Developer (Part-time)",
      duration: "Jan 2023 - Apr 2023",
      description: "Worked on implementing UI designs for various client projects. Collaborated with designers to ensure pixel-perfect implementation.",
      achievements: [
        "Created reusable component library that reduced development time by 30%",
        "Implemented client feedback with 98% satisfaction rate",
        "Integrated third-party APIs for payment processing and data visualization",
        "Mentored junior team members on React best practices"
      ]
    },
    {
      company: "Freelance",
      position: "Web Developer",
      duration: "Jun 2022 - Dec 2022",
      description: "Designed and developed websites for small businesses and startups. Managed client relationships and project timelines independently.",
      achievements: [
        "Delivered 8 projects on time and within budget",
        "Implemented SEO best practices resulting in increased traffic for clients",
        "Developed custom WordPress themes and plugins",
        "Maintained ongoing support relationships with 5 key clients"
      ]
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-title">
          <h2>Professional Experience</h2>
        </div>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.position}</h3>
                  <span className="company">{exp.company}</span>
                  <span className="duration">{exp.duration}</span>
                </div>
                <p>{exp.description}</p>
                <ul className="achievements">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


