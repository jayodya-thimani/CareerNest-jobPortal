import { useContext } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { ThemeContext } from "./context/ThemeContext";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Register from "./pages/Register";

import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import ForgetPassword from "./pages/ForgetPassword";


// Dashboard Pages
import StudentDashboard from "./pages/student/StudentDashboard";
import EmployerDashboard from "./pages/employer/EmployerDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";


// Protected Route
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";
import ManageJobs from "./pages/employer/ManageJobs";
import PostJob from "./pages/employer/PostJob";
import Applicants from "./pages/employer/Applicants";
import Notifications from "./pages/employer/Notifications";
import Settings from "./pages/employer/Settings";
import CompanyProfile from "./pages/employer/CompanyProfile";


function App() {


  const { theme, changeTheme } = useContext(ThemeContext);



  return (

    <BrowserRouter>


      <div

        style={{

          backgroundColor:
            theme === "Light"
              ? "#ffffff"
              : "#222222",

          color:
            theme === "Light"
              ? "#000000"
              : "#ffffff",

          minHeight: "100vh",

          padding: "20px"

        }}

      >



        {/* Theme Button */}

        <button onClick={changeTheme}>

          Switch to{" "}

          {theme === "Light"
            ? "Dark"
            : "Light"}

          {" "}Mode

        </button>


        <hr />



        <Routes>


          {/* PUBLIC ROUTES */}


          <Route
            path="/"
            element={<Home />}
          />


          <Route
            path="/login"
            element={<Login />}
          />


          <Route
            path="/register"
            element={<Register />}
          />


          <Route
            path="/jobs"
            element={<Jobs />}
          />


          <Route
            path="/contactus"
            element={<ContactUs />}
          />


          <Route
            path="/about"
            element={<About />}
          />


          <Route
            path="/forgetpassword"
            element={<ForgetPassword />}
          />



          {/* PROTECTED DASHBOARDS */}


          <Route element={<ProtectedRoute role="student" />}>

            <Route
              path="/student/dashboard"
              element={<StudentDashboard />}
            />

          </Route>




          <Route element={<ProtectedRoute role="employer" />}>

            <Route
              path="/employer/dashboard"
              element={<EmployerDashboard />}
            />
            <Route
              path="/employer/managejobs"
              element={<ManageJobs />}
            />
            <Route
              path="/employer/postjob"
              element={<PostJob />}
            />
            <Route
              path="/employer/applicants"
              element={<Applicants />}
            />
            <Route
              path="/employer/notifications"
              element={<Notifications />}
            />
            <Route
              path="/employer/settings"
              element={<Settings />}
            />
            <Route
              path="/employer/profile"
              element={<CompanyProfile />}
            />
          
          </Route>





          <Route element={<ProtectedRoute role="admin" />}>

            <Route
              path="/admin/dashboard"
              element={<AdminDashboard />}
            />

          </Route>




          {/* PAGE NOT FOUND */}


          <Route

            path="*"

            element={
              <h1>
                404 - Page Not Found
              </h1>
            }

          />


        </Routes>


      </div>


    </BrowserRouter>

  );

}


export default App;