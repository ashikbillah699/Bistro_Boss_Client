import axios from "axios";


const axiosPublic =  axios.create({
    baseURL: 'https://bistro-boss-server-rho-ochre.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;