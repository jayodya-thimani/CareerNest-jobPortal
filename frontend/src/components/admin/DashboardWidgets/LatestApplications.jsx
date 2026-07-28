
import "../../../Styles/admin/DashboardWidget.css";


function LatestApplications({applications}){


return(

<div className="widget-box">

<h2>
Latest Applications
</h2>


<table>

<thead>

<tr>

<th>Student</th>
<th>Job</th>
<th>Status</th>

</tr>

</thead>


<tbody>


{
applications && applications.length > 0 ?

applications.map((app)=>(
<tr key={app._id}>


<td>
{app.student?.name}
</td>


<td>
{app.job?.title}
</td>


<td>
{app.status}
</td>


</tr>
))


:

<tr>

<td colSpan="3">
No Applications Found
</td>

</tr>

}


</tbody>


</table>


</div>


);


}


export default LatestApplications;