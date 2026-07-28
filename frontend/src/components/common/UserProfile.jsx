import { useNavigate } from "react-router-dom";
import "../../Styles/common/UserProfile.css";

function UserProfile() {

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("loggedInUser")
  );

  const handleLogout = () => {

    localStorage.removeItem("isLoggedIn");

    localStorage.removeItem("loggedInUser");

    navigate("/login");

  };

  if (!user) {
    return null;
  }

  return (

    <div className="user-profile">

      <div className="user-info">

        {user.profilePicture ? (

          <img
            src={user.profilePicture}
            alt="Profile"
            className="user-avatar"
          />

        ) : (

          <div className="default-avatar">
            👤
          </div>

        )}

        <div className="user-details">

          <strong>
            {user.name}
          </strong>

          <span>
            {user.role}
          </span>

        </div>

      </div>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>

    </div>

  );
}

export default UserProfile;