import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { signUp } from "../../store/users";
import { useDispatch } from "react-redux";
import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";
import { registerConfig } from "../../validator-configs/registerConfig";

const RegisterForm = ({ btnColor }) => {
    const dispatch = useDispatch();

    const initState = {
        name: "",
        surname: "",
        email: "",
        password: "",
        isAdmin: false
    };

    const [data, setData] = useState(initState);
    const [errors, setErrors] = useState({});

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, registerConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const newData = {
            ...data
        };

        dispatch(signUp(newData));
    };

    return (
        <div
            className="modal fade"
            id="registerModal"
            tabIndex="-1"
            aria-labelledby="registerModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1
                            className="modal-title fs-5"
                            id="registerModalLabel"
                        >
                            Регистрация
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
                                label="Имя"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <TextField
                                label="Фамилия"
                                name="surname"
                                value={data.surname || ""}
                                onChange={handleChange}
                                error={errors.surname}
                            />
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
                            <button
                                type="submit"
                                disabled={!isValid}
                                className={`btn ${btnColor} opacity-100 w-100 mx-auto`}
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                Зарегистрироваться
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

RegisterForm.propTypes = {
    btnColor: PropTypes.string
};

export default RegisterForm;
