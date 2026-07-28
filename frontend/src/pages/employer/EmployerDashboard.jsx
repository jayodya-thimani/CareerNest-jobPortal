/*import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import UserProfile from "../../components/UserProfile";

import "./EmployerDashboard.css";


function EmployerDashboard() {

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();


    const jobs = JSON.parse(

        localStorage.getItem("jobs")

    ) || [];


    const applicants = JSON.parse(

        localStorage.getItem("applicants")

    ) || [];


    if (!user) {

        return (

            <div className="dashboard-loading">

                <h2>Loading Employer Dashboard...</h2>

            </div>

        );

    }


    return (

        <div className="employer-dashboard">


            <UserProfile />


            <div className="employer-header">

                <h1>

                    Employer Dashboard

                </h1>


                <p>

                    Welcome back, {user.name}! 👋

                </p>

            </div>


            <div className="employer-actions">


                <button

                    onClick={() =>

                        navigate("/post-jobs")

                    }

                >

                    ➕ Post New Job

                </button>


                <button

                    onClick={() =>

                        navigate("/manage-jobs")

                    }

                >

                    📋 Manage Jobs

                </button>


                <button

                    onClick={() =>

                        navigate("/applicants")

                    }

                >

                    👥 View Applicants

                </button>


            </div>


            <div className="employer-stats">


                <div className="employer-stat-card">

                    <h2>💼</h2>

                    <h3>

                        {jobs.length}

                    </h3>

                    <p>

                        Posted Jobs

                    </p>

                </div>


                <div className="employer-stat-card">

                    <h2>👥</h2>

                    <h3>

                        {applicants.length}

                    </h3>

                    <p>

                        Applicants

                    </p>

                </div>


                <div className="employer-stat-card">

                    <h2>📊</h2>

                    <h3>

                        {jobs.filter(

                            job => job.status === "Active"

                        ).length}

                    </h3>

                    <p>

                        Active Jobs

                    </p>

                </div>


            </div>


            <div className="recent-jobs">


                <h2>

                    Recent Job Posts

                </h2>


                {jobs.length === 0 ? (

                    <div className="empty-box">

                        <p>

                            You have not posted any jobs yet.

                        </p>


                        <button

                            onClick={() =>

                                navigate("/post-jobs")

                            }

                        >

                            Post Your First Job

                        </button>

                    </div>

                ) : (

                    jobs.slice(0, 5).map((job) => (


                        <div

                            className="recent-job"

                            key={job.id}

                        >

                            <div>

                                <h3>

                                    {job.title}

                                </h3>


                                <p>

                                    {job.location} • {job.type}

                                </p>

                            </div>


                            <span>

                                {job.status}

                            </span>

                        </div>

                    ))

                )}

            </div>


        </div>

    );

}


export default EmployerDashboard;   */

//dimasha
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

import EmployerSidebar from "../../components/employer/EmployerSidebar";
import UserProfile from "../../components/common/UserProfile";

import "../../Styles/employer/EmployerDashboard.css";

function EmployerDashboard() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
  const applicants =
    JSON.parse(localStorage.getItem("applicants")) || [];

  const totalJobs = jobs.length;

  const activeJobs = jobs.filter(
    (job) => job.status === "Active"
  ).length;

  const closedJobs = jobs.filter(
    (job) => job.status === "Closed"
  ).length;

  const totalApplicants = applicants.length;

  if (!user) {
    return (
      <div className="dashboard-loading">
        <h2>Loading Employer Dashboard...</h2>
      </div>
    );
  }

  return (
    <div className="dashboard-layout">

      {/* Sidebar */}
      <EmployerSidebar />

      {/* Main Content */}
      <div className="dashboard-content">

        <UserProfile />

        {/* Header */}

        <div className="employer-header">

          <div>
            <h1>Employer Dashboard</h1>

            <p>
              Welcome back,
              <strong> {user.name}</strong> 👋
            </p>

            <small>
              Manage your company, jobs and applicants from one place.
            </small>

          </div>

        </div>

        {/* Action Buttons */}

        <div className="employer-actions">

          <button
            onClick={() => navigate("/employer/postjob")}
          >
            ➕ Post New Job
          </button>

          <button
            onClick={() => navigate("/employer/managejobs")}
          >
            📋 Manage Jobs
          </button>

          <button
            onClick={() => navigate("/employer/applicants")}
          >
            👥 View Applicants
          </button>

        </div>

        {/* Statistics */}

        <div className="employer-stats">

          <div className="employer-stat-card">
            <h2>💼</h2>
            <h3>{totalJobs}</h3>
            <p>Total Jobs Posted</p>
          </div>

          <div className="employer-stat-card">
            <h2>🟢</h2>
            <h3>{activeJobs}</h3>
            <p>Active Jobs</p>
          </div>

          <div className="employer-stat-card">
            <h2>👨‍🎓</h2>
            <h3>{totalApplicants}</h3>
            <p>Total Applicants</p>
          </div>

          <div className="employer-stat-card">
            <h2>📁</h2>
            <h3>{closedJobs}</h3>
            <p>Closed Jobs</p>
          </div>

        </div>

        {/* Recent Jobs */}

        <section className="recent-jobs">

          <div className="section-title">

            <h2>Recent Job Posts</h2>

            <button
              className="view-all-btn"
              onClick={() => navigate("/employer/managejobs")}
            >
              View All
            </button>

          </div>

          {jobs.length === 0 ? (

            <div className="empty-box">

              <h3>No Jobs Posted Yet</h3>

              <p>
                Start attracting talented candidates by posting your first job.
              </p>

              <button
                onClick={() => navigate("/employer/postjob")}
              >
                ➕ Post Your First Job
              </button>

            </div>

          ) : (

            jobs
              .slice(-5)
              .reverse()
              .map((job) => (

                <div
                  className="recent-job"
                  key={job.id}
                >

                  <div>

                    <h3>{job.title}</h3>

                    <p>
                      📍 {job.location} • {job.type}
                    </p>

                  </div>

                  <span>{job.status}</span>

                </div>

              ))

          )}

        </section>

        {/* Recent Applicants */}

        <section className="recent-applicants">

          <div className="section-title">

            <h2>Recent Applicants</h2>

            <button
              className="view-all-btn"
              onClick={() => navigate("/employer/applicants")}
            >
              View All
            </button>

          </div>

          {applicants.length === 0 ? (

            <div className="empty-box">

              <h3>No Applicants Yet</h3>

              <p>
                Students who apply for your jobs will appear here.
              </p>

            </div>

          ) : (

            applicants
              .slice(-5)
              .reverse()
              .map((applicant, index) => (

                <div
                  className="recent-job"
                  key={applicant.id || index}
                >

                  <div>

                    <h3>{applicant.name}</h3>

                    <p>{applicant.email}</p>

                  </div>

                  <span>Applied</span>

                </div>

              ))

          )}

        </section>

      </div>

    </div>
  );
}

export default EmployerDashboard;