import React from "react";
import { Redirect } from "react-router-dom";

import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";
import UserProfile from "../pages/Authentication/UserProfile";

import Pages404 from "../pages/Utility/pages-404"
import Pages500 from "../pages/Utility/pages-500"

import Dashboard from "../pages/Dashboard/index";

const userRoutes = [
	// { path: "/dashboard", component: Dashboard },

	// { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> }
];

const authRoutes = [
	{ path: "/login", component: Login },
	{ path: "/forgot-password", component: ForgetPwd },
	{ path: "/register", component: Register },
	{ path: "/user-profile", component: UserProfile },
	{ path: "/dashboard", component: Dashboard },
];

export { userRoutes, authRoutes };
