import React, {useState} from "react";

import {
 MapPin,
 Bookmark
} from "lucide-react";


import "../../styles/student/StudentJobcard.css";



function StudentJobcard({

logo,
title,
company,
location,
type,
time,
id,
skills

}) {



const [saved,setSaved] =
useState(false);





const saveJob=()=>{


const job={

id,
logo,
title,
company,
location,
type,
time,
skills

};



const savedJobs =
JSON.parse(
localStorage.getItem("savedJobs")
) || [];



const exists =
savedJobs.some(
item=>item.id===id
);



if(!exists){


savedJobs.push(job);


localStorage.setItem(
"savedJobs",
JSON.stringify(savedJobs)
);



setSaved(true);


}



};






return(


<div className="job-card">



<div className="company-logo">

{logo}

</div>





<div className="job-info">


<h3>
{title}
</h3>


<p>
{company}
</p>


</div>





<div className="job-location">

<MapPin size={16}/>

{location}

</div>






<span 
className={
`job-type ${
type==="Internship"
?
"internship"
:
"fulltime"
}`
}
>

{type}

</span>






<span className="job-time">

{time}

</span>






<Bookmark

size={22}

className={
saved
?
"save-job saved"
:
"save-job"
}

onClick={saveJob}

/>





</div>


);


}


export default StudentJobcard;