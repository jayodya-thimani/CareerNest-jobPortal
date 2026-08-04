import "../../styles/common/About.css";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="about-container">

        {/* Hero Section */}
        <section className="about-hero">
          <div className="hero-overlay">
            <h1>About Us</h1>
            <p>
              Connecting talented university students with exciting internship
              and career opportunities.
            </p>
          </div>
        </section>


        {/* Content Area */}
        <div className="about-content">

          {/* Who We Are */}
          <section className="about-card">
            <h2>Who We Are</h2>
            <p>
              CareerNest is a modern job and internship portal designed to help
              university students and graduates discover career opportunities.
              Our platform bridges the gap between talented students and trusted
              employers by making recruitment simple, fast, and accessible.
            </p>
          </section>


          {/* Mission & Vision */}
          <section className="about-grid">

            <div className="info-card">
              <h2>🎯 Our Mission</h2>
              <p>
                To empower students by providing easy access to internships,
                graduate jobs, and career development resources while helping
                employers connect with talented future professionals.
              </p>
            </div>


            <div className="info-card">
              <h2>🚀 Our Vision</h2>
              <p>
                To become the most trusted university career platform where every
                student can build a successful professional future.
              </p>
            </div>

          </section>


          {/* Services */}
          <section className="about-card">

            <h2>What We Provide</h2>

            <div className="services">

              <div className="service-box">
                <h3>💼 Internships</h3>
                <p>
                  Find internship opportunities from leading organizations.
                </p>
              </div>


              <div className="service-box">
                <h3>🔎 Job Listings</h3>
                <p>
                  Explore job openings that match your skills and qualifications.
                </p>
              </div>


              <div className="service-box">
                <h3>📚 Career Guidance</h3>
                <p>
                  Access career resources to improve your professional journey.
                </p>
              </div>


              <div className="service-box">
                <h3>👨‍🎓 Student Profiles</h3>
                <p>
                  Create your profile and showcase your achievements to employers.
                </p>
              </div>

            </div>

          </section>

        </div>

      </div>


      <Footer />
    </>
  );
}

export default About;