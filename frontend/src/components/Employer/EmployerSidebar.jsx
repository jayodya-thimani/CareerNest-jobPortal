import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import "../../Styles/employer/EmployerSidebar.css";

function EmployerSidebar() {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return null;
  }

  return (
    <aside className="employer-sidebar">

      {/* Logo */}

      <div className="sidebar-logo">
        <h2>CareerNest</h2>
        <p>Employer Portal</p>
      </div>

      {/* User Info */}

      <div className="sidebar-header">
        <h3>Welcome</h3>
        <h4>{user.name}</h4>
      </div>

      {/* Navigation */}

      <nav className="sidebar-menu">

        <NavLink
          to="/employer/dashboard"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          🏠 Dashboard
        </NavLink>

        <NavLink
          to="/employer/postjob"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          📢 Post Job
        </NavLink>

        <NavLink
          to="/employer/managejobs"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          📋 Manage Jobs
        </NavLink>

        <NavLink
          to="/employer/applicants"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          👨‍🎓 Applicants
        </NavLink>

        <NavLink
          to="/employer/profile"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          🏢 Company Profile
        </NavLink>

        <NavLink
          to="/employer/notifications"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          🔔 Notifications
        </NavLink>

        <NavLink
          to="/employer/settings"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          ⚙ Settings
        </NavLink>

      </nav>

      {/* Logout */}

      <div className="sidebar-footer">
        <button className="logout-btn" onClick={logout}>
          🚪 Logout
        </button>
      </div>

    </aside>
  );
}

export default EmployerSidebar;