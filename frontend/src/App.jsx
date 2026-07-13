import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { ThemeContext } from "./context/ThemeContext";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";

import StudentDashboard from "./pages/student/StudentDashboard";
import EmployerDashboard from "./pages/employer/EmployerDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";

import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import Register from "./pages/Register";


import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import ForgetPassword from "./pages/ForgetPassword";
function App() {

  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "Light" ? "#ffffff" : "#222222",
        color: theme === "Light" ? "#000000" : "#ffffff",
        minHeight: "100vh",
        padding: "20px",
      }}
    >

      {/* Theme Button */}

      <button onClick={changeTheme}>
        Switch to {theme === "Light" ? "Dark" : "Light"} Mode
      </button>

      <hr />

      <Routes>

        {/* Public Pages */}

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/about" element={<About/>} />

        <Route path="/jobs" element={<Jobs />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} 
/>

        {/* Protected Pages */}

        <Route element={<ProtectedRoute />}>

          <Route
            path="/student/dashboard"
            element={<StudentDashboard />}
          />

          <Route
            path="/employer/dashboard"
            element={<EmployerDashboard />}
          />

          <Route
            path="/admin/dashboard"
            element={<AdminDashboard />}
          />

        </Route>

      </Routes>

    </div>
  );
}

export default App;