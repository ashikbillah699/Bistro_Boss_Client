import { FaTrash } from "react-icons/fa6";
import useMenu from "../../../hooks/useMenu";
import CommonHeader from "../../../sheard/CommonHeader";
import { MdEditSquare } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDelete = async (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                await axiosSecure.delete(`/menu/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div >
            <CommonHeader heading={'WANNA ADD MORE?'} subHeading={'---My Cart---'}></CommonHeader>

            <div className="overflow-x-auto bg-white p-6">
                <div className='flex justify-between items-center my-6'>
                    <h2 className="text-xl font-bold text-black">Total orders: {menu.length}</h2>
                </div>
                <table className="table-auto w-full  shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-[#D1A054] text-white">
                            <th className="p-4">Sl</th>
                            <th className="p-4">Item Image</th>
                            <th className="p-4">Item Name</th>
                            <th className="p-4">Price</th>
                            <th className="p-4">Update</th>
                            <th className="p-4">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map((item, index) => (
                            <tr key={item.id} className="text-center border-b">
                                <td className="p-4">{index + 1}</td>
                                <td className="p-4"><img src={item.image} className='mx-auto bg-gray-500 h-14 w-14 rounded-lg' alt="" /></td>
                                <td className="p-4">{item.name}</td>
                                <td className="p-4">{item.price}</td>
                                <td className="p-4">
                                    <Link to={`/deshboard/update/${item._id}`}>
                                        <button className="bg-[#D1A054] text-white p-2 rounded hover:bg-[#f8ab38] duration-300">
                                            <MdEditSquare />
                                        </button>
                                    </Link>
                                </td>
                                <td className="p-4">
                                    <button onClick={() => handleDelete(item._id)} className="bg-red-700 text-white p-2 rounded hover:bg-red-900 duration-300">
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;