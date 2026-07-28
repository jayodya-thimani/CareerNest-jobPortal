import { NavLink } from "react-router-dom";
import "../../Styles/admin/AdminSidebar.css";

function AdminSidebar() {
  return (
    <div className="admin-sidebar">
      <h2 className="sidebar-logo">CareerNest</h2>

      <ul className="sidebar-menu">
        <li>
          <NavLink to="/admin/dashboard">Dashboard</NavLink>
        </li>

        <li>
          <NavLink to="/admin/students">Students</NavLink>
        </li>

        <li>
          <NavLink to="/admin/employers">Employers</NavLink>
        </li>

        <li>
          <NavLink to="/admin/jobs">Jobs</NavLink>
        </li>

        <li>
          <NavLink to="/admin/applications">Applications</NavLink>
        </li>

        

        <li>
          <NavLink to="/admin/settings">Settings</NavLink>
        </li>

        <li>
          <NavLink to="/login">Logout</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AdminSidebar;