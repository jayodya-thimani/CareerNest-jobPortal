import React from "react";
import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  BriefcaseBusiness,
  Bookmark,
  User,
  Bell,
  BookOpen,
  Settings,
  LogOut,
  Rocket
} from "lucide-react";

import "../../styles/student/StudentSidebar.css";


function StudentSidebar({isOpen}) {


const menuItems = [

{
name:"Dashboard",
path:"/student/dashboard",
icon:<LayoutDashboard size={22}/>
},


{
name:"Apply Jobs",
path:"/jobs",
icon:<BriefcaseBusiness size={22}/>
},


{
name:"Saved Jobs",
path:"/student/saved-jobs",
icon:<Bookmark size={22}/>
},


{
name:"Profile",
path:"/student/profile",
icon:<User size={22}/>
},


{
name:"Notifications",
path:"/student/messages",
icon:<Bell size={22}/>
},


{
name:"Career Resources",
path:"/student/career-resources",
icon:<BookOpen size={22}/>
},


{
name:"Settings",
path:"/student/settings",
icon:<Settings size={22}/>
}


];





return(


<aside

className={`student-sidebar ${
isOpen ? "sidebar-open" : ""
}`}

>


<div className="sidebar-menu">



{

menuItems.map((item,index)=>(


<NavLink

key={index}

to={item.path}

className={({isActive})=>

`sidebar-link ${
isActive ? "active" : ""
}`

}

>


{item.icon}


<span>
{item.name}
</span>


</NavLink>


))


}



</div>








<div className="sidebar-bottom">





<div className="future-card">


<h3>

Build your future with CareerNest 🚀

</h3>



<button>

Explore

</button>



<Rocket

className="rocket-icon"

size={70}

/>



</div>







<NavLink

to="/login"

className="sidebar-link logout-link"

>


<LogOut size={22}/>


<span>

Logout

</span>


</NavLink>





</div>





</aside>


);


}


export default StudentSidebar;