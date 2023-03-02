import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { changeSwitchStatus, getSwitchStatus } from "../store/theme";
import { logOut } from "../store/users";

const LogOut = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const status = useSelector(getSwitchStatus());
    useEffect(() => {
        dispatch(logOut());
        if (status) dispatch(changeSwitchStatus(false));
        navigate("/");
    }, []);
};

export default LogOut;
