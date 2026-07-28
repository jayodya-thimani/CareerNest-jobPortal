import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../Styles/Register.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function Register() {

  const navigate = useNavigate();

  const [role, setRole] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    company: "",
    profilePicture: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Profile Picture Preview
  const handleProfilePicture = (e) => {

    const file = e.target.files[0];

    if (file) {

      const reader = new FileReader();

      reader.onloadend = () => {

        setFormData((prev) => ({
          ...prev,
          profilePicture: reader.result
        }));

      };

      reader.readAsDataURL(file);

    }

  };

  // Register User
  const handleRegister = async (e) => {

    e.preventDefault();

    if (!role) {
      alert("Please select your account type");
      return;
    }

    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill all required fields");
      return;
    }

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: role,
          company: role === "employer"
            ? formData.company
            : ""
        }
      );

      alert(res.data.message);

      navigate("/login");

    }

    catch (error) {

      alert(
        error.response?.data?.message ||
        "Registration Failed"
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
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            {role === "employer" && (

              <input
                type="text"
                name="company"
                placeholder="Company Registration Details"
                value={formData.company}
                onChange={handleChange}
              />

            )}

            {/* Profile Picture */}

            <label className="profile-label">
              Upload Profile Picture
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicture}
            />

            {formData.profilePicture && (

              <img
                src={formData.profilePicture}
                alt="Profile Preview"
                className="profile-preview"
              />

            )}

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