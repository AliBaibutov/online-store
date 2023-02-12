import React from "react";
import { Navigate } from "react-router";
import BagPage from "./components/bagPage";
import ProtectedRoute from "./components/protectedRoute";
// import { Navigate } from "react-router";
import Admin from "./layouts/admin";
import Login from "./layouts/login";
import LogOut from "./layouts/logOut";
import Main from "./layouts/main";
import Product from "./layouts/product";

const routes = [
    {
        path: "/",
        element: <Main />
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "admin",
        element: (
            <ProtectedRoute>
                <Admin />
            </ProtectedRoute>
        )
    },
    {
        path: "product/:productId",
        element: <Product />
    },
    {
        path: "bag",
        element: <BagPage />
    },
    {
        path: "logout",
        element: <LogOut />
    },
    {
        path: "*",
        element: <Navigate to="/" />
    }
];

export default routes;
