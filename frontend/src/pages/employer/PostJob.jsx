/*function PostJob(){
    return(

        <div>

            <h2>Post New Job</h2>

            <input
                type="text"
                placeholder="Job Title"
            />

            <br /><br />

            <input
                type="text"
                placeholder="Location"
            />

            <br /><br />

            <button>

                Post Job

            </button>

        </div>

    );

}

export default PostJob; */

//dimasha
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import EmployerSidebar from "../../components/Employer/EmployerSidebar";
import UserProfile from "../../components/common/UserProfile";
import { createJob } from "../../api/services/EmployerService";
import "../../Styles/employer/PostJob.css";

function PostJob() {

  const navigate = useNavigate();

  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    category: "",
    jobType: "",
    salary: "",
    experience: "",
    deadline: "",
    description: "",
    requirements: "",
  });

  const categoryOptions = ["Job", "Intern"];

  const handleChange = (e) => {
    setJob((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createJob({
        ...job,
        status: "Active",
        postedDate: new Date().toLocaleDateString(),
      });

      const savedJob = response?.data || { ...job, id: Date.now() };
      const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
      localStorage.setItem("jobs", JSON.stringify([...jobs, savedJob]));

      alert("Job posted successfully!");

      setJob({
        title: "",
        company: "",
        location: "",
        category: "",
        jobType: "",
        salary: "",
        experience: "",
        deadline: "",
        description: "",
        requirements: "",
      });

      navigate("/employer/managejobs");
    } catch (error) {
      const fallbackJob = {
        id: Date.now(),
        ...job,
        status: "Active",
        postedDate: new Date().toLocaleDateString(),
      };
      const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
      localStorage.setItem("jobs", JSON.stringify([...jobs, fallbackJob]));
      alert("Backend unavailable. Job saved locally instead.");
      navigate("/employer/managejobs");
    }
  };

  return (
    <div className="dashboard-layout">
      <EmployerSidebar />

      <div className="dashboard-content">
        <UserProfile />

        <div className="post-job-container">
          <div className="post-job-card">
            <h1>Post a New Job</h1>

            <p>
              Fill in the details below to create a new job opportunity.
            </p>

            <form onSubmit={handleSubmit}>

          <div className="category-toggle">
            {categoryOptions.map((option) => (
              <button
                key={option}
                type="button"
                className={`category-chip ${job.category === option ? "active" : ""}`}
                onClick={() => setJob((prev) => ({ ...prev, category: option }))}
              >
                {option}
              </button>
            ))}
          </div>

          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={job.title}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={job.company}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Job Location"
            value={job.location}
            onChange={handleChange}
            required
          />

          <select
            name="jobType"
            value={job.jobType}
            onChange={handleChange}
            required
          >
            <option value="">Select Job Type</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Remote">Remote</option>
            <option value="Contract">Contract</option>
          </select>

          <input
            type="text"
            name="salary"
            placeholder="Salary (Optional)"
            value={job.salary}
            onChange={handleChange}
          />

          <input
            type="text"
            name="experience"
            placeholder="Experience Required"
            value={job.experience}
            onChange={handleChange}
          />

          <input
            type="date"
            name="deadline"
            value={job.deadline}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            rows="5"
            placeholder="Job Description"
            value={job.description}
            onChange={handleChange}
            required
          />

          <textarea
            name="requirements"
            rows="4"
            placeholder="Skills & Requirements"
            value={job.requirements}
            onChange={handleChange}
            required
          />

            <button type="submit">
              Post Job
            </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostJob;