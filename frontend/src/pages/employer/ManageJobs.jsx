import { useState } from "react";
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

export default ManageJobs;