import JobCard from "../components/JobCard";

function Jobs() {

  return (

    <div>

      <h1>Available Jobs</h1>

      <JobCard
        title="Software Engineer Intern"
        company="ABC Company"
        location="Colombo"
      />

      <JobCard
        title="Data Analyst"
        company="XYZ Company"
        location="Kandy"
      />

    </div>

  );

}

export default Jobs;