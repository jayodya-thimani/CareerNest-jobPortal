import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function EmployerDashboard(){

const { user } = useContext(AuthContext);

return(

<div>

<h1>Employer Dashboard</h1>

<h2>Welcome {user.name}</h2>
<button>
                Post New Job
 </button>
</div>

);

}

export default EmployerDashboard;