import { useContext } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { ThemeContext } from "./context/ThemeContext";

import Login from"./pages/common/Login";
import Home from "./pages/common/Home";
import Jobs from "./pages/common/Jobs";
import Register from "./pages/common/Register";

import ContactUs from "./pages/common/ContactUs";
import About from "./pages/common/About";
import ForgetPassword from "./pages/common/ForgetPassword";


// Dashboard Pages
import StudentDashboard from "./pages/student/StudentDashboard";
import SavedJobs from "./pages/student/SavedJobs";
import StudentProfile from "./pages/student/StudentProfile";
import Messages from "./pages/student/Messages";
import CareerResources from "./pages/student/CareerResources";
import StudentSettings from "./pages/student/StudentSettings";
import Applications from "./pages/student/Applications";
import EmployerDashboard from "./pages/employer/EmployerDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";

{/* admin routes */}
import AdminStudents from "./pages/admin/AdminStudents";
import AdminEmployers from "./pages/admin/AdminEmployers";
import AdminJobs from "./pages/admin/AdminJobs";
import AdminApplications from "./pages/admin/AdminApplications";

import AdminSettings from "./pages/admin/AdminSettings";
import EditStudent from "./pages/admin/EditStudent";
import EditEmployer from "./pages/admin/EditEmployer";
import EditJob from "./pages/admin/EditJob";
import EditApplication from "./pages/admin/EditApplication";
// Protected Route
import ProtectedRoute from "./components/common/ProtectedRoute";

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

          minHeight: "100vh",

          width: "100%"

        }}

      >

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
            <Route
              path="/student/saved-jobs"
              element={<SavedJobs />}
            />

            <Route
              path="/student/profile"
              element={<StudentProfile />}
            />

            <Route
             path="/student/messages"
             element={<Messages />}
            />

            <Route
            path="/student/career-resources"
            element={<CareerResources />}
            />

           <Route
            path="/student/settings"
            element={<StudentSettings />}
            />


                {/* Applications */}

            <Route
                path="/student/applications"
                element={<Applications />}
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
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/students" element={<AdminStudents />} />
        <Route path="/admin/employers" element={<AdminEmployers />} />
        <Route path="/admin/jobs" element={<AdminJobs />} />
        <Route path="/admin/applications" element={<AdminApplications />} />
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