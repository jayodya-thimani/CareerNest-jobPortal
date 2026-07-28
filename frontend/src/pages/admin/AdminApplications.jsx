import ApplicationTable from "../../components/admin/ApplicationTable";
import "../../Styles/admin/Applications.css";
import images from "../../assets/admin/images.jpg";
function AdminApplications() {

    return (

        <div
            className="applications-page"
            style={{
                backgroundImage: `url(${images})`,
            }}
        >

            <div className="image-banner">

                <h1>Applications Management</h1>

            </div>

            
            <ApplicationTable />

        </div>

    );

}

export default AdminApplications;