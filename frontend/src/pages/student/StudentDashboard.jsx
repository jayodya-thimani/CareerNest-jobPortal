import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function StudentDashboard(){

const { user } = useContext(AuthContext);

return(

<div>

<h1>Student Dashboard</h1>

<h2>Welcome {user.name}</h2>

</div>

);

}

export default StudentDashboard;