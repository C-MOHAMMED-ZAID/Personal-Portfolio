import React from 'react';

export default function Education() {
  const educations = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Measi Institute of Information Technology",
      location: "Chennai, India",
      duration: "2023 - 2025",
      description: "Focused on advanced software development, database management, and system analysis. Graduated with distinction and was part of the programming club.",
      achievements: [
        "Achieved 9.2 CGPA",
        "Led team project that won 2nd place in national coding competition",
        "Published paper on 'Optimizing Database Query Performance in Cloud Environments'",
        "Received merit scholarship for academic excellence"
      ]
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Islamiah College",
      location: "Chennai, India",
      duration: "2020 - 2023",
      description: "Gained strong foundation in computer science fundamentals, programming languages, and software development methodologies.",
      achievements: [
        "Graduated with First Class Honors",
        "Developed e-library management system as final year project",
        "Organized technical workshops as Tech Club secretary",
        "Participated in multiple hackathons and coding competitions"
      ]
    },
  ];

  return (
    <section className="education" id="education">
      <div className="container">
        <div className="section-title">
          <h2>Educational Background</h2>
        </div>
        
        <div className="education-container">
          {educations.map((edu, index) => (
            <div className="education-item" key={index}>
              <div className="education-content">
                <div className="education-year">
                  <span>{edu.duration}</span>
                </div>
                <div className="education-details">
                  <h3>{edu.degree}</h3>
                  <h4>{edu.institution}</h4>
                  <p className="location">{edu.location}</p>
                  <p>{edu.description}</p>
                  <ul className="achievements">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}