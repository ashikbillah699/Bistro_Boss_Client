
/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";




const MenuOrder = ({ items }) => {
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    
    const [, refetch] = useCart()

    const { image, name, recipe, price, _id } = items;

    const handleAddCart = async () => {
        if (user && user.email) {
            const cartData = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
                recipe
            }
            try {
                await axiosSecure.post(`/cart`, cartData)
                .then(res => {
                    console.log(res.data)
                    if(res.data.insertedId){
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${name} added your cart`,
                            showConfirmButton: false,
                            timer: 2000
                          });
                          refetch();
                    }
                })
            }
            catch (err) {
                console.log(err.message)
            }
        }
        else {
            Swal.fire({
                title: "Please Login first.",
                text: "Do you want to login?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, logIn!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div
            className="card text-center hover:bg-white
                     transition-all duration-700 bg-gray-100 
                     shadow-md rounded-lg border overflow-hidden">
            <figure>
                <img
                    src={image}
                    alt="Salad Image"
                    className="w-full h-72 object-cover"
                />
            </figure>
            <p>Price: {price}</p>
            <div className="card-body">
                <h2 className="card-title mx-auto text-lg font-semibold">{name}</h2>
                <p className="text-sm text-gray-600">
                    {recipe}
                </p>
                <div className="card-actions justify-center">
                    <button onClick={handleAddCart} className="btn btn-outline btn-warning w-full">
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MenuOrder;