import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function AdminDashboard(){

const { user } = useContext(AuthContext);

return(

<div>

<h1>Admin Dashboard</h1>

<h2>Welcome {user.name}</h2>


<button>

        Manage Users

</button>

</div>


);

}

export default AdminDashboard;