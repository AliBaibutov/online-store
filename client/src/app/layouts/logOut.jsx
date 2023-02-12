import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logOut } from "../store/users";

const LogOut = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(logOut());
        navigate("/");
    }, []);
};

export default LogOut;
