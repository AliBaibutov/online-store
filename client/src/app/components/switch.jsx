import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { changeSwitchStatus } from "../store/theme";

const Switch = ({ bgSwitch }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(changeSwitchStatus());
    };

    return (
        <div className="form-check form-switch form-check-reverse me-1">
            <input
                className={`form-check-input ${bgSwitch}`}
                type="checkbox"
                id="flexSwitchCheckReverse"
                onClick={handleClick}
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
    bgSwitch: PropTypes.string
};

export default Switch;
