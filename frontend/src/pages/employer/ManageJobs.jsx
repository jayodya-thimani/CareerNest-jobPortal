/*import { useState } from "react";
import Sidebar from "../../components/Sidebar";

function ManageJobs() {

  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Software Engineer Intern",
      location: "Colombo",
      status: "Open",
    },
    {
      id: 2,
      title: "Data Analyst",
      location: "Kandy",
      status: "Open",
    },
    {
      id: 3,
      title: "Web Developer",
      location: "Galle",
      status: "Closed",
    },
  ]);

  function changeStatus(id) {

    setJobs(
      jobs.map((job) =>
        job.id === id
          ? {
              ...job,
              status:
                job.status === "Open"
                  ? "Closed"
                  : "Open",
            }
          : job
      )
    );

  }

  function deleteJob(id) {

    setJobs(
      jobs.filter((job) => job.id !== id)
    );

  }

  return (

    <div style={{ display: "flex" }}>

      <Sidebar />

      <div style={{ padding: "20px", flex: 1 }}>

        <h1>Manage Jobs</h1>

        <table border="1" cellPadding="10">

          <thead>

            <tr>

              <th>Job Title</th>

              <th>Location</th>

              <th>Status</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {jobs.map((job) => (

              <tr key={job.id}>

                <td>{job.title}</td>

                <td>{job.location}</td>

                <td>{job.status}</td>

                <td>

                  <button
                    onClick={() =>
                      changeStatus(job.id)
                    }
                  >
                    {job.status === "Open"
                      ? "Close"
                      : "Open"}
                  </button>

                  {" "}

                  <button
                    onClick={() =>
                      deleteJob(job.id)
                    }
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default ManageJobs;*/

//dimasha
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import EmployerSidebar from "../../components/employer/EmployerSidebar";
import UserProfile from "../../components/common/UserProfile";
import { deleteJobById, getEmployerJobs, updateJobStatus } from "../../api/services/EmployerService";

import "../../Styles/employer/ManageJobs.css";

function ManageJobs() {

  const navigate = useNavigate();

  const [jobs, setJobs] = useState(
    JSON.parse(localStorage.getItem("jobs")) || []
  );

  const refreshJobs = async () => {
    try {
      const response = await getEmployerJobs();
      const backendJobs = response?.data || [];
      if (backendJobs.length > 0) {
        setJobs(backendJobs);
        localStorage.setItem("jobs", JSON.stringify(backendJobs));
      }
    } catch (error) {
      const localJobs = JSON.parse(localStorage.getItem("jobs")) || [];
      setJobs(localJobs);
    }
  };

  const changeStatus = async (id) => {
    const updatedJobs = jobs.map((job) =>
      job.id === id
        ? {
            ...job,
            status: job.status === "Active" ? "Closed" : "Active",
          }
        : job
    );

    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));

    try {
      await updateJobStatus(id, { status: updatedJobs.find((job) => job.id === id)?.status });
    } catch (error) {
      console.log("Status update failed, saved locally");
    }
  };

  const deleteJob = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (!confirmDelete) return;

    const updatedJobs = jobs.filter((job) => job.id !== id);
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));

    try {
      await deleteJobById(id);
    } catch (error) {
      console.log("Delete failed, saved locally");
    }
  };

  useState(() => {
    refreshJobs();
  });

  return (

    <div className="dashboard-layout">

      <EmployerSidebar />

      <div className="dashboard-content">

        <UserProfile />

        <div className="manage-header">

          <div>

            <h1>Manage Jobs</h1>

            <p>
              View, update and manage all your job postings.
            </p>

          </div>

          <button
            onClick={() => navigate("/employer/postjob")}
          >
            ➕ Post New Job
          </button>

        </div>

        {jobs.length === 0 ? (

          <div className="empty-box">

            <h2>No Jobs Found</h2>

            <p>
              Start by posting your first job.
            </p>

            <button
              onClick={() => navigate("/employer/postjob")}
            >
              Post Job
            </button>

          </div>

        ) : (

          <div className="table-container">

            <table className="jobs-table">

              <thead>

                <tr>

                  <th>Job Title</th>

                  <th>Location</th>

                  <th>Category</th>

                  <th>Type</th>

                  <th>Deadline</th>

                  <th>Status</th>

                  <th>Actions</th>

                </tr>

              </thead>

              <tbody>

                {jobs.map((job) => (

                  <tr key={job.id}>

                    <td>{job.title}</td>

                    <td>{job.location}</td>

                    <td>{job.category}</td>

                    <td>{job.jobType}</td>

                    <td>{job.deadline}</td>

                    <td>

                      <span
                        className={
                          job.status === "Active"
                            ? "status-active"
                            : "status-closed"
                        }
                      >
                        {job.status}
                      </span>

                    </td>

                    <td>

                      <button
                        className="status-btn"
                        onClick={() =>
                          changeStatus(job.id)
                        }
                      >
                        {job.status === "Active"
                          ? "Close"
                          : "Open"}
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          deleteJob(job.id)
                        }
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

      </div>

    </div>

  );
}

export default ManageJobs;