import React from "react";
import { Outlet } from "react-router-dom";

const Categories = () => {
    return (
        <>
            <h1>Categories</h1>
            <Outlet />
        </>
    );
};

export default Categories;
