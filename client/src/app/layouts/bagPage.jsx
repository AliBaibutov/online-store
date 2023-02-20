import React from "react";
import _ from "lodash";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../store/users";
import BagPageForGuest from "../components/bagPageForGuest";
import BagPageForAuthUser from "../components/bagPageForAuthUser";
import { getSwitchStatus } from "../store/theme";
import useTheme from "../components/hooks/useTheme";

const BagPage = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const status = useSelector(getSwitchStatus());
    const { bg, bgBagIcon, btnColor, btnOutlineColor } = useTheme(status);

    return !isLoggedIn ? (
        <BagPageForGuest
            bg={bg}
            bgBagIcon={bgBagIcon}
            btnColor={btnColor}
            btnOutlineColor={btnOutlineColor}
        />
    ) : (
        <BagPageForAuthUser
            bg={bg}
            bgBagIcon={bgBagIcon}
            btnColor={btnColor}
            btnOutlineColor={btnOutlineColor}
        />
    );
};

export default BagPage;
