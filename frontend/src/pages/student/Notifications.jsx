import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

import UserProfile from "../../components/UserProfile";

import "./Notifications.css";


function Notifications() {

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();


    const [notifications, setNotifications] = useState([

        {
            id: 1,
            title: "Application Update",
            message:
                "Your application for Data Analyst Intern is under review.",
            time: "2 hours ago",
            read: false
        },

        {
            id: 2,
            title: "New Opportunity",
            message:
                "A new Software Engineering Internship matches your profile.",
            time: "1 day ago",
            read: false
        },

        {
            id: 3,
            title: "Profile Reminder",
            message:
                "Complete your profile to improve your opportunities.",
            time: "2 days ago",
            read: true
        }

    ]);


    const markAsRead = (id) => {

        setNotifications(

            notifications.map((notification) =>

                notification.id === id

                    ? {

                        ...notification,

                        read: true

                    }

                    : notification

            )

        );

    };


    const markAllAsRead = () => {

        setNotifications(

            notifications.map((notification) => ({

                ...notification,

                read: true

            }))

        );

    };


    if (!user) {

        return null;

    }


    return (

        <div className="student-page">


            <UserProfile />


            <div className="page-header">


                <button

                    className="back-btn"

                    onClick={() =>

                        navigate("/student-dashboard")

                    }

                >

                    ← Dashboard

                </button>


                <h1>

                    🔔 Notifications

                </h1>


                <p>

                    Stay updated with your applications and opportunities.

                </p>


            </div>


            <div className="notification-actions">


                <button

                    onClick={markAllAsRead}

                >

                    Mark All as Read

                </button>


            </div>


            <div className="notifications-container">


                {notifications.map((notification) => (


                    <div

                        key={notification.id}

                        className={

                            notification.read

                                ? "notification-card read"

                                : "notification-card unread"

                        }

                        onClick={() =>

                            markAsRead(notification.id)

                        }

                    >


                        <div className="notification-icon">

                            🔔

                        </div>


                        <div className="notification-content">


                            <h2>

                                {notification.title}

                            </h2>


                            <p>

                                {notification.message}

                            </p>


                            <span>

                                {notification.time}

                            </span>


                        </div>


                        {!notification.read && (

                            <div className="unread-dot">

                            </div>

                        )}


                    </div>

                ))}


            </div>


        </div>

    );

}


export default Notifications;