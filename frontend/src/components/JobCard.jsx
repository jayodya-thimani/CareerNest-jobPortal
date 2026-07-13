function JobCard({ title, company, location }) {

  return (

    <div>

      <h3>{title}</h3>

      <p>{company}</p>

      <p>{location}</p>

      <button>
        Apply
      </button>

    </div>

  );

}

export default JobCard;