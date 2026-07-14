import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "../context/AuthContext";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/logo.png";

import "./Login.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const navigate = useNavigate();

  // AuthContext
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password
        }
      );
       
      alert(res.data.message);
      login(res.data.user);
      // Check selected role
      if (role !== res.data.user.role) {
        alert("Selected role does not match your account.");
        return;
      }

      // Save user in AuthContext + localStorage
      login(res.data.user);

      // Navigate to dashboard
      if (res.data.user.role === "student") {

        navigate("/student/dashboard");

      }
      else if (res.data.user.role === "employer") {

        navigate("/employer/dashboard");

      }
      else if (res.data.user.role === "admin") {

        navigate("/admin/dashboard");

      }

    } catch (error) {

      console.log(error.response);

      alert(
        error.response?.data?.message || "Login Failed"
      );

    }

  };

  return (

    <>
      <Navbar />

      <div className="login-page">

        <div className="left-side">

          <div className="overlay">

            <h1>CareerNest</h1>

            <h2>Find Your Dream Job Today</h2>

            <p>
              Connect with thousands of employers and discover
              internships and career opportunities.
            </p>

          </div>

        </div>

        <div className="right-side">

          <div className="login-card">

            <img
              src={logo}
              alt="logo"
              className="login-logo"
            />

            <h2>Login</h2>

            <form onSubmit={handleLogin}>

              <label>Email</label>

              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label>Password</label>

              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <label>Login As</label>

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >

                <option value="student">
                  Student
                </option>

                <option value="employer">
                  Employer
                </option>

                <option value="admin">
                  Admin
                </option>

              </select>

              <div className="options">

                <label>

                  <input type="checkbox" />

                  Remember Me

                </label>

                <Link to="/forgetpassword">

                  Forgot Password?

                </Link>

              </div>

              <button type="submit">

                LOGIN

              </button>

            </form>

            <p className="register-text">

              Don't have an account?

              <Link to="/register">

                Register Now

              </Link>

            </p>

          </div>

        </div>

      </div>

      <Footer />

    </>

  );

}

export default Login;