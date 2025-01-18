import { FaShoppingBag } from "react-icons/fa";
import { FaBook, FaCartShopping, FaRegAddressBook, FaUsers } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";
import { IoHomeSharp } from "react-icons/io5";
import { MdOutlineHomeWork } from "react-icons/md";
import { RiAlignItemLeftFill, RiMenuAddLine } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const DeshboardLayout = () => {
    // Todo
    const [isAdmin] = useAdmin()
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
                        {isAdmin ? <>
                            <li><NavLink to='/deshboard/adminHome' className="hover:text-white duration-300 font-bold flex items-center gap-3"><IoHomeSharp />  Admin Home</NavLink></li>
                            <li><NavLink to='/deshboard/addItems' href="#add-items" className="hover:text-white duration-300 font-bold flex items-center gap-3"><FaRegAddressBook />Add Items</NavLink></li>
                            <li> <NavLink to='/deshboard/manageItems' href="#manage-items" className="hover:text-white duration-300 flex font-bold items-center gap-3"><RiAlignItemLeftFill />Manage Items</NavLink></li>
                            <li><NavLink to='/deshboard/manageBooking' href="#manage-bookings" className="hover:text-white duration-300 font-bold flex items-center gap-3"><FaBook />Manage Bookings</NavLink></li>
                            <li><NavLink to='/deshboard/allUsers' href="#all-users" className="hover:text-white duration-300 font-bold flex items-center gap-3"><FaUsers />All Users</NavLink></li>
                        </>
                            : <>
                                <li><NavLink to='/deshboard/userHome' href="#admin-home" className="hover:text-white duration-300 font-bold">User Home</NavLink></li>
                                <li><NavLink to='/deshboard/reservation' href="#add-items" className="hover:text-white duration-300 font-bold">Reservation</NavLink></li>
                                <li><NavLink to='/deshboard/paymentHistory' href="#add-items" className="hover:text-white duration-300 font-bold">Payment Hisory</NavLink></li>
                                <li> <NavLink to='/deshboard/myCart' href="#manage-items" className="hover:text-white duration-300 flex font-bold items-center gap-3"><FaCartShopping />My Cart</NavLink></li>
                                <li><NavLink to='/deshboard/addReview' href="#manage-bookings" className="hover:text-white duration-300 font-bold">Add Review</NavLink></li>
                                <li><NavLink to='/deshboard/myBooking' href="#all-users" className="hover:text-white duration-300 font-bold">My Booking</NavLink></li>

                            </>
                        }
                        <hr className=" border-gray-50" />
                        <li><NavLink to='/' href="#home" className="hover:text-white duration-300 font-bold flex items-center gap-3"><MdOutlineHomeWork />Home</NavLink></li>
                        <li><NavLink to='/ourMenu' href="#shop" className="hover:text-white duration-300 font-bold flex items-center gap-3"><RiMenuAddLine />Our Menu</NavLink></li>
                        <li><NavLink to='/ourShop/salad' href="#menu" className="hover:text-white duration-300 font-bold flex items-center gap-3"><FaShoppingBag />Our Shop</NavLink></li>
                        <li><NavLink to='/contactUs' href="#contact" className="hover:text-white duration-300 font-bold flex items-center gap-3"><GrContact />Contact Us</NavLink></li>
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