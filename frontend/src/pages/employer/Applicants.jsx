import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import UserProfile from "../../components/UserProfile";

import "./Applicants.css";


function Applicants() {

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();


    const [applicants, setApplicants] = useState(

        JSON.parse(

            localStorage.getItem("applicants")

        ) || []

    );


    const updateStatus = (id, newStatus) => {


        const updatedApplicants = applicants.map(

            (applicant) =>

                applicant.id === id

                    ? {

                        ...applicant,

                        status: newStatus

                    }

                    : applicant

        );


        setApplicants(updatedApplicants);


        localStorage.setItem(

            "applicants",

            JSON.stringify(updatedApplicants)

        );

    };


    if (!user) {

        return null;

    }


    return (

        <div className="employer-page">


            <UserProfile />


            <div className="page-header">


                <button

                    className="back-btn"

                    onClick={() =>

                        navigate("/employer-dashboard")

                    }

                >

                    ← Dashboard

                </button>


                <h1>

                    👥 Applicants

                </h1>


                <p>

                    Review and manage student applications.

                </p>


            </div>


            <div className="applicants-container">


                {applicants.length === 0 ? (

                    <div className="empty-box">

                        <h2>

                            No Applicants Yet

                        </h2>


                        <p>

                            Applicants will appear here when students apply for your jobs.

                        </p>

                    </div>

                ) : (

                    applicants.map((applicant) => (


                        <div

                            className="applicant-card"

                            key={applicant.id}

                        >


                            <div className="applicant-info">


                                <div className="applicant-picture">

                                    {applicant.profilePicture ? (

                                        <img

                                            src={applicant.profilePicture}

                                            alt={applicant.name}

                                        />

                                    ) : (

                                        "👤"

                                    )}

                                </div>


                                <div>


                                    <h2>

                                        {applicant.name}

                                    </h2>


                                    <p>

                                        📧 {applicant.email}

                                    </p>


                                    <p>

                                        💼 {applicant.jobTitle}

                                    </p>

                                </div>


                            </div>


                            <div className="applicant-actions">


                                <span

                                    className={

                                        `application-status ${

                                            applicant.status

                                                ?.toLowerCase()

                                                .replace(" ", "-")

                                        }`

                                    }

                                >

                                    {applicant.status || "Pending"}

                                </span>


                                <select

                                    value={

                                        applicant.status || "Pending"

                                    }

                                    onChange={(e) =>

                                        updateStatus(

                                            applicant.id,

                                            e.target.value

                                        )

                                    }

                                >

                                    <option value="Pending">

                                        Pending

                                    </option>


                                    <option value="Shortlisted">

                                        Shortlisted

                                    </option>


                                    <option value="Rejected">

                                        Rejected

                                    </option>


                                    <option value="Selected">

                                        Selected

                                    </option>

                                </select>


                            </div>


                        </div>

                    ))

                )}

            </div>


        </div>

    );

}


export default Applicants;