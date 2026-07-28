import StudentTable from "../../components/admin/StudentTable";
import "../../Styles/admin/Students.css";
import studentBg from "../../assets/admin/student-image.jpg";
function AdminStudents() {

    return (

        <div className="students-page"
           style={{
          backgroundImage: `url(${studentBg})`,
        }}
        >

            <div className="students-header"
        >

                <h1>Students Management</h1>

                <button>Add Student</button>

            </div>

            
            <StudentTable />

        </div>

    );

}

export default AdminStudents;