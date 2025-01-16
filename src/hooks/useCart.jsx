import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const axiosSecure = useAxiosSecure()

    const { data: carts = [] } = useQuery({
        queryKey: ['carts'],
        queryFn: async() =>{
           const res = await axiosSecure.get('/carts') 
            console.log(res.data);
            return res.data
        }
    })
    return [carts];
};

export default useCart;