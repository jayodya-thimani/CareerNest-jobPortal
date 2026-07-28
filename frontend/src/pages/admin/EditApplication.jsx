import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import "../../Styles/admin/EditApplication.css";

function EditApplication() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [application, setApplication] = useState({
        student: {},
        job: {},
        status: "Pending",
    });

    useEffect(() => {

        loadApplication();

    }, []);

    const loadApplication = async () => {

        try {

            const response = await axios.get(
                `http://localhost:5000/api/admin/applications/${id}`
            );

            setApplication(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleChange = (e) => {

        setApplication({

            ...application,

            status: e.target.value,

        });

    };

    const updateApplication = async (e) => {

        e.preventDefault();

        try {

            await axios.put(

                `http://localhost:5000/api/admin/applications/${id}`,

                {
                    status: application.status,
                }

            );

            alert("Application Updated Successfully");

            navigate("/admin/applications");

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="edit-application-page">

            <h2>Edit Application</h2>

            <form onSubmit={updateApplication}>

                <label>Student</label>

                <input
                    type="text"
                    value={application.student?.name || ""}
                    readOnly
                />

                <label>Job</label>

                <input
                    type="text"
                    value={application.job?.title || ""}
                    readOnly
                />

                <label>Status</label>

                <select
                    name="status"
                    value={application.status}
                    onChange={handleChange}
                >

                    <option value="Pending">Pending</option>

                    <option value="Accepted">Accepted</option>

                    <option value="Rejected">Rejected</option>

                </select>

                <button type="submit">

                    Update Application

                </button>

            </form>

        </div>

    );

}

export default EditApplication;