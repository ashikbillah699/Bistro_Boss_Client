import { Outlet } from "react-router-dom";
import Navbar from "../sheard/Navbar";
import Footer from "../sheard/Footer";


const MainLayout = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;