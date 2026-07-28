import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  Settings,
  Bell,
  Lock,
  User,
  Moon,
  Save
} from "lucide-react";

import { ThemeContext } from "../../context/ThemeContext";

import "../../styles/student/StudentPages.css";


function StudentSettings() {


  const { theme, changeTheme } = useContext(ThemeContext);


  const studentId =
    localStorage.getItem("studentId") || localStorage.getItem("userId");



  const [settings, setSettings] = useState({

    notifications: true,

    emailAlerts: true

  });



  // =============================
  // LOAD SETTINGS FROM DATABASE
  // =============================

  useEffect(()=>{


    if(!studentId) return;


    axios.get(

      `/api/settings/${studentId}`

    )

    .then((response)=>{


      setSettings({

        notifications:
        response.data.notifications,


        emailAlerts:
        response.data.emailAlerts

      });


    })


    .catch((error)=>{

      console.log(error);

    });


  },[studentId]);






  // =============================
  // HANDLE CHECKBOX CHANGES
  // =============================


  const handleChange = (e)=>{


    setSettings({

      ...settings,

      [e.target.name]:
      e.target.checked

    });


  };






  // =============================
  // SAVE SETTINGS TO DATABASE
  // =============================


  const saveSettings = async()=>{


    try{


      await axios.put(

        `/api/settings/${studentId}`,

        settings

      );


      alert(
        "Settings saved successfully!"
      );


    }

    catch(error){


      console.log(error);


    }


  };







  // =============================
  // DARK MODE UPDATE
  // =============================


  const handleThemeChange = ()=>{


    changeTheme();


  };






  return (

    <div className="student-page">


      <div className="page-header">

        <h1>

          <Settings size={30}/>

          Student Settings

        </h1>


        <p>

          Manage your account preferences and notification settings.

        </p>


      </div>





      <div className="settings-container">





        {/* ACCOUNT */}


        <div className="settings-card">


          <div className="settings-title">

            <User size={24}/>

            <h2>
              Account
            </h2>

          </div>



          <p>
            View and manage your student profile.
          </p>



          <Link

            to="/student/profile"

            className="setting-btn"

          >

            View Profile

          </Link>


        </div>









        {/* NOTIFICATIONS */}



        <div className="settings-card">


          <div className="settings-title">

            <Bell size={24}/>

            <h2>
              Notifications
            </h2>

          </div>





          <div className="setting-option">


            <label>

              Receive Application Updates

            </label>



            <input

              type="checkbox"

              name="notifications"

              checked={
                settings.notifications
              }

              onChange={handleChange}

            />


          </div>







          <div className="setting-option">


            <label>

              Email Notifications

            </label>



            <input

              type="checkbox"

              name="emailAlerts"

              checked={
                settings.emailAlerts
              }

              onChange={handleChange}

            />


          </div>



        </div>









        {/* APPEARANCE */}



        <div className="settings-card">


          <div className="settings-title">


            <Moon size={24}/>


            <h2>
              Appearance
            </h2>


          </div>






          <div className="setting-option">


            <label>

              Dark Mode

            </label>





            <input

              type="checkbox"

              checked={
                theme !== "Light"
              }

              onChange={handleThemeChange}

            />



          </div>



        </div>









        {/* SECURITY */}



        <div className="settings-card">


          <div className="settings-title">


            <Lock size={24}/>


            <h2>
              Security
            </h2>


          </div>





          <p>

            Reset or change your account password.

          </p>





          <Link

            to="/forgetpassword"

            className="setting-btn"

          >

            Change Password

          </Link>



        </div>









        {/* SAVE BUTTON */}



        <button

          className="save-settings"

          onClick={saveSettings}

        >


          <Save size={20}/>


          Save Settings


        </button>





      </div>


    </div>

  );

}


export default StudentSettings;