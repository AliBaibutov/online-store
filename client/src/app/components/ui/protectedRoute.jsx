import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { getCurrentUserData } from "../../store/users";

const ProtectedRoute = ({ children }) => {
    const currentUser = useSelector(getCurrentUserData());
    if (!currentUser?.isAdmin) return <Navigate to={"/"} />;
    return children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node
};

export default ProtectedRoute;
