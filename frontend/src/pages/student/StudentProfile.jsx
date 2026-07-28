import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Camera,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Edit,
  Save,
  Code
} from "lucide-react";

import "../../styles/student/StudentPages.css";


function StudentProfile() {


const [isEditing,setIsEditing] = useState(false);


// User ID = Student ID

const studentId =
localStorage.getItem("userId") || localStorage.getItem("studentId");



const [name,setName] = useState("");

const [email,setEmail] = useState("");

const [university,setUniversity] = useState("");

const [degree,setDegree] = useState("");

const [phone,setPhone] = useState("");

const [location,setLocation] = useState("");

const [profilePhoto,setProfilePhoto] = useState("");

const [skills,setSkills] = useState([]);

const [skillInput,setSkillInput] = useState("");




// =============================
// LOAD PROFILE
// =============================

const loadProfile = async()=>{


try{


const response = await axios.get(

`/api/students/${studentId}`

);


const student = response.data;


setName(student.name || "");

setEmail(student.email || "");

setUniversity(student.university || "");

setDegree(student.degree || "");

setPhone(student.phone || "");

setLocation(student.location || "");

setProfilePhoto(student.profileImage || student.profilePhoto || "");

setSkills(student.skills || []);



}

catch(error){


console.log(
error.response?.data || error.message
);


}



};





useEffect(()=>{


if(!studentId){

alert("User ID not found. Please login again.");

return;

}


loadProfile();


},[studentId]);









// =============================
// IMAGE UPLOAD
// =============================


const handlePhotoChange=(e)=>{


const file=e.target.files[0];


if(!file)
return;



// max 1MB

if(file.size > 1024 * 1024){

alert(
"Image size must be less than 1MB"
);

return;

}



const reader=new FileReader();



reader.onload=()=>{

setProfilePhoto(reader.result);

};



reader.readAsDataURL(file);


};










// =============================
// ADD SKILL
// =============================


const addSkill=()=>{


const newSkill=skillInput.trim();


if(

newSkill &&

!skills.includes(newSkill)

){


setSkills([

...skills,

newSkill

]);


setSkillInput("");

}


};







// =============================
// REMOVE SKILL
// =============================


const removeSkill=(skill)=>{


setSkills(

skills.filter(

(item)=>item !== skill

)

);


};








// =============================
// SAVE PROFILE
// =============================


const handleSave=async()=>{


if(!studentId){

alert(
"User ID missing"
);

return;

}



try{


const response = await axios.put(

`/api/students/${studentId}`,

{

name,

email,

university,

degree,

phone,

location,

profileImage: profilePhoto,

skills

}

);



console.log(response.data);



setIsEditing(false);



alert(
"Profile updated successfully!"
);



loadProfile();



}

catch(error){


console.log(
error.response?.data || error.message
);



alert(
error.response?.data?.message ||
"Profile update failed"
);


}



};









return(

<div className="student-page profile-full-page">


<div className="student-page-header">


<div>

<h1>
My Profile
</h1>


<p>
Manage your personal information,
academic details and career skills.
</p>


</div>



<button

className="edit-profile-button"

onClick={()=>


isEditing

?

handleSave()

:

setIsEditing(true)


}

>


{

isEditing

?

<Save size={20}/>

:

<Edit size={20}/>

}



{

isEditing

?

"Save Profile"

:

"Edit Profile"

}


</button>


</div>








<div className="profile-page-card">


<div className="profile-cover">
</div>





<div className="profile-main">


<div className="profile-photo-wrapper">



{

profilePhoto ?


<img

src={profilePhoto}

className="profile-photo"

alt="profile"

/>


:


<div className="profile-photo-placeholder">

{name.charAt(0).toUpperCase()}

</div>


}





{

isEditing &&


<label className="photo-upload-button">


<Camera size={22}/>


<input

type="file"

accept="image/*"

onChange={handlePhotoChange}

/>


</label>


}



</div>







<div className="profile-name">

<h2>

{name}

</h2>


<p>
University Student
</p>


</div>



</div>










<div className="profile-details">





<ProfileField

icon={<Mail/>}

title="Email"

value={email}

edit={isEditing}

setValue={setEmail}

/>





<ProfileField

icon={<Phone/>}

title="Phone"

value={phone}

edit={isEditing}

setValue={setPhone}

/>







<ProfileField

icon={<GraduationCap/>}

title="University"

value={university}

edit={isEditing}

setValue={setUniversity}

/>








<ProfileField

icon={<GraduationCap/>}

title="Degree"

value={degree}

edit={isEditing}

setValue={setDegree}

/>








<ProfileField

icon={<MapPin/>}

title="Location"

value={location}

edit={isEditing}

setValue={setLocation}

/>









<div className="profile-detail">


<Code size={25}/>


<div>


<span>
Skills
</span>




{

isEditing &&


<div className="skill-input-box">


<input

value={skillInput}

placeholder="Add skill"

onChange={(e)=>
setSkillInput(e.target.value)
}

/>


<button onClick={addSkill}>

Add

</button>


</div>


}







<div className="skills-list">


{

skills.map((skill,index)=>(


<span key={index}>


{skill}




{

isEditing &&


<button

onClick={()=>removeSkill(skill)}

>

×

</button>


}



</span>


))


}


</div>



</div>


</div>








</div>



</div>



</div>


);


}









function ProfileField({

icon,

title,

value,

edit,

setValue

}){


return(


<div className="profile-detail">


{icon}


<div>


<span>
{title}
</span>




{

edit ?


<input

value={value}

onChange={(e)=>
setValue(e.target.value)
}

/>


:


<strong>
{value}
</strong>


}



</div>


</div>


);


}





export default StudentProfile;