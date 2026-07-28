import "../../Styles/admin/Settings.css";

function AdminSettings() {

    return (

        <div className="settings-page">

            <h1>Settings</h1>

            <form className="settings-form">

                <label>Admin Name</label>

                <input
                    type="text"
                    value="Administrator"
                    readOnly
                />

                <label>Email</label>

                <input
                    type="email"
                    value="admin@careernest.com"
                    readOnly
                />

                <label>Change Password</label>

                <input
                    type="password"
                    placeholder="New Password"
                />

                <button>
                    Save Changes
                </button>

            </form>

        </div>

    );

}

export default AdminSettings;