import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import Deshboard from "../pages/Deshboard";
import OurMenu from "../pages/OurMenu";
import OurShop from "../pages/OurShop";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/contactUs',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/deshboard',
                element: <Deshboard></Deshboard>
            },
            {
                path: '/ourMenu',
                element: <OurMenu></OurMenu>
            },
            {
                path: '/ourShop',
                element: <OurShop></OurShop>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            }
        ]
    }
])