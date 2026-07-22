import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

import UserProfile from "../../components/UserProfile";

import "./StudentDashboard.css";


function StudentDashboard() {

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();


    const [cvName, setCvName] = useState("");


    // ==========================
    // CV UPLOAD
    // ==========================

    const handleCVUpload = (e) => {

        const file = e.target.files[0];


        if (!file) {

            return;

        }


        const allowedTypes = [

            "application/pdf",

            "application/msword",

            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"

        ];


        if (!allowedTypes.includes(file.type)) {

            alert(

                "Please upload a PDF or Word document."

            );

            return;

        }


        setCvName(file.name);


        alert(

            "CV uploaded successfully!"

        );

    };


    // ==========================
    // LOADING
    // ==========================

    if (!user) {

        return (

            <div className="dashboard-loading">

                <h2>

                    Loading student dashboard...

                </h2>

            </div>

        );

    }


    return (

        <div className="student-dashboard">


            {/* ==========================
                PROFILE MENU
            ========================== */}

            <UserProfile />


            {/* ==========================
                DASHBOARD HEADER
            ========================== */}

            <div className="dashboard-header">


                <div>


                    <h1>

                        Student Dashboard

                    </h1>


                    <p>

                        Welcome back, {user.name}! 👋

                    </p>


                </div>


            </div>


            {/* ==========================
                QUICK ACTIONS
            ========================== */}

            <div className="quick-actions">


                <button

                    onClick={() =>

                        navigate("/jobs")

                    }

                >

                    🔍 Search Jobs

                </button>


                <button

                    onClick={() =>

                        navigate("/applications")

                    }

                >

                    📄 My Applications

                </button>


                <button

                    onClick={() =>

                        navigate("/saved-jobs")

                    }

                >

                    ❤️ Saved Jobs

                </button>


                <button

                    onClick={() =>

                        navigate("/profile")

                    }

                >

                    👤 Edit Profile

                </button>


            </div>


            {/* ==========================
                DASHBOARD CARDS
            ========================== */}

            <div className="dashboard-content">


                {/* PROFILE CARD */}

                <div className="dashboard-card">


                    <h2>

                        👤 My Profile

                    </h2>


                    <p>

                        <strong>

                            Name:

                        </strong>{" "}

                        {user.name}

                    </p>


                    <p>

                        <strong>

                            Email:

                        </strong>{" "}

                        {user.email}

                    </p>


                    <p>

                        <strong>

                            Role:

                        </strong>{" "}

                        Student

                    </p>


                    <button

                        onClick={() =>

                            navigate("/profile")

                        }

                    >

                        Edit Profile

                    </button>


                </div>


                {/* CV CARD */}

                <div className="dashboard-card">


                    <h2>

                        📄 My CV

                    </h2>


                    <p>

                        Upload your CV to apply for

                        internships and jobs.

                    </p>


                    <label

                        htmlFor="cv-upload"

                        className="upload-btn"

                    >

                        Upload CV

                    </label>


                    <input

                        id="cv-upload"

                        type="file"

                        accept=".pdf,.doc,.docx"

                        onChange={handleCVUpload}

                        hidden

                    />


                    {cvName && (

                        <div className="cv-info">


                            <p>

                                📎 {cvName}

                            </p>


                            <button

                                onClick={() =>

                                    setCvName("")

                                }

                            >

                                Remove CV

                            </button>


                        </div>

                    )}


                </div>


                {/* APPLICATIONS CARD */}

                <div className="dashboard-card">


                    <h2>

                        📊 My Applications

                    </h2>


                    <div className="stat-number">

                        0

                    </div>


                    <p>

                        Applications submitted

                    </p>


                    <button

                        onClick={() =>

                            navigate("/applications")

                        }

                    >

                        View Applications

                    </button>


                </div>


                {/* SAVED JOBS CARD */}

                <div className="dashboard-card">


                    <h2>

                        ❤️ Saved Jobs

                    </h2>


                    <div className="stat-number">

                        0

                    </div>


                    <p>

                        Jobs saved for later

                    </p>


                    <button

                        onClick={() =>

                            navigate("/saved-jobs")

                        }

                    >

                        View Saved Jobs

                    </button>


                </div>


                {/* RECOMMENDED OPPORTUNITIES */}

                <div className="dashboard-card recommended-card">


                    <h2>

                        ⭐ Recommended Opportunities

                    </h2>


                    <p>

                        Discover internships and jobs

                        matching your interests and skills.

                    </p>


                    <button

                        onClick={() =>

                            navigate("/jobs")

                        }

                    >

                        Explore Opportunities

                    </button>


                </div>


                {/* PROFILE COMPLETION */}

                <div className="dashboard-card">


                    <h2>

                        📈 Profile Completion

                    </h2>


                    <div className="progress-bar">


                        <div

                            className="progress"

                            style={{

                                width: "60%"

                            }}

                        >

                        </div>


                    </div>


                    <p>

                        Complete your profile to improve

                        your chances of getting hired.

                    </p>


                    <button

                        onClick={() =>

                            navigate("/profile")

                        }

                    >

                        Complete Profile

                    </button>


                </div>


            </div>


        </div>

    );

}


export default StudentDashboard;