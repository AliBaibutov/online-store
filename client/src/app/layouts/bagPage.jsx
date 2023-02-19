import React from "react";
import _ from "lodash";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../store/users";
import BagPageForGuest from "../components/bagPageForGuest";
import BagPageForAuthUser from "../components/bagPageForAuthUser";

const BagPage = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());

    return !isLoggedIn ? <BagPageForGuest /> : <BagPageForAuthUser />;
};

export default BagPage;
