import { Link } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";

function Sidebar() {

  const { user, logout } = useContext(AuthContext);
  const { theme, changeTheme } = useContext(ThemeContext);

  if (!user) {
    return null;
  }

  return (
    <div
      style={{
        width: "220px",
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: theme === "Light" ? "#f2f2f2" : "#333",
        color: theme === "Light" ? "black" : "white",
      }}
    >
      <h2>Job Portal</h2>

      <hr />

      <p>
        <strong>Welcome</strong>
      </p>

      <p>{user.name}</p>

      <p>Role : {user.role}</p>

      <hr />

      {/* Student Menu */}

      {user.role === "student" && (
        <>
          <Link to="/student/dashboard">Dashboard</Link>

          <br /><br />

          <Link to="/student/profile">My Profile</Link>

          <br /><br />

          <Link to="/jobs">Browse Jobs</Link>

          <br /><br />

          <Link to="/student/applications">
            My Applications
          </Link>

          <br /><br />

          <Link to="/student/notifications">
            Notifications
          </Link>

          <br /><br />
        </>
      )}

      {/* Employer Menu */}

      {user.role === "employer" && (
        <>
          <Link to="/employer/dashboard">
            Dashboard
          </Link>

          <br /><br />

          <Link to="/employer/postjob">
            Post Job
          </Link>

          <br /><br />

          <Link to="/employer/managejobs">
            Manage Jobs
          </Link>

          <br /><br />

          <Link to="/employer/applicants">
            Applicants
          </Link>

          <br /><br />
        </>
      )}

      {/* Admin Menu */}

      {user.role === "admin" && (
        <>
          <Link to="/admin/dashboard">
            Dashboard
          </Link>

          <br /><br />

          <Link to="/admin/users">
            Manage Users
          </Link>

          <br /><br />

          <Link to="/admin/jobapproval">
            Job Approval
          </Link>

          <br /><br />
        </>
      )}

      <hr />

      {/* Theme Button */}

      <button onClick={changeTheme}>
        Switch to {theme === "Light" ? "Dark" : "Light"} Mode
      </button>

      <br /><br />

      {/* Logout Button */}

      <button onClick={logout}>
        Logout
      </button>

    </div>
  );
}

export default Sidebar;