import { useEffect, useState } from "react";
import EmployerSidebar from "../../components/employer/EmployerSidebar";
import UserProfile from "../../components/common/UserProfile";
import { getApplicants, updateApplicantStatus } from "../../api/services/EmployerService";
import "../../Styles/employer/Applicants.css";

const seedApplicants = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 555 0123",
    jobTitle: "Frontend Developer",
    company: "TechNova",
    appliedDate: "2026-07-20",
    status: "Pending",
  },
  {
    id: 2,
    name: "Daniel Kim",
    email: "daniel.kim@email.com",
    phone: "+1 555 0144",
    jobTitle: "UI/UX Designer",
    company: "BrightLabs",
    appliedDate: "2026-07-21",
    status: "Shortlisted",
  },
  {
    id: 3,
    name: "Ava Patel",
    email: "ava.patel@email.com",
    phone: "+1 555 0188",
    jobTitle: "Software Engineer",
    company: "CloudWorks",
    appliedDate: "2026-07-22",
    status: "Selected",
  },
];

function Applicants() {
  const [applicants, setApplicants] = useState(() => {
    const storedApplicants = JSON.parse(localStorage.getItem("applicants"));
    return storedApplicants && storedApplicants.length > 0
      ? storedApplicants
      : seedApplicants;
  });

  useEffect(() => {
    const loadApplicants = async () => {
      try {
        const response = await getApplicants();
        const backendApplicants = response?.data || [];
        if (backendApplicants.length > 0) {
          setApplicants(backendApplicants);
          localStorage.setItem("applicants", JSON.stringify(backendApplicants));
          return;
        }
      } catch (error) {
        console.log("Could not fetch applicants from backend, using local data");
      }

      const storedApplicants = JSON.parse(localStorage.getItem("applicants"));

      if (!storedApplicants || storedApplicants.length === 0) {
        localStorage.setItem("applicants", JSON.stringify(seedApplicants));
        setApplicants(seedApplicants);
      } else {
        setApplicants(storedApplicants);
      }
    };

    loadApplicants();
  }, []);

  const updateStatus = async (id, newStatus) => {
    const updatedApplicants = applicants.map((applicant) =>
      applicant.id === id ? { ...applicant, status: newStatus } : applicant
    );

    setApplicants(updatedApplicants);
    localStorage.setItem("applicants", JSON.stringify(updatedApplicants));

    try {
      await updateApplicantStatus(id, { status: newStatus });
    } catch (error) {
      console.log("Applicant status update failed, saved locally");
    }
  };

  const totalApplications = applicants.length;
  const pendingCount = applicants.filter((applicant) => applicant.status === "Pending").length;
  const shortlistedCount = applicants.filter((applicant) => applicant.status === "Shortlisted").length;
  const selectedCount = applicants.filter((applicant) => applicant.status === "Selected").length;

  return (
    <div className="dashboard-layout">
      <EmployerSidebar />

      <div className="dashboard-content">
        <UserProfile />

        <div className="manage-header">
          <div>
            <h1>Applicants</h1>
            <p>Review and manage student applications for your open roles.</p>
          </div>
        </div>

        <div className="applicant-stats">
          <div className="stat-card">
            <h2>{totalApplications}</h2>
            <p>Total Applications</p>
          </div>

          <div className="stat-card">
            <h2>{pendingCount}</h2>
            <p>Pending</p>
          </div>

          <div className="stat-card">
            <h2>{shortlistedCount}</h2>
            <p>Shortlisted</p>
          </div>

          <div className="stat-card">
            <h2>{selectedCount}</h2>
            <p>Selected</p>
          </div>
        </div>

        {applicants.length === 0 ? (
          <div className="empty-box">
            <h2>No Applicants Yet</h2>
            <p>Applications will appear here once students apply to your jobs.</p>
          </div>
        ) : (
          <div className="applicant-list">
            {applicants.map((applicant) => (
              <div className="applicant-card" key={applicant.id}>
                <div className="applicant-info">
                  <div className="applicant-avatar">
                    {applicant.profilePicture ? (
                      <img src={applicant.profilePicture} alt={applicant.name} />
                    ) : (
                      "👤"
                    )}
                  </div>

                  <div className="applicant-details">
                    <h3>{applicant.name}</h3>
                    <p>{applicant.email}</p>
                    <p>
                      <strong>Job:</strong> {applicant.jobTitle}
                    </p>
                    <p>
                      <strong>Company:</strong> {applicant.company}
                    </p>
                    <p>
                      <strong>Applied:</strong> {applicant.appliedDate || "N/A"}
                    </p>
                  </div>
                </div>

                <div className="applicant-actions">
                  <span className={`status-badge ${String(applicant.status || "Pending").toLowerCase()}`}>
                    {applicant.status || "Pending"}
                  </span>

                  <select
                    value={applicant.status || "Pending"}
                    onChange={(e) => updateStatus(applicant.id, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Shortlisted">Shortlisted</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Selected">Selected</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Applicants;