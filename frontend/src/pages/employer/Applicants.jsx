import { useState } from "react";
import Sidebar from "../../components/Sidebar";

function Applicants() {

  const [applicants, setApplicants] = useState([
    {
      id: 1,
      name: "Sewmini",
      university: "University of Colombo",
      job: "Software Engineer Intern",
      status: "Pending",
    },
    {
      id: 2,
      name: "Nimal",
      university: "University of Peradeniya",
      job: "Data Analyst",
      status: "Pending",
    },
    {
      id: 3,
      name: "Kamal",
      university: "University of Moratuwa",
      job: "Web Developer",
      status: "Pending",
    },
  ]);

  function shortlistApplicant(id) {

    setApplicants(
      applicants.map((applicant) =>
        applicant.id === id
          ? { ...applicant, status: "Shortlisted" }
          : applicant
      )
    );

  }

  function rejectApplicant(id) {

    setApplicants(
      applicants.map((applicant) =>
        applicant.id === id
          ? { ...applicant, status: "Rejected" }
          : applicant
      )
    );

  }

  return (

    <div style={{ display: "flex" }}>

      <Sidebar />

      <div style={{ padding: "20px", flex: 1 }}>

        <h1>Applicants</h1>

        <table border="1" cellPadding="10">

          <thead>

            <tr>

              <th>Name</th>

              <th>University</th>

              <th>Applied Job</th>

              <th>Status</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {applicants.map((applicant) => (

              <tr key={applicant.id}>

                <td>{applicant.name}</td>

                <td>{applicant.university}</td>

                <td>{applicant.job}</td>

                <td>{applicant.status}</td>

                <td>

                  <button
                    onClick={() =>
                      shortlistApplicant(applicant.id)
                    }
                  >
                    Shortlist
                  </button>

                  {" "}

                  <button
                    onClick={() =>
                      rejectApplicant(applicant.id)
                    }
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

export default Applicants;