import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import UserProfile from "../../components/UserProfile";

import "./Jobs.css";


function Jobs() {

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();


    const [jobs, setJobs] = useState([]);

    const [search, setSearch] = useState("");

    const [savedJobs, setSavedJobs] = useState(

        JSON.parse(

            localStorage.getItem(

                `savedJobs_${user?.email}`

            )

        ) || []

    );


    // ==========================
    // LOAD JOBS FROM LOCALSTORAGE
    // ==========================

    useEffect(() => {

        const storedJobs = JSON.parse(

            localStorage.getItem("jobs")

        ) || [];


        // Show only active jobs

        const activeJobs = storedJobs.filter(

            (job) => job.status === "Active"

        );


        setJobs(activeJobs);

    }, []);


    // ==========================
    // SEARCH JOBS
    // ==========================

    const filteredJobs = jobs.filter((job) => {


        const searchText = search.toLowerCase();


        return (

            job.title

                ?.toLowerCase()

                .includes(searchText) ||


            job.company

                ?.toLowerCase()

                .includes(searchText) ||


            job.skills

                ?.toLowerCase()

                .includes(searchText) ||


            job.category

                ?.toLowerCase()

                .includes(searchText) ||


            job.location

                ?.toLowerCase()

                .includes(searchText)

        );

    });


    // ==========================
    // SAVE / UNSAVE JOB
    // ==========================

    const toggleSaveJob = (jobId) => {


        let updatedSavedJobs;


        if (savedJobs.includes(jobId)) {


            updatedSavedJobs = savedJobs.filter(

                (id) => id !== jobId

            );


        } else {


            updatedSavedJobs = [

                ...savedJobs,

                jobId

            ];

        }


        setSavedJobs(updatedSavedJobs);


        localStorage.setItem(

            `savedJobs_${user.email}`,

            JSON.stringify(updatedSavedJobs)

        );

    };


    // ==========================
    // APPLY FOR JOB
    // ==========================

    const applyForJob = (job) => {


        const existingApplications = JSON.parse(

            localStorage.getItem("applications")

        ) || [];


        // Check if student already applied

        const alreadyApplied = existingApplications.some(

            (application) =>

                application.jobId === job.id &&

                application.studentEmail === user.email

        );


        if (alreadyApplied) {

            alert(

                "You have already applied for this job."

            );

            return;

        }


        const newApplication = {


            id: Date.now(),


            jobId: job.id,


            jobTitle: job.title,


            company: job.company,


            studentName: user.name,


            studentEmail: user.email,


            profilePicture:

                user.profilePicture || "",


            status: "Pending",


            appliedDate:

                new Date()

                    .toISOString()

                    .split("T")[0]

        };


        const updatedApplications = [

            ...existingApplications,

            newApplication

        ];


        // Save applications

        localStorage.setItem(

            "applications",

            JSON.stringify(updatedApplications)

        );


        // Also save in applicants storage

        const existingApplicants = JSON.parse(

            localStorage.getItem("applicants")

        ) || [];


        const newApplicant = {


            id: newApplication.id,


            name: user.name,


            email: user.email,


            profilePicture:

                user.profilePicture || "",


            jobTitle: job.title,


            company: job.company,


            jobId: job.id,


            status: "Pending",


            appliedDate:

                new Date()

                    .toISOString()

                    .split("T")[0]

        };


        localStorage.setItem(

            "applicants",

            JSON.stringify([

                ...existingApplicants,

                newApplicant

            ])

        );


        alert(

            "Application submitted successfully! 🎉"

        );

    };


    if (!user) {

        return null;

    }


    return (

        <div className="student-page">


            {/* PROFILE */}

            <UserProfile />


            {/* HEADER */}

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

                    🔍 Find Jobs & Internships

                </h1>


                <p>

                    Discover opportunities posted by employers.

                </p>


            </div>


            {/* SEARCH */}

            <div className="search-container">


                <input

                    type="text"

                    placeholder="Search by job title, company, skills, category or location..."

                    value={search}

                    onChange={(e) =>

                        setSearch(e.target.value)

                    }

                />


            </div>


            {/* JOB COUNT */}

            <div className="job-count">


                <p>

                    {filteredJobs.length}{" "}

                    opportunities found

                </p>


            </div>


            {/* JOBS */}

            <div className="jobs-container">


                {filteredJobs.length === 0 ? (


                    <div className="empty-jobs">


                        <h2>

                            No Jobs Found 🔍

                        </h2>


                        <p>

                            There are currently no active opportunities matching your search.

                        </p>


                    </div>


                ) : (


                    filteredJobs.map((job) => (


                        <div

                            className="job-card"

                            key={job.id}

                        >


                            {/* JOB HEADER */}

                            <div className="job-header">


                                <div>


                                    <h2>

                                        {job.title}

                                    </h2>


                                    <h3>

                                        🏢 {job.company}

                                    </h3>

                                </div>


                                <button

                                    className="save-btn"

                                    onClick={() =>

                                        toggleSaveJob(job.id)

                                    }

                                >

                                    {savedJobs.includes(job.id)

                                        ? "❤️"

                                        : "🤍"}

                                </button>


                            </div>


                            {/* JOB DETAILS */}

                            <p>

                                📍 {job.location}

                            </p>


                            <p>

                                💼 {job.type}

                            </p>


                            <p>

                                🏷️ {job.category}

                            </p>


                            <p>

                                🛠️ {job.skills}

                            </p>


                            {job.salary && (

                                <p>

                                    💰 {job.salary}

                                </p>

                            )}


                            {job.deadline && (

                                <p>

                                    ⏰ Apply before:{" "}

                                    {job.deadline}

                                </p>

                            )}


                            <p className="job-description">

                                {job.description}

                            </p>


                            {/* APPLY */}

                            <button

                                className="apply-btn"

                                onClick={() =>

                                    applyForJob(job)

                                }

                            >

                                Apply Now

                            </button>


                        </div>

                    ))

                )}


            </div>


        </div>

    );

}


export default Jobs;