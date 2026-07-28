import EmployerSidebar from "../../components/employer/EmployerSidebar";
import UserProfile from "../../components/common/UserProfile";
import "../../Styles/employer/Settings.css";

function Settings() {
  return (
    <div className="dashboard-layout">
      <EmployerSidebar />

      <div className="dashboard-content">
        <UserProfile />

        <div className="manage-header">
          <div>
            <h1>Settings</h1>
            <p>Manage your account preferences and company preferences.</p>
          </div>
        </div>

        <div className="settings-grid">
          <div className="settings-card">
            <h3>Account Settings</h3>
            <label>
              Email
              <input type="email" defaultValue="employer@careernest.com" />
            </label>
            <label>
              Password
              <input type="password" defaultValue="********" />
            </label>
            <button>Save Changes</button>
          </div>

          <div className="settings-card">
            <h3>Notification Preferences</h3>
            <label className="checkbox-row">
              <input type="checkbox" defaultChecked />
              <span>Email alerts for new applicants</span>
            </label>
            <label className="checkbox-row">
              <input type="checkbox" defaultChecked />
              <span>Weekly job performance summary</span>
            </label>
            <label className="checkbox-row">
              <input type="checkbox" />
              <span>SMS reminders</span>
            </label>
          </div>

          <div className="settings-card">
            <h3>Company Preferences</h3>
            <label>
              Company Name
              <input type="text" defaultValue="CareerNest Labs" />
            </label>
            <label>
              Contact Number
              <input type="text" defaultValue="+1 555 1234" />
            </label>
            <button>Update Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
