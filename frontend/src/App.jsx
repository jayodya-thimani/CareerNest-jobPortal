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