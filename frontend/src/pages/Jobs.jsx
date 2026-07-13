import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Jobs.css";

function Jobs() {
  const [search, setSearch] = useState("");

  const jobs = [
    {
      id: 1,
      title: "Software Engineer Intern",
      company: "ABC Technologies",
      location: "Colombo",
      type: "Internship",
      skills: "React, JavaScript, Node.js",
    },
    {
      id: 2,
      title: "Data Analyst",
      company: "Insight Analytics",
      location: "Kandy",
      type: "Full Time",
      skills: "Python, SQL, Power BI",
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Tech Lanka",
      location: "Remote",
      type: "Part Time",
      skills: "React, CSS, HTML",
    },
    {
      id: 4,
      title: "Business Intelligence Intern",
      company: "XYZ Solutions Pvt Ltd",
      location: "Colombo",
      type: "Internship",
      skills: "Excel, SQL, Power BI",
    },
    {
      id: 5,
      title: "Software Engineer",
      company: "Tech Solutions Pvt Ltd",
      location: "Colombo",
      type: "Full-Time",
      skills: "React, Node.js, MySQL",
    },
    {
      id: 6,
      title: "Marketing Executive",
      company: "Vision Marketing",
      location: "Negombo",
      type: "Full-Time",
      skills: "Plan digital marketing campaigns, manage social media platforms.",
    },
    {
      id: 7,
      title: "HR Officer",
      company: "People First Ltd",
      location: "Kurunegala",
      type: "Full-Time",
      skills: "Handle recruitment, employee records, and performance management.",
    },
    {
      id: 8,
      title: "Network Engineer",
      company: "NetSecure Technologies",
      location: "Colombo",
      type: "Full-Time",
      skills: "Install, configure, and maintain enterprise network infrastructure.",
    },
    {
      id: 9,
      title: "Graphic Designer",
      company: "Pixel Media",
      location: "Matara",
      type: "Full-Time",
      skills: "Create logos, banners, brochures, and social media graphics.",
    },
    {
      id: 10,
      title: "Project Manager",
      company: "Global Innovations",
      location: "Colombo",
      type: "Full-Time",
      skills: "Lead software development projects and coordinate cross-functional teams.",
    },
    {
      id: 11,
      title: "Customer Support Executive",
      company: "Care Connect",
      location: "Remote",
      type: "Full-Time",
      skills: "Provide customer support via phone, email, and live chat.",
    },
    {
      id: 12,
      title: "Accountant",
      company: "Finance Hub",
      location: "Galle",
      type: "Full-Time",
      skills: "Prepare financial statements, budgets, and tax reports.",
    },
  ];

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="jobs-container">

        {/* Hero Banner */}
        <div className="jobs-banner">
          <div className="banner-text">
            <h1>Available Jobs</h1>
            <p>Find your next career opportunity</p>
          </div>
        </div>

        <input
          className="search-box"
          type="text"
          placeholder="Search jobs or companies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="job-list">
          {filteredJobs.map((job) => (
            <div className="job-card" key={job.id}>
              <h2>{job.title}</h2>
              <h3>{job.company}</h3>
              <p>📍 {job.location}</p>
              <p>💼 {job.type}</p>
              <p>🛠 Skills: {job.skills}</p>
              <button>Apply Now</button>
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Jobs;