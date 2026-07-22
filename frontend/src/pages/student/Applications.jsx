import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

import UserProfile from "../../components/UserProfile";

import "./Applications.css";


function Applications() {

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();


    const [applications] = useState([

        {
            id: 1,
            jobTitle: "Software Engineering Intern",
            company: "Tech Solutions",
            date: "2026-07-20",
            status: "Under Review"
        },

        {
            id: 2,
            jobTitle: "Data Analyst Intern",
            company: "Data Insights Ltd",
            date: "2026-07-18",
            status: "Shortlisted"
        }

    ]);


    if (!user) {

        return (

            <div className="dashboard-loading">

                <h2>

                    Loading...

                </h2>

            </div>

        );

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

                    📄 My Applications

                </h1>


                <p>

                    Track the status of your job applications.

                </p>


            </div>


            <div className="applications-container">


                {applications.length === 0 ? (

                    <div className="empty-state">

                        <h2>

                            No Applications Yet

                        </h2>


                        <p>

                            Start applying for jobs and internships.

                        </p>


                        <button

                            onClick={() =>

                                navigate("/jobs")

                            }

                        >

                            Browse Jobs

                        </button>

                    </div>

                ) : (

                    applications.map((application) => (

                        <div

                            className="application-card"

                            key={application.id}

                        >


                            <div>


                                <h2>

                                    {application.jobTitle}

                                </h2>


                                <h3>

                                    {application.company}

                                </h3>


                                <p>

                                    Applied on:{" "}

                                    {application.date}

                                </p>


                            </div>


                            <span

                                className={

                                    `status ${

                                        application.status

                                            .toLowerCase()

                                            .replace(" ", "-")

                                    }`

                                }

                            >

                                {application.status}

                            </span>


                        </div>

                    ))

                )}


            </div>


        </div>

    );

}


export default Applications;