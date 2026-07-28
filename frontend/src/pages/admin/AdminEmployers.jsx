import EmployerTable from "../../components/admin/EmployerTable";
import "../../Styles/admin/Employers.css";
import employerimage from "../../assets/admin/employer-image.jpg";
function AdminEmployers() {

    return (

        <div className="employers-page"
          
                      style={{
                          backgroundImage: `url(${employerimage})`,
                      }}
                  >

            <div className="employer-header">

                <h1>Employers Management</h1>

                <button>Add Employer</button>

            </div>

            

            <EmployerTable />

        </div>

    );

}

export default AdminEmployers;