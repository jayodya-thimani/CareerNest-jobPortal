import EmployerSidebar from "../../components/employer/EmployerSidebar";
import UserProfile from "../../components/common/UserProfile";
import "../../Styles/employer/CompanyProfile.css";

function CompanyProfile() {
  return (
    <div className="dashboard-layout">
      <EmployerSidebar />

      <div className="dashboard-content">
        <UserProfile />

        <div className="manage-header">
          <div>
            <h1>Company Profile</h1>
            <p>Showcase your company details and attract better candidates.</p>
          </div>
        </div>

        <div className="profile-hero">
          <div className="profile-badge">🏢</div>
          <div>
            <h2>CareerNest Labs</h2>
            <p>Building next-generation digital experiences for ambitious teams.</p>
          </div>
        </div>

        <div className="profile-grid">
          <div className="profile-card">
            <h3>Company Overview</h3>
            <p>
              We are a fast-growing product company focused on talent discovery,
              hiring innovation, and seamless career growth.
            </p>
          </div>

          <div className="profile-card">
            <h3>Contact Information</h3>
            <p><strong>Email:</strong> hiring@careernest.com</p>
            <p><strong>Phone:</strong> +1 555 1234</p>
            <p><strong>Location:</strong> New York, USA</p>
          </div>

          <div className="profile-card">
            <h3>Company Details</h3>
            <p><strong>Industry:</strong> Technology</p>
            <p><strong>Company Size:</strong> 50-200 employees</p>
            <p><strong>Founded:</strong> 2021</p>
          </div>

          <div className="profile-card">
            <h3>Benefits</h3>
            <ul>
              <li>Remote-first culture</li>
              <li>Health and wellness support</li>
              <li>Career growth programs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyProfile;
