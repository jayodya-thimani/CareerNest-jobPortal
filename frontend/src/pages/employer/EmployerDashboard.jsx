import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import UserProfile from "../../components/UserProfile";

import "./EmployerDashboard.css";


function EmployerDashboard() {

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();


    const jobs = JSON.parse(

        localStorage.getItem("jobs")

    ) || [];


    const applicants = JSON.parse(

        localStorage.getItem("applicants")

    ) || [];


    if (!user) {

        return (

            <div className="dashboard-loading">

                <h2>Loading Employer Dashboard...</h2>

            </div>

        );

    }


    return (

        <div className="employer-dashboard">


            <UserProfile />


            <div className="employer-header">

                <h1>

                    Employer Dashboard

                </h1>


                <p>

                    Welcome back, {user.name}! 👋

                </p>

            </div>


            <div className="employer-actions">


                <button

                    onClick={() =>

                        navigate("/post-jobs")

                    }

                >

                    ➕ Post New Job

                </button>


                <button

                    onClick={() =>

                        navigate("/manage-jobs")

                    }

                >

                    📋 Manage Jobs

                </button>


                <button

                    onClick={() =>

                        navigate("/applicants")

                    }

                >

                    👥 View Applicants

                </button>


            </div>


            <div className="employer-stats">


                <div className="employer-stat-card">

                    <h2>💼</h2>

                    <h3>

                        {jobs.length}

                    </h3>

                    <p>

                        Posted Jobs

                    </p>

                </div>


                <div className="employer-stat-card">

                    <h2>👥</h2>

                    <h3>

                        {applicants.length}

                    </h3>

                    <p>

                        Applicants

                    </p>

                </div>


                <div className="employer-stat-card">

                    <h2>📊</h2>

                    <h3>

                        {jobs.filter(

                            job => job.status === "Active"

                        ).length}

                    </h3>

                    <p>

                        Active Jobs

                    </p>

                </div>


            </div>


            <div className="recent-jobs">


                <h2>

                    Recent Job Posts

                </h2>


                {jobs.length === 0 ? (

                    <div className="empty-box">

                        <p>

                            You have not posted any jobs yet.

                        </p>


                        <button

                            onClick={() =>

                                navigate("/post-jobs")

                            }

                        >

                            Post Your First Job

                        </button>

                    </div>

                ) : (

                    jobs.slice(0, 5).map((job) => (


                        <div

                            className="recent-job"

                            key={job.id}

                        >

                            <div>

                                <h3>

                                    {job.title}

                                </h3>


                                <p>

                                    {job.location} • {job.type}

                                </p>

                            </div>


                            <span>

                                {job.status}

                            </span>

                        </div>

                    ))

                )}

            </div>


        </div>

    );

}


export default EmployerDashboard;