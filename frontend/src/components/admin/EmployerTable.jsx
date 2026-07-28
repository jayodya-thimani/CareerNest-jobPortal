import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../../Styles/admin/Table.css";

function EmployerTable() {
    const navigate = useNavigate();

    const [employers, setEmployers] = useState([]);

    useEffect(() => {
        loadEmployers();
    }, []);

    const loadEmployers = async () => {

        try {

            const response = await axios.get(
                "http://localhost:5000/api/admin/employers"
            );

            setEmployers(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const deleteEmployer = async (id) => {

        try {

            await axios.delete(
                `http://localhost:5000/api/admin/employers/${id}`
            );

            loadEmployers();

        } catch (error) {

            console.log(error);

        }

    };
    const approveEmployer = async (id) => {

    try {

        await axios.put(

            `http://localhost:5000/api/admin/employers/approve/${id}`

        );

        loadEmployers();

    } catch (error) {

        console.log(error);

    }

};

const disableEmployer = async (id) => {

    try {

        await axios.put(

            `http://localhost:5000/api/admin/employers/disable/${id}`

        );

        loadEmployers();

    } catch (error) {

        console.log(error);

    }

};

    return (

        <div className="table-container">

            <h2>Employers</h2>

            <table>

                <thead>

                    <tr>

                        <th>Name</th>

                        <th>Email</th>

                        <th>Company</th>
                        <th>Status</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {employers.map((employer) => (

                        <tr key={employer._id}>

                            <td>{employer.name}</td>

                            <td>{employer.email}</td>

                            <td>{employer.company || "Not Added"}</td>
                            <td>{employer.status}</td>
                            <td>
                                <button
                                   className="approve-btn"
                                   onClick={() => approveEmployer(employer._id)}
                                >

                                Approve

                                </button>

                                <button
                                   className="disable-btn"
                                   onClick={() => disableEmployer(employer._id)}
                            >

                                Disable

                                </button>
                                <button className="edit-btn"
                                onClick={() => navigate(`/admin/employers/edit/${employer._id}`)}
>
                                    Edit
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() =>
                                        deleteEmployer(employer._id)
                                    }
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

export default EmployerTable;