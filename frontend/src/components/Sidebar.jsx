import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside
      style={{
        width: "220px",
        minHeight: "100vh",
        background: "#0f3d6b",
        color: "#fff",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>CareerNest</h2>
      <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <NavLink to="/admin/dashboard" style={{ color: "#fff", textDecoration: "none" }}>
          Dashboard
        </NavLink>
        <NavLink to="/admin/manage-users" style={{ color: "#fff", textDecoration: "none" }}>
          Manage Users
        </NavLink>
        <NavLink to="/admin/manage-jobs" style={{ color: "#fff", textDecoration: "none" }}>
          Manage Jobs
        </NavLink>
        <NavLink to="/admin/job-approval" style={{ color: "#fff", textDecoration: "none" }}>
          Job Approval
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
