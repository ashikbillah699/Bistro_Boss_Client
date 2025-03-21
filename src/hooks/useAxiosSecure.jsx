import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://bistro-boss-server-rho-ochre.vercel.app'
})

const useAxiosSecure = () => {
    const {logOut} = useContext(AuthContext);
    const navigate = useNavigate();


    // interceptors request
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('interceptors::::::', token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        return Promise.reject(error)
    })

    // interceptors response
    axiosSecure.interceptors.response.use(function(response){
        return response;
    }, async(error)=>{
        const status = error.response.status;
        // console.log('interceptors error: ', status);
        if(status === 401 || status === 403){
            await logOut();
            navigate('/login')
        }
        return Promise.reject(error)
    })
    return axiosSecure;
}

export default useAxiosSecure;