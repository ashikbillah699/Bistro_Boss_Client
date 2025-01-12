import { NavLink } from "react-router-dom";


const Navbar = () => {
    const links = <>
        <NavLink to='/' className="mx-3 text-white text-lg font-extrabold">Home</NavLink>
        <NavLink to='/contactUs' className="mx-3 text-white text-lg font-extrabold">Contact Us</NavLink>
        <NavLink to='/deshboard' className="mx-3 text-white text-lg font-extrabold">Deshboard</NavLink>
        <NavLink to='/ourMenu' className="mx-3 text-white text-lg font-extrabold">Our_Menu</NavLink>
        <NavLink to='/ourShop' className="mx-3 text-white text-lg font-extrabold">Our_Shop</NavLink>
        {/* <li className="text-white text-xl font-extrabold">
            <details>
                <summary>Parent</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li > */}
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
                <a className="btn">Button</a>

            </div>
        </div>
    );
};

export default Navbar;