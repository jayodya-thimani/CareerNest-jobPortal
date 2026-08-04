import React, {useEffect,useState} from "react";

import axios from "axios";

import {
Bell,
CheckCircle,
XCircle,
Calendar
} from "lucide-react";

import "../../styles/student/StudentPages.css";



function Messages(){


const [notifications,setNotifications]=useState([]);


const email =
localStorage.getItem("userEmail");



useEffect(()=>{


axios
.get(
`/api/notifications/${email}`
)

.then(res=>{

setNotifications(res.data);

})

.catch(err=>{

console.log(err);

});


},[email]);





return(

<div className="student-page">


<div className="page-header">

<h1>
Notifications
</h1>

<p>
Application updates from admin.
</p>

</div>



<div className="notification-container">


{

notifications.length > 0 ?


notifications.map(notification=>(


<div
key={notification._id}
className={`notification-card ${notification.status}`}
>


<div className="notification-icon">


{
notification.status==="approved"

?

<CheckCircle size={35}/>

:

<XCircle size={35}/>

}


</div>



<div className="notification-content">


<h2>
{notification.title}
</h2>


<h3>
{notification.job}
</h3>


<p>
{notification.message}
</p>


<span>

<Calendar size={15}/>

{
new Date(notification.date)
.toDateString()
}

</span>


</div>


</div>


))


:


<div className="no-notification">

<Bell size={45}/>

<h2>
No notifications yet
</h2>


</div>


}


</div>


</div>

);


}


export default Messages;