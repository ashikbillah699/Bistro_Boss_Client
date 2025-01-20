import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
    // const [menu, setMenu] = useState([]);
    const axiosPublic = useAxiosPublic();

    // useEffect(() => {
    //     fetch(`http://localhost:5000/menu`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data);
    //         })
    // }, [])

    const {data: menu = [], isPending, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/menu')
            return res.data;
        }
    })

    return [menu, isPending, refetch]
};

export default useMenu;