import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";


function ProtectedRoute({ role }) {


    const { user } = useContext(AuthContext);

    const location = useLocation();



    // If user is not logged in
    if (!user) {

        return (

            <Navigate

                to="/login"

                state={{ from: location }}

                replace

            />

        );

    }



    // Check user role permission
    if (role && user.role !== role) {

        return (

            <Navigate

                to="/login"

                replace

            />

        );

    }



    // Allow access
    return <Outlet />;


}


export default ProtectedRoute;