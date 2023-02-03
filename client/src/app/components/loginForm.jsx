import React, { useEffect, useState } from "react";
import { validator } from "../utils/validator";
import TextField from "./form/textField";
// import { useHistory } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getAuthErrors, logIn } from "../../store/users";

const LoginForm = () => {
    // const history = useHistory();
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    // const loginError = useSelector(getAuthErrors());
    // const dispatch = useDispatch();
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
        console.log(data);
        // const redirect = history.location.state
        //     ? history.location.state.from.pathname
        //     : "/";
        // return dispatch(logIn({ payload: data, redirect }));
    };
    return (
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
            {/* {loginError && <p className="text-danger">{loginError}</p>} */}
            <button
                type="submit"
                disabled={!isValid}
                className="btn btn-dark opacity-100 w-100 mx-auto"
            >
                Войти
            </button>
        </form>
    );
};

export default LoginForm;
