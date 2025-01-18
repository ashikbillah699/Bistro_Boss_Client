import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import CommonHeader from "../../../sheard/CommonHeader";
import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
import { RiAdminFill } from "react-icons/ri";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['usersData'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })

    const handleAdmin = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to make him an admin!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                await axiosSecure.patch(`/user/admin/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Updated!",
                                text: "Now she/he is an Admin",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    const handleDelete = async (id) => {
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
                await axiosSecure.delete(`/user/${id}`)
                    .then(res => {
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
        <div>
            <div >
                <CommonHeader heading={'MANAGE ALL USERS'} subHeading={'---How many??---'}></CommonHeader>

                <div className="overflow-x-auto bg-white p-6">
                    <div className='flex justify-between items-center my-6'>
                        <h2 className="text-xl font-bold text-black">Total users: {users.length}</h2>
                    </div>
                    <table className="table-auto w-full  shadow-md rounded-lg">
                        <thead>
                            <tr className="bg-[#D1A054] text-white">
                                <th className="p-4">Sl</th>
                                <th className="p-4">Name</th>
                                <th className="p-4">Email</th>
                                <th className="p-4">Role</th>
                                <th className="p-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.id} className="text-center border-b">
                                    <td className="p-4">{index + 1}</td>
                                    <td className="p-4">{user.userName}</td>
                                    <td className="p-4">{user.userEmal}</td>
                                    <td className="p-4">
                                        {
                                            user.role == 'admin' ? <h2 className="text-xl font-bold">Admin</h2>
                                                : <button onClick={() => handleAdmin(user._id)} className="bg-warning text-white p-2 rounded hover:bg-yellow-600 duration-300">
                                                    <RiAdminFill />
                                                </button>
                                        }
                                    </td>
                                    <td className="p-4">
                                        <button onClick={() => handleDelete(user._id)} className="bg-red-700 text-white p-2 rounded hover:bg-red-900 duration-300">
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;