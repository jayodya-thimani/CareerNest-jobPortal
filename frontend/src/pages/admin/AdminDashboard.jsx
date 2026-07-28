import { useEffect, useState } from "react";
import axios from "axios";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminNavbar from "../../components/admin/AdminNavbar";
import StatCard from "../../components/admin/StatCard";
import DashboardTable from "../../components/admin/DashboardTable";
import LatestApplications from "../../components/admin/DashboardWidgets/LatestApplications";
import LatestStudents from "../../components/admin/DashboardWidgets/LatestStudents";
import "../../Styles/admin/Dashboard.css";


function AdminDashboard() {

    const [stats, setStats] = useState({
        students: 0,
        employers: 0,
        jobs: 0,
        internships: 0,
        applications: 0,
    });


    const [jobs, setJobs] = useState([]);
    const [applications,setApplications]=useState([]);
    const [students,setStudents]=useState([]);


    // Load dashboard numbers
    useEffect(() => {

        const fetchDashboardStats = async () => {

            try {

                const response = await axios.get(
                    "http://localhost:5000/api/admin/dashboard"
                );

                console.log(response.data);

                setStats(response.data);


            } catch (error) {

                console.error(
                    "Dashboard Stats Error:",
                    error
                );

            }

        };


        fetchDashboardStats();

    }, []);





    // Load recent jobs
    useEffect(() => {

        const loadRecentJobs = async () => {

            try {

                const response = await axios.get(
                    "http://localhost:5000/api/admin/recent-jobs"
                );


                console.log(response.data);


                setJobs(response.data);


            } catch (error) {

                console.log(
                    "Recent Jobs Error:",
                    error
                );

            }

        };


        loadRecentJobs();


    }, []);

   useEffect(()=>{


const loadWidgets=async()=>{


try{


const appResponse=await axios.get(
"http://localhost:5000/api/admin/latest-applications"
);


setApplications(appResponse.data);



const studentResponse=await axios.get(
"http://localhost:5000/api/admin/latest-students"
);


setStudents(studentResponse.data);



}catch(error){

console.log(error);

}


};


loadWidgets();


},[]);




    return (

        <div className="dashboard">


            <AdminSidebar />


            <div className="dashboard-main">


                <AdminNavbar />



                <div className="welcome-box">

                    <h1>
                        Welcome Admin 👋
                    </h1>

                    <p>
                        CareerNest Administration Panel
                    </p>

                </div>





                <div className="cards">


                    <StatCard
                        title="Students"
                        value={stats.students}
                        color="#2563eb"
                    />


                    <StatCard
                        title="Employers"
                        value={stats.employers}
                        color="#16a34a"
                    />


                    <StatCard
                        title="Jobs"
                        value={stats.jobs}
                        color="#f97316"
                    />



                    <StatCard
                        title="Internships"
                        value={stats.internships}
                        color="#8b5cf6"
                    />



                    <StatCard
                        title="Applications"
                        value={stats.applications}
                        color="#dc2626"
                    />


                </div>





                <DashboardTable jobs={jobs}/>
                     <LatestApplications 
                     applications={applications}
                       />



                      <LatestStudents 
                       students={students}
                            />


            </div>


        </div>


    );

}


export default AdminDashboard;