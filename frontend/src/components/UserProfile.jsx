import { useNavigate } from "react-router-dom";

function UserProfile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  if (!user) {
    return null;
  }

  return (
    <div style={{ padding: "10px 20px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        <strong>{user.name}</strong>
        <div>{user.role}</div>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserProfile;
