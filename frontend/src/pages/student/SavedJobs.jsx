import React, { useState } from "react";

import {
  Bookmark,
  MapPin,
  Trash2
} from "lucide-react";

import "../../styles/student/StudentPages.css";


function SavedJobs(){


const [savedJobs,setSavedJobs] = useState(

JSON.parse(
localStorage.getItem("savedJobs")
) || []

);





const removeJob = (id)=>{


const updatedJobs = savedJobs.filter(
(job)=>job.id !== id
);



setSavedJobs(updatedJobs);



localStorage.setItem(
"savedJobs",
JSON.stringify(updatedJobs)
);


};







return(


<div className="student-page">



<div className="page-header">


<h1>
Saved Jobs
</h1>


<p>
Jobs and internships you saved for later.
</p>


</div>







{

savedJobs.length > 0 ?


savedJobs.map((job)=>(


<div

className="saved-job-card"

key={job.id}

>




<div className="saved-job-icon">

<Bookmark size={28}/>

</div>







<div className="saved-job-info">



<h2>
{job.title}
</h2>



<h3>
{job.company}
</h3>





<p>

<MapPin size={16}/>

{job.location}

</p>





<p>
💼 {job.type}
</p>





<p>

🛠 Skills:

{

Array.isArray(job.skills)

?

job.skills.join(", ")

:

job.skills

}

</p>





<p>

📅 Deadline:

{job.deadline}

</p>






</div>









<button

className="remove-button"

onClick={()=>
removeJob(job.id)
}

>


<Trash2 size={18}/>

Remove


</button>





</div>


))





:





<div className="saved-empty">


<Bookmark size={50}/>



<h2>
No saved jobs yet
</h2>



<p>
Click the bookmark icon on jobs to save them.
</p>



</div>




}



</div>


);


}


export default SavedJobs;