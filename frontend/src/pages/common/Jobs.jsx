import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

import "../../styles/common/Jobs.css";


// =============================
// JOB DATA EXPORT
// =============================

export const jobs = [

{
id:1,
title:"Software Engineer Intern",
company:"ABC Technologies",
location:"Colombo",
type:"Internship",
skills:[
"React",
"JavaScript",
"Node.js"
],
deadline:"30 Jul 2026"
},


{
id:2,
title:"Data Analyst",
company:"Insight Analytics",
location:"Kandy",
type:"Full Time",
skills:[
"Python",
"SQL",
"Power BI"
],
deadline:"05 Aug 2026"
},


{
id:3,
title:"Frontend Developer",
company:"Tech Lanka",
location:"Remote",
type:"Part Time",
skills:[
"React",
"CSS",
"HTML"
],
deadline:"10 Aug 2026"
},


{
id:4,
title:"Business Intelligence Intern",
company:"XYZ Solutions Pvt Ltd",
location:"Colombo",
type:"Internship",
skills:[
"Excel",
"SQL",
"Power BI"
],
deadline:"08 Aug 2026"
},


{
id:5,
title:"Software Engineer",
company:"Tech Solutions Pvt Ltd",
location:"Colombo",
type:"Full-Time",
skills:[
"React",
"Node.js",
"MySQL"
],
deadline:"12 Aug 2026"
},


{
id:6,
title:"Marketing Executive",
company:"Vision Marketing",
location:"Negombo",
type:"Full-Time",
skills:[
"Marketing",
"Social Media"
],
deadline:"15 Aug 2026"
},


{
id:7,
title:"HR Officer",
company:"People First Ltd",
location:"Kurunegala",
type:"Full-Time",
skills:[
"Recruitment",
"HR Management"
],
deadline:"20 Aug 2026"
},


{
id:8,
title:"Network Engineer",
company:"NetSecure Technologies",
location:"Colombo",
type:"Full-Time",
skills:[
"Networking",
"Security"
],
deadline:"22 Aug 2026"
},


{
id:9,
title:"Graphic Designer",
company:"Pixel Media",
location:"Matara",
type:"Full-Time",
skills:[
"Design",
"Photoshop"
],
deadline:"25 Aug 2026"
},


{
id:10,
title:"Project Manager",
company:"Global Innovations",
location:"Colombo",
type:"Full-Time",
skills:[
"Project Management",
"Agile"
],
deadline:"30 Aug 2026"
},


{
id:11,
title:"Customer Support Executive",
company:"Care Connect",
location:"Remote",
type:"Full-Time",
skills:[
"Communication",
"Customer Support"
],
deadline:"01 Sep 2026"
},


{
id:12,
title:"Accountant",
company:"Finance Hub",
location:"Galle",
type:"Full-Time",
skills:[
"Finance",
"Accounting"
],
deadline:"05 Sep 2026"
}


];




// =============================
// JOB PAGE
// =============================


function Jobs() {


const [search,setSearch] =
useState("");


const navigate = useNavigate();




const filteredJobs = jobs.filter(job =>

job.title
.toLowerCase()
.includes(search.toLowerCase())

||

job.company
.toLowerCase()
.includes(search.toLowerCase())

);





const handleApply = (job)=>{


const isLoggedIn =
localStorage.getItem("isLoggedIn");


const role =
localStorage.getItem("userRole");



if(!isLoggedIn){

navigate("/login");

return;

}



if(role !== "student"){

alert(
"Only students can apply for jobs."
);

return;

}



localStorage.setItem(
"selectedJob",
JSON.stringify(job)
);



navigate("/student/applications");


};






return (

<>


<Navbar />



<div className="jobs-container">



<div className="jobs-banner">

<div className="banner-text">

<h1>
Available Jobs
</h1>

<p>
Find your next career opportunity
</p>


</div>

</div>






<input

className="search-box"

type="text"

placeholder="Search jobs or companies..."

value={search}

onChange={(e)=>
setSearch(e.target.value)
}

/>







<div className="job-list">


{

filteredJobs.map(job=>(


<div

className="job-card"

key={job.id}

>


<h2>
{job.title}
</h2>


<h3>
{job.company}
</h3>


<p>
📍 {job.location}
</p>


<p>
💼 {job.type}
</p>


<p>
🛠 Skills: {job.skills.join(", ")}
</p>


<p>
📅 Deadline: {job.deadline}
</p>




<button

className="apply-btn"

onClick={()=>
handleApply(job)
}

>

Apply Now

</button>



</div>



))


}



</div>



</div>



<Footer />

</>


);


}



export default Jobs;