import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import contactImage from "../assets/contact.png";
import background from "../assets/background.jpg";


function ContactUs() {


  const inputStyle = {

    width: "100%",
    padding: "15px",
    marginBottom: "18px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "20px",
    boxSizing: "border-box",
    outline: "none",

  };


  return (

    <>

      <Navbar />


      <div
        style={{

          width:"100%",
          minHeight:"100vh",

          backgroundImage:
          `linear-gradient(
          rgba(255,255,255,0.80),
          rgba(255,255,255,0.80)
          ),
          url(${background})`,

          backgroundSize:"cover",

          backgroundPosition:"center",

          padding:"60px",

          boxSizing:"border-box"

        }}
      >



        <h1
          style={{

            textAlign:"center",
            color:"#073e91",
            fontSize:"55px",
            marginBottom:"20px"

          }}
        >
          Contact Us
        </h1>



        <p
          style={{

            textAlign:"center",
            fontSize:"28px",
            color:"#444",
            marginBottom:"50px"

          }}
        >
          We'd love to hear from you. Send us your questions, comments, or
          feedback.
        </p>





        <div
          style={{

            display:"flex",
            gap:"40px",
            alignItems:"stretch",
            flexWrap:"wrap"

          }}
        >




          {/* ================= LEFT SIDE ================= */}


          <div
            style={{

              flex:"1",
              minWidth:"420px",
              display:"flex",
              flexDirection:"column"

            }}
          >



            {/* IMAGE BOX */}

            <div
              style={{

                width:"100%",
                height:"100%",
                overflow:"hidden",
                borderRadius:"15px",
                boxShadow:"0 8px 20px rgba(0,0,0,0.25)"

              }}
            >

              <img
                src={contactImage}
                alt="Contact"
                style={{

                  width:"100%",
                  height:"100%",
                  objectFit:"cover",
                  objectPosition:"center",
                  display:"block"

                }}
              />

            </div>





            {/* CONTACT INFORMATION BOX */}


            <div
              style={{

                marginTop:"30px",

                backgroundColor:"rgba(255,255,255,0.95)",

                padding:"30px",

                borderRadius:"15px",

                boxShadow:"0 8px 20px rgba(0,0,0,0.15)"

              }}
            >


              <h2
                style={{

                  color:"#073d8e",

                  fontSize:"32px",

                  marginBottom:"5px"

                }}
              >
                Contact Information
              </h2>



              <p style={{fontSize:"22px",lineHeight:"1.8"}}>
                <strong>CareerNest Job Portal</strong>
              </p>


              <p style={{fontSize:"22px",lineHeight:"1.8"}}>
                📍 123 University Avenue, Colombo 07, Sri Lanka
              </p>


              <p style={{fontSize:"22px",lineHeight:"1.8"}}>
                ☎ Telephone: +94 11 234 5678
              </p>


              <p style={{fontSize:"22px",lineHeight:"1.8"}}>
                📱 Mobile: +94 77 123 4567
              </p>


              <p style={{fontSize:"22px",lineHeight:"1.8"}}>
                ✉ Email: support@careernest.com
              </p>


              <p style={{fontSize:"22px",lineHeight:"1.8"}}>
                🕒 Monday - Friday
                <br/>
                8:30 AM - 5:00 PM
              </p>



            </div>



          </div>








          {/* ================= RIGHT SIDE ================= */}



          <div
            style={{

              flex:"1",

              minWidth:"420px",

              backgroundColor:"rgba(255,255,255,0.95)",

              padding:"40px",

              borderRadius:"15px",

              boxShadow:"0 8px 20px rgba(0,0,0,0.20)"

            }}
          >



            <h2
              style={{

                color:"#07367b",

                fontSize:"35px",

                marginBottom:"15px"

              }}
            >
              Send Us a Message
            </h2>



            <p
              style={{

                color:"#666",

                fontSize:"22px",

                marginBottom:"30px"

              }}
            >
              Complete the form below and we'll respond as soon as possible.
            </p>




            <form>



              <input
                type="text"
                placeholder="Full Name"
                style={inputStyle}
              />



              <input
                type="email"
                placeholder="Email Address"
                style={inputStyle}
              />



              <input
                type="tel"
                placeholder="Telephone Number"
                style={inputStyle}
              />



              <input
                type="text"
                placeholder="Subject"
                style={inputStyle}
              />



              <textarea

                rows="10"

                placeholder="Your Message"

                style={{

                  ...inputStyle,

                  resize:"none"

                }}

              />




              <button

                type="submit"

                style={{

                  width:"100%",

                  padding:"16px",

                  backgroundColor:"#073a86",

                  color:"#fff",

                  border:"none",

                  borderRadius:"8px",

                  fontSize:"22px",

                  fontWeight:"bold",

                  cursor:"pointer"

                }}

              >

                Send Message

              </button>




            </form>



          </div>




        </div>



      </div>



      <Footer />


    </>

  );

}


export default ContactUs;