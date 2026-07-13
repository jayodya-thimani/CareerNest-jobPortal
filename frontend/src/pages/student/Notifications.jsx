import { useState } from "react";
import Sidebar from "../../components/Sidebar";

function Notifications() {

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "Your application for Software Engineer Intern has been shortlisted.",
      status: "Unread",
    },
    {
      id: 2,
      message: "A new Data Analyst internship has been posted.",
      status: "Unread",
    },
    {
      id: 3,
      message: "Your application for Web Developer has been rejected.",
      status: "Read",
    },
  ]);

  function markAsRead(id) {

    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, status: "Read" }
          : notification
      )
    );

  }

  return (

    <div style={{ display: "flex" }}>

      <Sidebar />

      <div style={{ padding: "20px", flex: 1 }}>

        <h1>Notifications</h1>

        <table border="1" cellPadding="10">

          <thead>

            <tr>
              <th>Notification</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {notifications.map((notification) => (

              <tr key={notification.id}>

                <td>{notification.message}</td>

                <td>{notification.status}</td>

                <td>

                  {notification.status === "Unread" ? (

                    <button
                      onClick={() => markAsRead(notification.id)}
                    >
                      Mark as Read
                    </button>

                  ) : (

                    <button disabled>
                      Read
                    </button>

                  )}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default Notifications;