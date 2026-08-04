import React from "react";

import {
  FileText,
  Video,
  BookOpen,
  Lightbulb,
  Code,
  Briefcase
} from "lucide-react";

import "../../styles/student/StudentPages.css";

function CareerResources() {

  const resources = [

    {
      icon: <FileText />,
      title: "Resume Building",
      description:
        "Build a strong and professional resume that clearly presents your academic background, technical skills, projects, certifications, achievements, and practical experience. Learn how to organize your information effectively, highlight your strengths, use professional language, and create a resume that helps you make a strong first impression with employers."
    },

    {
      icon: <Video />,
      title: "Interview Preparation",
      description:
        "Prepare yourself confidently for technical, HR, and internship interviews by learning how to answer common questions, explain your academic projects, discuss your technical skills, and present your experiences professionally. Improve your communication, confidence, body language, and problem-solving approach to perform better during interviews."
    },

    {
      icon: <BookOpen />,
      title: "Career Guides",
      description:
        "Explore useful career guides that help you understand different industries, job roles, technologies, and professional career paths. Discover the skills required for different positions, understand current industry expectations, and learn how to plan your academic and professional development according to your career goals."
    },

    {
      icon: <Lightbulb />,
      title: "Career Tips",
      description:
        "Discover practical career advice to help you grow professionally and prepare for future opportunities. Learn how to improve your communication skills, build professional confidence, develop a strong personal brand, create meaningful connections, use LinkedIn effectively, and develop the habits needed for long-term career success."
    },

    {
      icon: <Code />,
      title: "Technical Skills",
      description:
        "Develop the technical knowledge and practical skills required in today's competitive job market. Improve your programming, web development, database management, data analysis, software engineering, and other technology-related skills through continuous learning and practical project experience."
    },

    {
      icon: <Briefcase />,
      title: "Job Search Guide",
      description:
        "Learn how to search for suitable jobs and internships based on your education, skills, interests, and career goals. Understand how to identify suitable opportunities, prepare effective applications, customize your resume, communicate professionally with employers, and manage your overall job search process successfully."
    }

  ];

  return (

    <div className="student-page career-resources-page">

      <div className="student-page-header">

        <h1>
          Career Resources
        </h1>

        <p>
          Explore valuable resources designed to help you build your skills,
          prepare for opportunities, and grow your career with confidence.
        </p>

      </div>


      <div className="resources-grid">

        {resources.map((resource, index) => (

          <div
            className="resource-card"
            key={index}
          >

            <div className="resource-icon">
              {resource.icon}
            </div>

            <h2>
              {resource.title}
            </h2>

            <p>
              {resource.description}
            </p>

          </div>

        ))}

      </div>

    </div>

  );

}

export default CareerResources;