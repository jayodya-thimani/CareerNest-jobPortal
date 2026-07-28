import "../../Styles/admin/AdminNavbar.css";
import logo from "../../assets/logo.png";

function AdminNavbar() {
  return (
    <div className="admin-navbar">
      <div className="navbar-left">
        <img src={logo} alt="CareerNest Logo" className="navbar-logo" />
        <h2>CareerNest</h2>
      </div>

      <div className="navbar-center">
        <h1>Welcome, Admin</h1>
        <p>CareerNest Administration Panel</p>
      </div>

      <div className="navbar-right">
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
}

export default AdminNavbar;