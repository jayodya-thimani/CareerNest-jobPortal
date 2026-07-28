import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../../Styles/admin/EditStudent.css";

function EditStudent() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [student, setStudent] = useState({

        name: "",

        email: "",

        university: ""

    });

    useEffect(() => {

        loadStudent();

    }, []);

    const loadStudent = async () => {

        try {

            const response = await axios.get(

                `http://localhost:5000/api/admin/students/${id}`

            );

            setStudent(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleChange = (e) => {

        setStudent({

            ...student,

            [e.target.name]: e.target.value

        });

    };

    const updateStudent = async (e) => {

        e.preventDefault();

        try {

            await axios.put(

                `http://localhost:5000/api/admin/students/${id}`,

                student

            );

            alert("Student Updated Successfully");

            navigate("/admin/students");

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="edit-page">

            <h2>Edit Student</h2>

            <form onSubmit={updateStudent}>

                <input

                    type="text"

                    name="name"

                    value={student.name}

                    onChange={handleChange}

                    placeholder="Name"

                />

                <input

                    type="email"

                    name="email"

                    value={student.email}

                    onChange={handleChange}

                    placeholder="Email"

                />


                <button type="submit">

                    Update Student

                </button>

            </form>

        </div>

    );

}

export default EditStudent;