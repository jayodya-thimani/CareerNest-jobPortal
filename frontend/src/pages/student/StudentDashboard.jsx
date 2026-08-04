import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import StudentNavbar from "../../components/student/StudentNavbar";
import StudentSidebar from "../../components/student/StudentSidebar";
import StudentJobcard from "../../components/student/StudentJobcard";

import { jobs } from "../common/Jobs";

import "../../styles/student/StudentDashboard.css";


function StudentDashboard() {


const navigate = useNavigate();



const [sidebarOpen,setSidebarOpen] = useState(true);



const [userName,setUserName] = useState(

localStorage.getItem("userName") || "Student"

);



const [profilePhoto,setProfilePhoto] = useState(

localStorage.getItem("profilePhoto") || ""

);



const [skills,setSkills] = useState(

JSON.parse(
localStorage.getItem("skills")
) || []

);





const toggleSidebar = ()=>{

setSidebarOpen(!sidebarOpen);

};





// =============================
// GET USER PROFILE
// =============================


useEffect(()=>{


const id = localStorage.getItem("userId");



if(!id){

console.log("User ID not found");

return;

}



axios.get(
`/api/students/${id}`
)

.then((response)=>{


console.log(
"Profile:",
response.data
);



const user = response.data;



setUserName(
user.name || "Student"
);



setProfilePhoto(
user.profilePhoto || ""
);



setSkills(
user.skills || []
);




// update local storage


localStorage.setItem(
"userName",
user.name || "Student"
);



localStorage.setItem(
"profilePhoto",
user.profilePhoto || ""
);



localStorage.setItem(
"skills",
JSON.stringify(user.skills || [])
);



})

.catch((error)=>{


console.log(

error.response?.data ||

error.message

);


});


},[]);








// =============================
// JOB MATCHING
// =============================


const userSkills = skills.map(skill=>

skill.toLowerCase().trim()

);





const recommendedJobs = jobs.filter(job=>


job.skills?.some(jobSkill=>


userSkills.some(userSkill=>


jobSkill.toLowerCase().includes(userSkill)

||

userSkill.includes(
jobSkill.toLowerCase()
)


)


)


);





const displayJobs =

recommendedJobs.length > 0

?

recommendedJobs

:

jobs.slice(0,3);







// =============================
// APPLICATION COUNT
// =============================


const applications =

JSON.parse(

localStorage.getItem("applications")

)

|| [];



const submittedCount =
applications.length;



const approvedCount =

applications.filter(app=>

app.status==="Approved"

||

app.status==="Selected"

).length;



const rejectedCount =

applications.filter(app=>

app.status==="Rejected"

).length;







return(


<div className="student-dashboard">





<StudentNavbar

toggleSidebar={toggleSidebar}

userName={userName}

profilePhoto={profilePhoto}

/>







<StudentSidebar

isOpen={sidebarOpen}

/>








<main

className={

`student-dashboard-main ${
sidebarOpen

?

"student-main-with-sidebar"

:

"student-main-full"

}`

}

>





<section className="dashboard-content">





<div className="welcome-banner">



<div className="welcome-text">



<p>
Welcome back,
</p>



<h1>

{userName} 👋

</h1>



<span>

Discover internships and career opportunities

<br/>

that match your skills.

</span>






<div className="welcome-buttons">



<button

className="primary-button"

onClick={()=>navigate("/jobs")}

>

Find Jobs

</button>







<button

className="secondary-button"

onClick={()=>navigate("/student/career-resources")}

>

Career Resources

</button>



</div>



</div>







<div className="welcome-image">


{

profilePhoto ?


<img

src={profilePhoto}

alt="profile"

className="welcome-profile-photo"

/>


:


<div className="welcome-profile-placeholder">

{

userName.charAt(0).toUpperCase()

}

</div>


}



</div>



</div>









<section className="dashboard-section">



<div className="section-header">



<h2>
Recommended For You
</h2>




<button

className="see-all-button"

onClick={()=>navigate("/jobs")}

>

See All

</button>


</div>








<div className="jobs-list">


{

displayJobs.map(job=>(


<StudentJobcard

key={job.id}

id={job.id}

title={job.title}

company={job.company}

location={job.location}

type={job.type}

time={job.time}

skills={job.skills}

/>


))


}



</div>



</section>









<section className="dashboard-section">



<div className="section-header">



<h2>
Application Overview
</h2>




<button

className="see-all-button"

onClick={()=>navigate("/student/applications")}

>

View Applications

</button>


</div>








<div className="application-overview">





<div className="application-box submitted">


<h3>
{submittedCount}
</h3>


<p>
Applications Submitted
</p>


</div>








<div className="application-box approved">


<h3>
{approvedCount}
</h3>


<p>
Approved
</p>


</div>








<div className="application-box rejected">


<h3>
{rejectedCount}
</h3>


<p>
Rejected
</p>


</div>





</div>



</section>






</section>









<aside className="dashboard-right">






<div className="dashboard-widget">


<h2>
Your Skills
</h2>





<div className="skills-list">


{

skills.length > 0 ?


skills.map((skill,index)=>(


<span key={index}>

{skill}

</span>


))


:


<p>
No skills added
</p>


}



</div>






<button

className="widget-button"

onClick={()=>navigate("/student/profile")}

>

Update Skills

</button>



</div>









<div className="dashboard-widget">


<h2>
Upcoming Deadlines
</h2>





<div className="deadline-item">


<strong>
Software Engineer Intern
</strong>


<span>
ABC Technologies
</span>


<b>
📅 30 Jul 2026
</b>


</div>






<div className="deadline-item">


<strong>
Data Analyst
</strong>


<span>
Insight Analytics
</span>


<b>
📅 05 Aug 2026
</b>


</div>





</div>






</aside>








</main>



</div>


);


}



export default StudentDashboard;