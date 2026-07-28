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

{/* admin routes */}
import AdminStudents from "./pages/admin/AdminStudents";
import AdminEmployers from "./pages/admin/AdminEmployers";
import AdminJobs from "./pages/admin/AdminJobs";
import AdminApplications from "./pages/admin/AdminApplications";
import AdminReports from "./pages/admin/AdminReports";
import AdminSettings from "./pages/admin/AdminSettings";
import EditStudent from "./pages/admin/EditStudent";
import EditEmployer from "./pages/admin/EditEmployer";
import EditJob from "./pages/admin/EditJob";
import EditApplication from "./pages/admin/EditApplication";
// Protected Route
import ProtectedRoute from "./components/common/ProtectedRoute";

import "./App.css";


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

          </Route>

          <Route element={<ProtectedRoute role="admin" />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/students" element={<AdminStudents />} />
        <Route path="/admin/employers" element={<AdminEmployers />} />
        <Route path="/admin/jobs" element={<AdminJobs />} />
        <Route path="/admin/applications" element={<AdminApplications />} />
        <Route path="/admin/reports" element={<AdminReports />} />
        <Route path="/admin/settings" element={<AdminSettings />} />
        <Route path="/admin/students/edit/:id" element={<EditStudent />} />
        <Route path="/admin/employers/edit/:id" element={<EditEmployer />} />
        <Route path="/admin/jobs/edit/:id" element={<EditJob />} />
        <Route path="/admin/applications/edit/:id"element={<EditApplication />}/>
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