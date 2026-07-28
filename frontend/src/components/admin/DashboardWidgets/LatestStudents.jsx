import "../../../Styles/admin/DashboardWidget.css";


function LatestStudents({students}){


return(

<div className="widget-box">


<h2>
Latest Registered Students
</h2>



<table>

<thead>

<tr>

<th>Name</th>
<th>Email</th>


</tr>

</thead>



<tbody>


{
students && students.length > 0 ?

students.map((student)=>(

<tr key={student._id}>


<td>
{student.name}
</td>


<td>
{student.email}
</td>





</tr>


))


:

<tr>

<td colSpan="3">
No Students Found
</td>

</tr>

}


</tbody>


</table>


</div>


);


}


export default LatestStudents;