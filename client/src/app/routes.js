import React from "react";
import { Navigate } from "react-router";
// import { Navigate } from "react-router";
import Admin from "./layouts/admin";
import Login from "./layouts/login";
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
        element: <Admin />
    },
    {
        path: "product/:productId",
        element: <Product />
    },
    {
        path: "*",
        element: <Navigate to="/" />
    }
];

export default routes;