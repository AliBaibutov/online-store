import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getDataStatus, getIsLoggedIn, loadUsersList } from "../store/users";

const Usersloader = ({ children }) => {
    const dataStatus = useSelector(getDataStatus());
    const isLoggedIn = useSelector(getIsLoggedIn());
    const dispatch = useDispatch();
    useEffect(() => {
        if (!dataStatus && isLoggedIn) dispatch(loadUsersList());
    }, []);
    return children;
};

Usersloader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default Usersloader;
