import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import background from "../assets/background.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Register() {

  const navigate = useNavigate();


  const [role, setRole] = useState("");


  const [formData, setFormData] = useState({

    name:"",
    email:"",
    password:"",
    company:""

  });



  const handleChange = (e)=>{

    setFormData({

      ...formData,

      [e.target.name]:e.target.value

    });

  };



  const handleRegister = (e)=>{

    e.preventDefault();


    if(role==="student"){

      navigate("/student-dashboard");

    }


    else if(role==="employer"){

      navigate("/employer-dashboard");

    }


    else{

      alert("Please select your account type");

    }

  };



  return (

    <>

    <Navbar />


    <div className="register-page">


      <div className="register-card">


        <h1>
          Create an Account
        </h1>


        <p>
          Join CareerNest and explore career opportunities.
        </p>



        {/* ROLE SELECTION */}


        <div className="role-container">


          <button

          className={
            role==="student"
            ?"role-btn active"
            :"role-btn"
          }

          onClick={()=>setRole("student")}

          >

          👨‍🎓 Student

          </button>




          <button

          className={
            role==="employer"
            ?"role-btn active"
            :"role-btn"
          }

          onClick={()=>setRole("employer")}

          >

          🏢 Employer

          </button>



        </div>





        <form onSubmit={handleRegister}>



          <input

          type="text"

          name="name"

          placeholder={
            role==="employer"
            ?"Company Name"
            :"Full Name"
          }

          value={formData.name}

          onChange={handleChange}

          />




          <input

          type="email"

          name="email"

          placeholder="Email Address"

          value={formData.email}

          onChange={handleChange}

          />




          <input

          type="password"

          name="password"

          placeholder="Password"

          value={formData.password}

          onChange={handleChange}

          />




          {
            role==="employer" &&

            <input

            type="text"

            name="company"

            placeholder="Company Registration Details"

            value={formData.company}

            onChange={handleChange}

            />

          }




          <button className="register-btn">

            Register

          </button>




        </form>




        <p className="login-link">

          Already have an account?

          <span onClick={()=>navigate("/login")}>

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