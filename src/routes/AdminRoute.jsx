/* eslint-disable react/prop-types */
import { useContext } from "react";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    console.log(location)

    if(loading || isAdminLoading){
        return <div className="text-center"><span className="loading loading-spinner loading-lg"></span></div>
    }

    if(user && isAdmin){
        return children
    }
    return <Navigate to={'/login'}  state={{ from: location }} replace ></Navigate>;
};

export default AdminRoute;