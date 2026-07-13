import { Link } from "react-router-dom";
import "./Home.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">

          <h1>
            Find Your Dream Job <br />
            Start Your Future Today
          </h1>

          <p>
            Discover internships and career opportunities from leading
            companies. Build your future with CareerNest.
          </p>

          <div className="hero-buttons">
            <Link to="/jobs">
              <button className="primary-btn">
                Explore Jobs
              </button>
            </Link>

            <Link to="/login">
              <button className="secondary-btn">
                Find Internships
              </button>
            </Link>
          </div>

          <div className="hero-features">

            <div className="feature">
              <h3>💼Top Job Listings</h3>
              <p>Explore verified opportunities.</p>
            </div>

            <div className="feature">
              <h3>🎓Top Internships</h3>
              <p>Kickstart your career.</p>
            </div>

            <div className="feature">
              <h3>🏢Trusted Companies</h3>
              <p>Apply to leading employers.</p>
            </div>

          </div>

        </div>
      </section>

      {/* Latest Jobs */}
      

<section className="jobs">

    <div className="section-title">
        <h2>Latest Job Opportunities</h2>
        <p>Explore the newest internships and graduate jobs from leading companies.</p>
    </div>

    <div className="job-grid">

        <div className="job-card">
            <span className="job-type">Internship</span>

            <h3>Software Engineering Intern</h3>

            <h4>Tech Lanka</h4>

            <p>📍 Colombo, Sri Lanka</p>

            <p>💰 Paid Internship</p>

            <button>Apply Now</button>
        </div>

        <div className="job-card">

            <span className="job-type">Full Time</span>

            <h3>Data Analyst</h3>

            <h4>ABC Technologies</h4>

            <p>📍 Colombo</p>

            <p>💰 LKR 80K - 120K</p>

            <button>Apply Now</button>

        </div>

        <div className="job-card">

            <span className="job-type">Graduate</span>

            <h3>UI/UX Designer</h3>

            <h4>Creative Studio</h4>

            <p>📍 Hybrid</p>

            <p>💰 Attractive Salary</p>

            <button>Apply Now</button>

        </div>

    </div>

</section>

      {/* Why Choose Us */}
      
<section className="why">

    <div className="section-title">

        <h2>Why Choose CareerNest?</h2>

        <p>
            Empowering students and graduates to connect with trusted employers
            and build successful careers.
        </p>

    </div>

    <div className="why-grid">

        <div className="why-card">

            <div className="icon">🏢</div>

            <h3>Verified Employers</h3>

            <p>
                Every company is carefully verified, giving you a safe and trusted
                place to apply for jobs and internships.
            </p>

        </div>

        <div className="why-card">

            <div className="icon">🎓</div>

            <h3>Internships & Graduate Jobs</h3>

            <p>
                Discover internships and entry-level opportunities designed to
                help students launch their careers.
            </p>

        </div>

        <div className="why-card">

            <div className="icon">📄</div>

            <h3>Easy Applications</h3>

            <p>
                Upload your resume once and apply to multiple opportunities with
                just a few clicks.
            </p>

        </div>

        <div className="why-card">

            <div className="icon">🚀</div>

            <h3>Career Growth</h3>

            <p>
                Build your professional future with personalized opportunities,
                career guidance, and leading employers.
            </p>

        </div>

    </div>

</section>

            

      <Footer />
    </div>
  );
}

export default Home;