import { Link } from "react-router-dom";
import "../../styles/common/Navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo-container">

        <img
          src={logo}
          alt="CareerNest Logo"
          className="logo-image"
        />

        <h2>CareerNest</h2>

      </Link>

      <div className="nav-links">

        <Link to="/">Home</Link>
         
        <Link to="/about">About</Link>

        <Link to="/jobs">Jobs</Link>

        <Link to="/contactus">Contact Us</Link>

        <Link to="/login">Login</Link>
        
      
      </div>
    </nav>
  );
}

export default Navbar;