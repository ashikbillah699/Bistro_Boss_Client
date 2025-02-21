import { FaTrash } from 'react-icons/fa';
import useCart from '../../../hooks/useCart';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import CommonHeader from '../../../sheard/CommonHeader';
import { Link } from 'react-router-dom';

const MyCart = () => {
    const [cart, refetch] = useCart();
    const axiosSecure = useAxiosSecure()
    const totalprice = cart.reduce((total, item) => total + item.price, 0)

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

                await axiosSecure.delete(`/cart/${id}`)
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
        <div >
            <CommonHeader heading={'WANNA ADD MORE?'} subHeading={'---My Cart---'}></CommonHeader>

            <div className="overflow-x-auto bg-white p-6">
                <div className='flex justify-between items-center my-6'>
                    <h2 className="text-xl font-bold text-black">Total orders: {cart.length}</h2>
                    <h2 className="text-xl font-bold text-black">Total price: ${totalprice}</h2>
                    {cart.length ? <Link to='/deshboard/payment'><button className='text-white bg-[#D1A054] px-2 py-1 rounded-md'>pay</button></Link>
                        : <button disabled className='text-white bg-[#d3d0ce] px-2 py-1 rounded-md'>pay</button>}

                </div>
                <table className="table-auto w-full  shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-[#D1A054] text-white">
                            <th className="p-4">Sl</th>
                            <th className="p-4">Item Image</th>
                            <th className="p-4">Item Name</th>
                            <th className="p-4">Price</th>
                            <th className="p-4">Action</th>
                        </tr>
                    </thead>
                    {
                        cart.length === 0 ? <tr className='text-center'><td className='text-3xl font-semibold py-3' colSpan='5'>You have no order!!!</td></tr>
                            : <tbody>
                                {cart.map((item, index) => (
                                    <tr key={item.id} className="text-center border-b">
                                        <td className="p-4">{index + 1}</td>
                                        <td className="p-4"><img src={item.image} className='mx-auto bg-gray-500 h-14 w-14 rounded-lg' alt="" /></td>
                                        <td className="p-4">{item.name}</td>
                                        <td className="p-4">{item.price}</td>
                                        <td className="p-4">
                                            <button onClick={() => handleDelete(item._id)} className="bg-red-700 text-white p-2 rounded hover:bg-red-900 duration-300">
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                    }
                </table>
            </div>
        </div>
    );
};

export default MyCart;