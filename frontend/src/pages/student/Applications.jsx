import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import axios from "axios";
import "../../styles/student/StudentPages.css";


function Applications() {


const navigate = useNavigate();



const selectedJob =
JSON.parse(
localStorage.getItem("selectedJob")
);




const userName =
localStorage.getItem("userName") || "";


const userEmail =
localStorage.getItem("userEmail") || "";




const [formData,setFormData] = useState({

name:userName,

email:userEmail,

phone:"",

university:"",

degree:"",

academicYear:"",

skills:"",

coverLetter:"",

cv:null,

coverLetterFile:null

});





const [submittedApplication,setSubmittedApplication] =
useState(null);






const handleChange=(e)=>{


setFormData({

...formData,

[e.target.name]:e.target.value

});


};







// File to Base64

const convertFileToBase64=(file)=>{


return new Promise((resolve)=>{


const reader=new FileReader();


reader.onload=()=>{

resolve(reader.result);

};


reader.readAsDataURL(file);


});


};







const handleFileChange=async(e)=>{


const file=e.target.files[0];


if(!file) return;



if(e.target.name==="cv"){


if(file.type !== "application/pdf"){

alert(
"CV must be PDF format"
);

return;

}


}



if(e.target.name==="coverLetterFile"){


const allowedTypes=[

"application/pdf",

"application/msword",

"application/vnd.openxmlformats-officedocument.wordprocessingml.document"

];


if(!allowedTypes.includes(file.type)){


alert(
"Cover letter must be PDF or Word file"
);

return;


}


}




const base64 = await convertFileToBase64(file);



setFormData({

...formData,

[e.target.name]:{

name:file.name,

data:base64

}

});


};









const submitApplication=async(e)=>{


e.preventDefault();



if(!selectedJob){


alert(
"No job selected"
);


return;


}





const applications =

JSON.parse(

localStorage.getItem("applications")

)

|| [];





const alreadyApplied = applications.some(

app=>

app.jobId === selectedJob.id ||

app.jobId === selectedJob._id

);




if(alreadyApplied){


alert(
"You already applied for this job"
);


return;


}





const studentId =
localStorage.getItem("userId") ||
localStorage.getItem("studentId");


if(!studentId){

alert("User ID not found. Please login again.");

return;

}


const payload={

studentId,

jobId:selectedJob._id || selectedJob.id,

jobTitle:selectedJob.title,

company:selectedJob.company,

location:selectedJob.location,

...formData,

skills:formData.skills || "",

coverLetter:formData.coverLetter || "",

cv:formData.cv?.data || "",

coverLetterFile:formData.coverLetterFile?.data || "",

status:"Pending",

appliedDate:new Date().toLocaleDateString()

};


const newApplication={


id:Date.now(),

jobId:selectedJob.id,

jobTitle:selectedJob.title,

company:selectedJob.company,

location:selectedJob.location,


...formData,


status:"Pending",


appliedDate:

new Date().toLocaleDateString()


};





const updated=[

...applications,

newApplication

];





localStorage.setItem(

"applications",

JSON.stringify(updated)

);





setSubmittedApplication(newApplication);



alert(
"Application submitted successfully!"
);



};








const downloadPDF=()=>{


const pdf=new jsPDF();



pdf.setFontSize(18);


pdf.text(

"CareerNest Job Application",

20,

20

);



pdf.setFontSize(12);



let y=40;



const details=[


`Name: ${formData.name}`,

`Email: ${formData.email}`,

`Phone: ${formData.phone}`,

`University: ${formData.university}`,

`Degree: ${formData.degree}`,

`Academic Year: ${formData.academicYear}`,

`Job: ${selectedJob.title}`,

`Company: ${selectedJob.company}`,

`Status: Pending`

];




details.forEach(detail=>{


pdf.text(

detail,

20,

y

);


y+=10;


});





pdf.text(

"Cover Letter:",

20,

y+10

);



pdf.text(

formData.coverLetter || "No cover letter",

20,

y+25,

{

maxWidth:160

}

);



pdf.save(

"CareerNest_Application.pdf"

);



};









if(!selectedJob){


return(

<div className="student-page">


<h2>
No Job Selected
</h2>


<button

className="setting-btn"

onClick={()=>navigate("/jobs")}

>

Find Jobs

</button>


</div>

);


}









return(


<div className="student-page">



<div className="page-header">


<h1>
Job Application
</h1>


<p>
Apply for {selectedJob.title}
</p>


</div>







<div className="settings-card">


<h2>
Job Details
</h2>


<p>
Company: {selectedJob.company}
</p>


<p>
Location: {selectedJob.location}
</p>


<p>
Type: {selectedJob.type}
</p>


<p>
Skills:
{selectedJob.skills.join(", ")}
</p>


</div>









<form

className="settings-card"

onSubmit={submitApplication}

>


<h2>
Applicant Details
</h2>





<input

className="application-input"

name="name"

value={formData.name}

onChange={handleChange}

placeholder="Full Name"

required

/>





<input

className="application-input"

name="email"

value={formData.email}

onChange={handleChange}

placeholder="Email"

required

/>





<input

className="application-input"

name="phone"

onChange={handleChange}

placeholder="Contact Number"

required

/>






<input

className="application-input"

name="university"

onChange={handleChange}

placeholder="University"

required

/>





<input

className="application-input"

name="degree"

onChange={handleChange}

placeholder="Degree"

required

/>






<input

className="application-input"

name="academicYear"

onChange={handleChange}

placeholder="Academic Year"

required

/>






<input

className="application-input"

name="skills"

onChange={handleChange}

placeholder="Skills"

/>









<label className="file-label">

Upload CV (PDF)

</label>


<input

type="file"

name="cv"

accept=".pdf"

onChange={handleFileChange}

/>



{

formData.cv &&

<p className="file-name">

CV: {formData.cv.name}

</p>

}









<label className="file-label">

Upload Cover Letter File

</label>


<input

type="file"

name="coverLetterFile"

accept=".pdf,.doc,.docx"

onChange={handleFileChange}

/>



{

formData.coverLetterFile &&

<p className="file-name">

Cover Letter File:
{formData.coverLetterFile.name}

</p>

}





<button

className="save-settings"

type="submit"

>

Submit Application

</button>





</form>








{

submittedApplication &&

<div className="settings-card success-box">


<h2>
Application Submitted ✅
</h2>


<button

className="setting-btn"

onClick={downloadPDF}

>

Download Application PDF

</button>



</div>

}



</div>


);


}


export default Applications;