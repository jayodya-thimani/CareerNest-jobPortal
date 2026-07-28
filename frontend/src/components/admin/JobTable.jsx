import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../../Styles/admin/Table.css";

function JobTable() {
    const navigate = useNavigate();

    const [jobs, setJobs] = useState([]);

    useEffect(() => {

        loadJobs();

    }, []);

    const loadJobs = async () => {

        try {

            const response = await axios.get(
                "http://localhost:5000/api/admin/jobs"
            );

            setJobs(response.data);

        } catch (error) {

            console.log(error);

        }

    };
    const deleteJob = async (id) => {

    try {

        await axios.delete(
            `http://localhost:5000/api/admin/jobs/${id}`
        );

        loadJobs();

    } catch (error) {

        console.log(error);

    }

};

    return (

        <div className="table-container">

            <h2>Jobs & Internships</h2>

            <table>

                <thead>

                    <tr>

                        <th>Title</th>

                        <th>Company</th>

                        <th>Type</th>

                        <th>Status</th>
                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {jobs.map((job) => (

                        <tr key={job._id}>

                            <td>{job.title}</td>

                            <td>{job.company}</td>

                            <td>{job.type}</td>

                            <td>{job.status}</td>
                            <td>

                            <button
                               className="edit-btn"
                                onClick={() => navigate(`/admin/jobs/edit/${job._id}`)}
                            >
                                Edit
                            </button>

                            <button
                                className="delete-btn"
                                onClick={() => deleteJob(job._id)}
                            >
                                Delete
                            </button>

                           </td>
                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default JobTable;