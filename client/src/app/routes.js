import React from "react";
import { Navigate } from "react-router";
import BagPage from "./layouts/bagPage";
import Admin from "./components/pages/admin";
import LogOut from "./layouts/logOut";
import Main from "./layouts/main";
import Product from "./layouts/product";
import ProtectedRoute from "./components/ui/protectedRoute";

const routes = [
    {
        path: "/",
        element: <Main />
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
