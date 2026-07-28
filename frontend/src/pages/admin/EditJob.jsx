import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import "../../Styles/admin/EditJob.css";

function EditJob() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [job, setJob] = useState({

        title: "",

        company: "",

        type: ""

    });

    useEffect(() => {

        loadJob();

    }, []);

    const loadJob = async () => {

        try {

            const response = await axios.get(

                `http://localhost:5000/api/admin/jobs/${id}`

            );

            setJob(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleChange = (e) => {

        setJob({

            ...job,

            [e.target.name]: e.target.value

        });

    };

    const updateJob = async (e) => {

        e.preventDefault();

        try {

            await axios.put(

                `http://localhost:5000/api/admin/jobs/${id}`,

                job

            );

            alert("Job Updated Successfully");

            navigate("/admin/jobs");

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="edit-job-page">

            <h2>Edit Job</h2>

            <form onSubmit={updateJob}>

                <input
                    type="text"
                    name="title"
                    placeholder="Job Title"
                    value={job.title}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={job.company}
                    onChange={handleChange}
                />

                <select
                    name="type"
                    value={job.type}
                    onChange={handleChange}
                >
                    <option value="">Select Type</option>
                    <option value="Job">Job</option>
                    <option value="Internship">Internship</option>
                </select>

                <button type="submit">
                    Update Job
                </button>

            </form>

        </div>

    );

}

export default EditJob;