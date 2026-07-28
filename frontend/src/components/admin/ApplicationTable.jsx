import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../Styles/admin/Table.css";

function ApplicationTable() {

    const [applications, setApplications] = useState([]);
     const navigate = useNavigate();
    useEffect(() => {
        loadApplications();
    }, []);

    const loadApplications = async () => {

        try {

            const response = await axios.get(
                "http://localhost:5000/api/admin/applications"
            );

            setApplications(response.data);

        } catch (error) {

            console.log(error);

        }

    };
    const acceptApplication = async (id) => {

    try {

        await axios.put(

            `http://localhost:5000/api/admin/applications/accept/${id}`

        );

        loadApplications();

    } catch (error) {

        console.log(error);

    }

};

const rejectApplication = async (id) => {

    try {

        await axios.put(

            `http://localhost:5000/api/admin/applications/reject/${id}`

        );

        loadApplications();

    } catch (error) {

        console.log(error);

    }

};

    return (

        <div className="table-container">

            <h2>Applications</h2>

            <table>

                <thead>

                    <tr>

                        <th>Student</th>
                       
                        <th>Job</th>
                        <th>Type</th>
                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    {applications.map((application) => (

                        <tr key={application._id}>

                            <td>{application.student?.name}</td>

                            

                            <td>{application.job?.title}</td>

                            <td>{application.job?.type}</td>

                            <td>{application.status}</td>
                            <td>

<button
className="approve-btn"
onClick={() => acceptApplication(application._id)}
>

Accept

</button>

<button
className="disable-btn"
onClick={() => rejectApplication(application._id)}
>

Reject

</button>

<button
className="edit-btn"
onClick={() => navigate(`/admin/applications/edit/${application._id}`)}
>

Edit

</button>

<button
className="delete-btn"
onClick={() => deleteApplication(application._id)}
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

export default ApplicationTable;