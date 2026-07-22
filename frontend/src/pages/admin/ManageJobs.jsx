import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import UserProfile from "../../components/UserProfile";

import "./PostJob.css";


function PostJobs() {

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();


    const [formData, setFormData] = useState({

        title: "",

        description: "",

        location: "",

        type: "Internship",

        category: "",

        skills: "",

        salary: "",

        deadline: ""

    });


    const handleChange = (e) => {


        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };


    const handleSubmit = (e) => {

        e.preventDefault();


        if (

            !formData.title ||

            !formData.description ||

            !formData.location ||

            !formData.category ||

            !formData.skills

        ) {

            alert(

                "Please fill in all required fields."

            );

            return;

        }


        const existingJobs = JSON.parse(

            localStorage.getItem("jobs")

        ) || [];


        const newJob = {


            id: Date.now(),


            ...formData,


            company:

                user.company ||

                user.name,


            employerEmail: user.email,


            status: "Active",


            date:

                new Date()

                    .toISOString()

                    .split("T")[0]

        };


        const updatedJobs = [

            ...existingJobs,

            newJob

        ];


        localStorage.setItem(

            "jobs",

            JSON.stringify(updatedJobs)

        );


        alert(

            "Job posted successfully!"

        );


        navigate("/manage-jobs");

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

                    ➕ Post a New Job

                </h1>


                <p>

                    Find talented students for your organization.

                </p>

            </div>


            <form

                className="post-job-form"

                onSubmit={handleSubmit}

            >


                <label>

                    Job Title *

                </label>


                <input

                    type="text"

                    name="title"

                    placeholder="Example: Software Engineering Intern"

                    value={formData.title}

                    onChange={handleChange}

                />


                <label>

                    Job Description *

                </label>


                <textarea

                    name="description"

                    placeholder="Describe the job responsibilities and requirements..."

                    value={formData.description}

                    onChange={handleChange}

                />


                <label>

                    Location *

                </label>


                <input

                    type="text"

                    name="location"

                    placeholder="Example: Colombo / Remote"

                    value={formData.location}

                    onChange={handleChange}

                />


                <label>

                    Job Type *

                </label>


                <select

                    name="type"

                    value={formData.type}

                    onChange={handleChange}

                >

                    <option value="Internship">

                        Internship

                    </option>


                    <option value="Full Time">

                        Full Time

                    </option>


                    <option value="Part Time">

                        Part Time

                    </option>


                    <option value="Contract">

                        Contract

                    </option>

                </select>


                <label>

                    Category *

                </label>


                <input

                    type="text"

                    name="category"

                    placeholder="Example: IT, Finance, Marketing"

                    value={formData.category}

                    onChange={handleChange}

                />


                <label>

                    Required Skills *

                </label>


                <input

                    type="text"

                    name="skills"

                    placeholder="Example: React, SQL, Power BI"

                    value={formData.skills}

                    onChange={handleChange}

                />


                <label>

                    Salary / Allowance

                </label>


                <input

                    type="text"

                    name="salary"

                    placeholder="Example: Rs. 30,000 per month"

                    value={formData.salary}

                    onChange={handleChange}

                />


                <label>

                    Application Deadline

                </label>


                <input

                    type="date"

                    name="deadline"

                    value={formData.deadline}

                    onChange={handleChange}

                />


                <button

                    type="submit"

                    className="submit-job-button"

                >

                    🚀 Publish Job

                </button>


            </form>


        </div>

    );

}


export default PostJobs;