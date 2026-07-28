import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../Styles/admin/Table.css";

function StudentTable() {

  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {

      const response = await axios.get(
        "http://localhost:5000/api/admin/students"
      );

      setStudents(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  const deleteStudent = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/admin/students/${id}`
      );

      // Reload table after deleting
      loadStudents();

    } catch (error) {
      console.log(error);
    }

  };
  const approveStudent = async (id) => {

    try {

        await axios.put(
            `http://localhost:5000/api/admin/students/approve/${id}`
        );

        fetchStudents();

    } catch (error) {

        console.log(error);

    }

};


const disableStudent = async (id) => {

    try {

        await axios.put(
            `http://localhost:5000/api/admin/students/disable/${id}`
        );

        loadStudents();

    } catch (error) {

        console.log(error);

    }

};

  return (

    <div className="table-container">

      <h2>Students</h2>

      <table>

        <thead>

          <tr>

            <th>Name</th>

            <th>Email</th>

            <th>Status</th>
            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {students.map((student) => (

            <tr key={student._id}>

              <td>{student.name}</td>

              <td>{student.email}</td>
              <td>

                <span className={`status ${student.status.toLowerCase()}`}>

                    {student.status}

                 </span>

              </td>
             
              <td>

                <button className="edit-btn"
                  onClick={() =>
                  navigate(`/admin/students/edit/${student._id}`)
                 }

                 >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteStudent(student._id)}
                >
                  Delete
                </button>
                 <button
        className="approve-btn"
        onClick={() => approveStudent(student._id)}
    >
        Approve
    </button>

    <button
        className="disable-btn"
        onClick={() => disableStudent(student._id)}
    >
        Disable
    </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default StudentTable;