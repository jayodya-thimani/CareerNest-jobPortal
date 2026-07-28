import EmployerSidebar from "../../components/employer/EmployerSidebar";
import UserProfile from "../../components/common/UserProfile";
import "../../Styles/employer/Notifications.css";

const notifications = [
  {
    id: 1,
    title: "New applicant for Frontend Developer",
    message: "Sarah Johnson applied to your Frontend Developer role.",
    time: "5 minutes ago",
    type: "application",
  },
  {
    id: 2,
    title: "Interview request received",
    message: "Daniel Kim requested an interview for the UI/UX Designer position.",
    time: "1 hour ago",
    type: "interview",
  },
  {
    id: 3,
    title: "Job post approved",
    message: "Your recent job post has been approved and is now live.",
    time: "Yesterday",
    type: "approval",
  },
];

function Notifications() {
  return (
    <div className="dashboard-layout">
      <EmployerSidebar />

      <div className="dashboard-content">
        <UserProfile />

        <div className="manage-header">
          <div>
            <h1>Notifications</h1>
            <p>Stay updated on applications, interviews, and job approvals.</p>
          </div>
        </div>

        <div className="notification-list">
          {notifications.map((notification) => (
            <div className="notification-card" key={notification.id}>
              <div className="notification-icon">
                {notification.type === "application" && "📄"}
                {notification.type === "interview" && "🗓️"}
                {notification.type === "approval" && "✅"}
              </div>

              <div className="notification-content">
                <h3>{notification.title}</h3>
                <p>{notification.message}</p>
              </div>

              <span className="notification-time">{notification.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notifications;
