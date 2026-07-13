import { useState } from "react";
import Sidebar from "../../components/Sidebar";

function JobApproval() {

  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Software Engineer Intern",
      company: "ABC Company",
      status: "Pending",
    },
    {
      id: 2,
      title: "Web Developer",
      company: "XYZ Company",
      status: "Pending",
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "Tech Solutions",
      status: "Pending",
    },
  ]);

  function approveJob(id) {
    setJobs(
      jobs.map((job) =>
        job.id === id
          ? { ...job, status: "Approved" }
          : job
      )
    );
  }

  function rejectJob(id) {
    setJobs(
      jobs.map((job) =>
        job.id === id
          ? { ...job, status: "Rejected" }
          : job
      )
    );
  }

  return (
    <div style={{ display: "flex" }}>

      <Sidebar />

      <div style={{ padding: "20px", flex: 1 }}>

        <h1>Job Approval</h1>

        <table border="1" cellPadding="10">

          <thead>

            <tr>
              <th>Job Title</th>
              <th>Company</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {jobs.map((job) => (

              <tr key={job.id}>

                <td>{job.title}</td>

                <td>{job.company}</td>

                <td>{job.status}</td>

                <td>

                  <button
                    onClick={() => approveJob(job.id)}
                  >
                    Approve
                  </button>

                  {" "}

                  <button
                    onClick={() => rejectJob(job.id)}
                  >
                    Reject
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

export default JobApproval;