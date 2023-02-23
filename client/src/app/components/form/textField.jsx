import React, { useState } from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, name, value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    const getInputClasses = () => {
        return (
            "form-control border-secondary-subtle" +
            (error
                ? " is-invalid"
                : name === "surname" || name === "image"
                ? ""
                : " is-valid")
        );
    };

    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className="mb-4">
            <label htmlFor={name}> {label}</label>
            <div className="input-group has-validation">
                <input
                    type={showPassword ? "text" : type}
                    // id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    className={getInputClasses()}
                />
                {type === "password" && (
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={toggleShowPassword}
                    >
                        <i
                            className={
                                "bi bi-eye" +
                                (showPassword ? "-fill" : "-slash-fill")
                            }
                        ></i>
                    </button>
                )}

                {error ? (
                    <div className="invalid-feedback">{error}</div>
                ) : (
                    <div className="valid-feedback"></div>
                )}
            </div>
        </div>
    );
};
TextField.defaultProps = {
    type: "text"
};
TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default TextField;
