import React, { useEffect, useRef, useState } from "react";
import { getAuthErrors, logIn } from "../store/users";
import { validator } from "../utils/validator";
import TextField from "./form/textField";
// import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = () => {
    // const history = useHistory();
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const logModalRef = useRef();

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

    // const handleHide = () => {
    //     const hide = document.querySelector(".show");
    //     hide.className = "modal-backdrop fade show";
    //     console.log(hide);
    //     document.body.append(hide);
    //     console.log(document.body);
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        // logModalRef.current.style.cssText = "display: none";
        // console.log(logModalRef.current);
        // document.body.removeAttribute("style");
        // document.body.removeAttribute("class");
        // const modalBackdrop = document.getElementsByClassName(
        //     "modal-backdrop fade show"
        // );
        // // console.log(modalBackdrop[0]);
        // modalBackdrop[0].className = "show";
        dispatch(logIn({ payload: data }));
    };
    return (
        <div
            className="modal fade"
            id="loginModal"
            tabIndex="-1"
            aria-labelledby="loginModalLabel"
            aria-hidden="true"
            ref={logModalRef}
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
                            // onClick={handleHide}
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
                                className="btn btn-dark opacity-100 w-100 mx-auto"
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

export default LoginForm;
