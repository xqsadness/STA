import {
    BrowserRouter as Router,
    Routes,
    Navigate,
    Route,
    Link
} from "react-router-dom";

import { Redirect } from 'react-router-dom';
import Features from "../MainPage/Features/Features";
import Footer from "../Footer/Footer";
// import { ToastContainer, toast } from 'react-toastify';
import Login from "../Login/Login";
import TopNavbar from "../Navbar/TopNavbar";
import HomePage from "../Pages/HomePage";
import Register from "../Register/Register";
import Basic from "../MainPage/Services/Pack/Basic";
import Diamond from "../MainPage/Services/Pack/Diamond";
import Gold from "../MainPage/Services/Pack/Gold";
import Profile from "../MainPage/Profile/Profile";
import PageNotFound from "../MainPage/Notfound/PageNotFound";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import BuySta from "../MainPage/BuySta/BuySta";
import AdminRechart from './../Admin/AdminRechart';
import { Reddit } from "@mui/icons-material";
import { Switch } from "@mui/material";
import Market from "../MainPage/Market/Market";
import EditProfile from "../MainPage/Profile/EditProfile";
import Activity from "../MainPage/Profile/Activity";


let cc = localStorage.getItem("user")
console.log(cc);

const RouterScreen = () => {

    return (
        <React.Fragment>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <Router>
                {/* <ToastContainer /> */}
                <TopNavbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="/profile" element={<Profile />} />
                    <Route path="/editProfile" element={<EditProfile />} />
                    <Route path="/activityUser" element={<Activity />} />
                    <Route path="/basic" element={<Basic />} />
                    <Route path="/gold" element={<Gold />} />
                    <Route path="/diamond" element={<Diamond />} />

                    <Route path="/profile/buySta" element={<BuySta />} />

                    <Route path="/admin" element={<AdminRechart />} />

                    <Route path="/market" element={<Market />} />

                    {/* <Route path="/detail/:id" element={<Basic />} /> */}

                    <Route path="*" element={<PageNotFound />} />

                </Routes>
                <Footer />
            </Router >
        </React.Fragment>

    )
}

export default RouterScreen;
