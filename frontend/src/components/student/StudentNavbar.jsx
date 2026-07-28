import React, { useState } from "react";

import {
  Menu,
  Bell,
  ChevronDown
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import "../../styles/student/StudentNavbar.css";

function StudentNavbar({
  toggleSidebar,
  userName,
  profilePhoto
}) {

  const navigate = useNavigate();

  const [showMenu, setShowMenu] =
    useState(false);

  return (

    <header className="student-navbar">

      <div className="navbar-left">

        <button
          className="menu-button"
          onClick={toggleSidebar}
        >
          <Menu size={24} />
        </button>

        <div
          className="student-logo"
          onClick={() =>
            navigate("/student-dashboard")
          }
        >
          CareerNest
        </div>

      </div>


      <div className="navbar-right">

        <button
          className="notification-button"
          onClick={() =>
            navigate("/student/messages")
          }
        >
          <Bell size={21} />

          <span className="notification-dot">
          </span>

        </button>


        <div
          className="navbar-profile"
          onClick={() =>
            setShowMenu(!showMenu)
          }
        >

          {profilePhoto ? (

            <img
              src={profilePhoto}
              alt="Profile"
              className="navbar-profile-image"
            />

          ) : (

            <div className="navbar-profile-placeholder">
              {userName?.charAt(0)}
            </div>

          )}

          <div className="navbar-user-info">

            <strong>
              {userName}
            </strong>

            <span>
              Student
            </span>

          </div>

          <ChevronDown size={17} />


          {showMenu && (

            <div className="profile-dropdown">

              <button
                onClick={() =>
                  navigate("/student/profile")
                }
              >
                My Profile
              </button>

              <button
                onClick={() =>
                  navigate("/student/settings")
                }
              >
                Settings
              </button>

              <button
                onClick={() =>
                  navigate("/login")
                }
              >
                Logout
              </button>

            </div>

          )}

        </div>

      </div>

    </header>

  );
}

export default StudentNavbar;