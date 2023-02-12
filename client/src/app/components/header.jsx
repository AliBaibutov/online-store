import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import logo from "../../imgs/logo.png";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../store/users";
import NavProfile from "./navProfile";
// import RegisterModalWrapper from "./registerModalWrapper";
// import LoginModalWrapper from "./loginModalWrapper";

const Header = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());

    return (
        <>
            <div className="bg-dark text-light mb-4">
                <div className="header-container d-flex justify-content-between align-items-center">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    {isLoggedIn ? (
                        <NavProfile />
                    ) : (
                        <div className="d-flex">
                            <div>
                                <button
                                    className="btn btn-dark"
                                    data-bs-toggle="modal"
                                    data-bs-target="#registerModal"
                                >
                                    <div>
                                        <i className="bi bi-journal-text"></i>
                                    </div>
                                    <div>Регистрация</div>
                                </button>
                            </div>
                            <div>
                                <button
                                    className="btn btn-dark"
                                    data-bs-toggle="modal"
                                    data-bs-target="#loginModal"
                                >
                                    <div>
                                        <i className="bi bi-person-circle"></i>
                                    </div>
                                    <div>Войти</div>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <RegisterForm />
            <LoginForm />
        </>
    );
};

export default Header;
