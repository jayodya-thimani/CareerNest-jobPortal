import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Register() {

  const navigate = useNavigate();

  const [role, setRole] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    company: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleRegister = async (e) => {

    e.preventDefault();

    if (!role) {
      alert("Please select your account type");
      return;
    }
    // Password must be at least 6 characters
if (formData.password.length < 6) {
  alert("Password must be at least 6 characters long.");
  return;
}

// Password must contain at least one letter and one number
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

if (!passwordRegex.test(formData.password)) {
  alert(
    "Password must contain at least one letter, one number, and be at least 6 characters long."
  );
  return;
}
    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          company: formData.company,
          role: role
        }
      );

      alert(res.data.message);
      alert("Registration Successful!");

navigate("/login");

      // Save user (optional
      

    } catch (error) {

      alert(
        error.response?.data?.message || "Registration Failed"
      );

    }

  };

  return (

    <>

      <Navbar />

      <div className="register-page">

        <div className="register-card">

          <h1>Create an Account</h1>

          <p>
            Join CareerNest and explore career opportunities.
          </p>

          {/* Role Selection */}

          <div className="role-container">

            <button
              type="button"
              className={
                role === "student"
                  ? "role-btn active"
                  : "role-btn"
              }
              onClick={() => setRole("student")}
            >
              👨‍🎓 Student
            </button>

            <button
              type="button"
              className={
                role === "employer"
                  ? "role-btn active"
                  : "role-btn"
              }
              onClick={() => setRole("employer")}
            >
              🏢 Employer
            </button>

          </div>

          <form onSubmit={handleRegister}>

            <input
              type="text"
              name="name"
              placeholder={
                role === "employer"
                  ? "Company Name"
                  : "Full Name"
              }
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              minLength="6"
              required
            />
            <small style={{ color: "#666" }}>
               Password must be at least 6 characters and contain letters and numbers.
            </small>
            {
              role === "employer" &&

              <input
                type="text"
                name="company"
                placeholder="Company Registration Details"
                value={formData.company}
                onChange={handleChange}
              />

            }

            <button
              type="submit"
              className="register-btn"
            >
              Register
            </button>

          </form>

          <p className="login-link">

            Already have an account?

            <span onClick={() => navigate("/login")}>

              Login

            </span>

          </p>

        </div>

      </div>

      <Footer />

    </>

  );

}

export default Register;