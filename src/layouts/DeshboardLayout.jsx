import { FaCartShopping } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const DeshboardLayout = () => {

    return (
        <div>
            <div className="flex flex-col md:flex-row min-h-screen">
                {/* Sidebar */}
                <div className="w-full md:w-1/5 bg-[#D1A054] text-black p-8">
                    <div className="flex flex-col mb-8">
                        <a className="text-2xl font-bold">BISTRO BOSS</a>
                        <a className="text-xl font-thin tracking-widest">RESTURENT</a>
                    </div>
                    <ul className="flex flex-col space-y-5">
                        <li><NavLink to='/deshboard' href="#admin-home" className="hover:text-white duration-300 font-bold">Admin Home</NavLink></li>
                        <li><NavLink to='/deshboard' href="#add-items" className="hover:text-white duration-300 font-bold">Add Items</NavLink></li>
                        <li> <NavLink to='/deshboard/myCart' href="#manage-items" className="hover:text-white duration-300 flex font-bold items-center gap-3"><FaCartShopping />My Cart</NavLink></li>
                        <li><NavLink to='/deshboard' href="#manage-bookings" className="hover:text-white duration-300 font-bold">Manage Bookings</NavLink></li>
                        <li><NavLink to='/deshboard' href="#all-users" className="hover:text-white duration-300 font-bold">All Users</NavLink></li>
                        <hr className="my-4 border-gray-50" />
                        <li><NavLink to='/' href="#home" className="hover:text-white duration-300 font-bold">Home</NavLink></li>
                        <li><NavLink to='/ourMenu' href="#shop" className="hover:text-white duration-300 font-bold">Our Menu</NavLink></li>
                        <li><NavLink to='/ourShop/salad' href="#menu" className="hover:text-white duration-300 font-bold">Our Shop</NavLink></li>
                        <li><NavLink to='/contactUs' href="#contact" className="hover:text-white duration-300 font-bold">Contact Us</NavLink></li>
                    </ul>
                </div>

                {/* Main Content */}
                <div className="w-full md:w-4/5 px-6 bg-gray-100 rounded">
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default DeshboardLayout;