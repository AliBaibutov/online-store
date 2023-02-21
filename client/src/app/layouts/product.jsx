import React from "react";
import { useSelector } from "react-redux";
import useTheme from "../components/hooks/useTheme";
import ProdCardForAuthUser from "../components/prodCardForAuthUser ";
import ProdCardForGuest from "../components/prodCardForGuest";
import { getSwitchStatus } from "../store/theme";
import { getIsLoggedIn } from "../store/users";

const Product = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const status = useSelector(getSwitchStatus());
    const { btnInBagColor, bgBagIcon, btnColor } = useTheme(status);
    return isLoggedIn ? (
        <ProdCardForAuthUser
            btnInBagColor={btnInBagColor}
            bgBagIcon={bgBagIcon}
            btnColor={btnColor}
        />
    ) : (
        <ProdCardForGuest
            btnInBagColor={btnInBagColor}
            bgBagIcon={bgBagIcon}
            btnColor={btnColor}
        />
    );
};

export default Product;
