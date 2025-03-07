import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../hooks/useCart";


const Navbar = () => {
    const { logOut, user } = useContext(AuthContext);
    console.log(user)
    const [carts] = useCart()
    console.log(carts)

    const handleLogOut = () => {
        try {
            logOut()
                .then(() => {
                    console.log('logout')
                    toast.success('Successfully logout');
                })
                .catch(err => {
                    toast.error(err.message);
                })
        }
        catch (err) {
            console.log(err.message);
        }
    }


    const links = <>
        <NavLink to='/' className="mx-3 text-white text-lg font-extrabold">Home</NavLink>
        <NavLink to='/contactUs' className="mx-3 text-white text-lg font-extrabold">Contact Us</NavLink>
        <NavLink to='/ourMenu' className="mx-3 text-white text-lg font-extrabold">Our_Menu</NavLink>
        <NavLink to='/ourShop/salad' className="mx-3 text-white text-lg font-extrabold">Our_Shop</NavLink>
        <NavLink to='/deshboard' className="mx-3 text-white text-lg font-extrabold">Deshboard</NavLink>
    </>

    return (
        <div className="navbar bg-black justify-evenly max-w-screen-2xl mx-auto pt-0 fixed z-10 bg-opacity-45 top-0">
            <div className="w-3/12 justify-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-black fixed bg-opacity-45  rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className="flex flex-col">
                    <a className="text-2xl font-bold text-white">BISTRO BOSS</a>
                    <a className="text-xl font-thin text-white tracking-widest">RESTURENT</a>
                </div>
            </div>

            <div className="w-9/12 justify-end lg:navbar-center">
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                {/* cart badge */}
                <Link to='/deshboard/myCart' className="flex text-white text-lg">
                    <div className="badge badge-warning"><FaCartShopping />+{carts.length}</div>
                </Link>
            </div>
            <div className="ml-3">

                {
                    user && user ? <>
                        <Link onClick={handleLogOut} to='/login' className="text-white font-bold text-xl">LogOut</Link>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={user && user?.photoURL}
                                />
                            </div>
                        </div>
                    </>
                        :
                        <Link to='/login' className="text-white font-bold text-xl">Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;