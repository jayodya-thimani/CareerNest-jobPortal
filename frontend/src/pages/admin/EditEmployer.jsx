import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import "../../Styles/admin/EditEmployer.css";

function EditEmployer() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [employer, setEmployer] = useState({

        name: "",

        email: "",

        company: ""

    });

    useEffect(() => {

        loadEmployer();

    }, []);

    const loadEmployer = async () => {

        try {

            const response = await axios.get(

                `http://localhost:5000/api/admin/employers/${id}`

            );

            setEmployer(response.data);

        }

        catch (error) {

            console.log(error);

        }

    };

    const handleChange = (e) => {

        setEmployer({

            ...employer,

            [e.target.name]: e.target.value

        });

    };

    const updateEmployer = async (e) => {

        e.preventDefault();

        try {

            await axios.put(

                `http://localhost:5000/api/admin/employers/${id}`,

                employer

            );

            alert("Employer Updated Successfully");

            navigate("/admin/employers");

        }

        catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="edit-page">

            <h2>Edit Employer</h2>

            <form onSubmit={updateEmployer}>

                <input

                    type="text"

                    name="name"

                    value={employer.name}

                    onChange={handleChange}

                    placeholder="Employer Name"

                />

                <input

                    type="email"

                    name="email"

                    value={employer.email}

                    onChange={handleChange}

                    placeholder="Email"

                />

                <input

                    type="text"

                    name="company"

                    value={employer.company}

                    onChange={handleChange}

                    placeholder="Company"

                />

                <button type="submit">

                    Update Employer

                </button>

            </form>

        </div>

    );

}

export default EditEmployer;