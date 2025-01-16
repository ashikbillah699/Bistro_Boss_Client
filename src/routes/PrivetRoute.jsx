/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location)

    if(loading){
        return <div className="text-center"><span className="loading loading-spinner loading-lg"></span></div>
    }

    if(user){
        return children
    }
    return <Navigate to={'/login'}  state={{ from: location }} replace ></Navigate>;
};

export default PrivetRoute;