import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { changeSwitchStatus } from "../../store/theme";
import { getIsLoggedIn } from "../../store/users";

const Switch = () => {
    const dispatch = useDispatch();
    const inputRef = useRef();
    const isLoggedIn = useSelector(getIsLoggedIn());

    useEffect(() => {
        dispatch(changeSwitchStatus(false));
    }, [isLoggedIn]);

    const handleClick = () => {
        if (inputRef.current.checked === false) {
            dispatch(changeSwitchStatus(false));
        }
        if (inputRef.current.checked === true) {
            dispatch(changeSwitchStatus(true));
        }
    };

    return (
        <div className={`form-check form-switch form-check-reverse me-1`}>
            <input
                className="form-check-input bg-warning border-0"
                type="checkbox"
                id="flexSwitchCheckReverse"
                onClick={handleClick}
                ref={inputRef}
            />
            <label
                className="form-check-label"
                htmlFor="flexSwitchCheckReverse"
            >
                Сменить тему
            </label>
        </div>
    );
};

Switch.propTypes = {
    bgSwitch: PropTypes.string,
    check: PropTypes.string,
    circle: PropTypes.string
};

export default Switch;
