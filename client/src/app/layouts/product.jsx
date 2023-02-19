import React from "react";
import { useSelector } from "react-redux";
import ProdCardForAuthUser from "../components/prodCardForAuthUser ";
import ProdCardForGuest from "../components/prodCardForGuest";
import { getIsLoggedIn } from "../store/users";

const Product = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    return isLoggedIn ? <ProdCardForAuthUser /> : <ProdCardForGuest />;
};

export default Product;
