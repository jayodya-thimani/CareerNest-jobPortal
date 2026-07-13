import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/logo.png";
import "./Login.css";


function Login() {


  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [role, setRole] = useState("student");


  const navigate = useNavigate();



  const handleLogin = (e) => {

    e.preventDefault();


    // Get registered user from browser storage

    const savedUser = JSON.parse(
      localStorage.getItem("user")
    );



    if(!savedUser){

      alert("No account found. Please register first.");

      return;

    }



    // Check login details

    if(
      email === savedUser.email &&
      password === savedUser.password &&
      role === savedUser.role
    ){



      if(role === "student"){

        navigate("/student-dashboard");

      }


      else if(role === "employer"){

        navigate("/employer-dashboard");

      }


      else if(role === "admin"){

        navigate("/admin-dashboard");

      }



    }

    else{

      alert("Invalid email, password or role");

    }


  };




  return (

    <>


      <Navbar />


      <div className="login-page">



        <div className="left-side">


          <div className="overlay">


            <h1>
              CareerNest
            </h1>


            <h2>
              Find Your Dream Job Today
            </h2>


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



            <h2>
              Login
            </h2>




            <form onSubmit={handleLogin}>



              <label>
                Email
              </label>



              <input

              type="email"

              placeholder="Enter Email"

              value={email}

              onChange={(e)=>setEmail(e.target.value)}

              required

              />





              <label>
                Password
              </label>



              <input

              type="password"

              placeholder="Enter Password"

              value={password}

              onChange={(e)=>setPassword(e.target.value)}

              required

              />






              <label>
                Login As
              </label>



              <select

              value={role}

              onChange={(e)=>setRole(e.target.value)}

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

                  <input type="checkbox"/>

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