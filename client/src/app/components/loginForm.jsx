import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getAuthErrors, logIn } from "../store/users";
import { validator } from "../utils/validator";
import TextField from "./form/textField";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = ({ btnColor }) => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const loginError = useSelector(getAuthErrors());
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            }
        },
        password: {
            isRequired: { message: "Пароль обязателен для заполнения" }
        }
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        dispatch(logIn({ payload: data }));
    };
    return (
        <div
            className="modal fade"
            id="loginModal"
            tabIndex="-1"
            aria-labelledby="loginModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="loginModalLabel">
                            Вход
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Электронная почта"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                error={errors.email}
                            />
                            <TextField
                                label="Пароль"
                                type="password"
                                name="password"
                                value={data.password}
                                onChange={handleChange}
                                error={errors.password}
                            />
                            {loginError && (
                                <p className="text-danger">{loginError}</p>
                            )}
                            <button
                                type="submit"
                                disabled={!isValid}
                                className={`btn ${btnColor} opacity-100 w-100 mx-auto`}
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                Войти
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

LoginForm.propTypes = {
    btnColor: PropTypes.string
};

export default LoginForm;
