import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import background from "../assets/background.jpg";
import "../Styles/ForgetPassword.css";

function ForgotPassword() {
  return (
    <>
      <Navbar />

      <div className="forgot-page">
        <div className="forgot-card">
          <h1>Forgot Password?</h1>

          <p>
            Enter your email address and we will send you a link to reset your
            password.
          </p>

          <form>
            <label>Email Address</label>

            <input type="email" placeholder="Enter your email" />

            <button>Send Reset Link</button>
          </form>

          <a href="/login">Back to Login</a>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ForgotPassword;
