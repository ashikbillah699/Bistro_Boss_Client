import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import OurMenu from "../pages/ourMenu/OurMenu";
import OurShop from "../pages/ourShop/OurShop";
import ContactUs from "../pages/contactUs/ContactUs";
import PrivetRoute from "./PrivetRoute";
import DeshboardLayout from "../layouts/DeshboardLayout";
import AllUsers from "../pages/deshboard/adminDeshboard/AllUsers";
import MyCart from "../pages/deshboard/userDeshboard/MyCart";
import AdminRoute from "./AdminRoute";
import AddItems from "../pages/deshboard/adminDeshboard/AddItems";
import ManageItems from "../pages/deshboard/adminDeshboard/ManageItems";
import UpdateMenuItem from "../pages/deshboard/adminDeshboard/UpdateMenuItem";
import Payment from "../pages/deshboard/userDeshboard/Payment";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contactUs',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/ourMenu',
                element: <OurMenu></OurMenu>
            },
            {
                path: '/ourShop/:category',
                element: <OurShop></OurShop>
            },

        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signUp',
        element: <SignUp></SignUp>
    },
    {
        path: '/deshboard',
        element: <PrivetRoute><DeshboardLayout></DeshboardLayout></PrivetRoute>,
        children:[
            // addmin routes
            {
                path:'/deshboard/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/deshboard/addItems',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: '/deshboard/manageItems',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path: '/deshboard/update/:id',
                element: <AdminRoute><UpdateMenuItem></UpdateMenuItem></AdminRoute>
            },
            // user routes
            {
                path: '/deshboard/myCart',
                element: <MyCart></MyCart>
            }, 
            {
                path: '/deshboard/payment',
                element: <Payment></Payment>
            }
        ]
    }
])