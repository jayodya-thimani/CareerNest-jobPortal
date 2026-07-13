import { useState } from "react";
import Sidebar from "../../components/Sidebar";

function ManageUsers() {

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Sewmini",
      email: "sewmini@gmail.com",
      role: "Student",
      status: "Active",
    },
    {
      id: 2,
      name: "ABC Company",
      email: "abc@gmail.com",
      role: "Employer",
      status: "Active",
    },
    {
      id: 3,
      name: "Nimal",
      email: "nimal@gmail.com",
      role: "Student",
      status: "Blocked",
    },
  ]);

  function blockUser(id) {

    setUsers(
      users.map((user) =>
        user.id === id
          ? {
              ...user,
              status:
                user.status === "Active"
                  ? "Blocked"
                  : "Active",
            }
          : user
      )
    );

  }

  function deleteUser(id) {

    setUsers(users.filter((user) => user.id !== id));

  }

  return (

    <div style={{ display: "flex" }}>

      <Sidebar />

      <div style={{ padding: "20px", flex: 1 }}>

        <h1>Manage Users</h1>

        <table border="1" cellPadding="10">

          <thead>

            <tr>

              <th>Name</th>

              <th>Email</th>

              <th>Role</th>

              <th>Status</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {users.map((user) => (

              <tr key={user.id}>

                <td>{user.name}</td>

                <td>{user.email}</td>

                <td>{user.role}</td>

                <td>{user.status}</td>

                <td>

                  <button
                    onClick={() => blockUser(user.id)}
                  >
                    {user.status === "Active"
                      ? "Block"
                      : "Unblock"}
                  </button>

                  {" "}

                  <button
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default ManageUsers;