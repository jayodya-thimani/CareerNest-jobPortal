import JobTable from "../../components/admin/JobTable";
import "../../Styles/admin/Jobs.css";
import image from "../../assets/admin/images.jpg";
function AdminJobs() {

    return (

        <div className="jobs-page"
           style={{
          backgroundImage: `url(${image})`,
        }}
        >

            <div className="jobs-header">

                <h1>Jobs Management</h1>

                <button className="add-btn">
                    + Add Job
                </button>

            </div>

           

            <JobTable />

        </div>

    );

}

export default AdminJobs;