import React from "react";
import _ from "lodash";
import { useSelector } from "react-redux";
import MainForAuthUser from "../components/pages/mainForAuthUser";
import MainForGuest from "../components/pages/mainForGuest";
import { getIsLoggedIn } from "../store/users";

const Main = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());

    return isLoggedIn ? <MainForAuthUser /> : <MainForGuest />;
};

export default Main;
