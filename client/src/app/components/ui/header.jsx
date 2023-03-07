import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../ui/loginForm";
import RegisterForm from "../ui/registerForm";
import logo from "../../../imgs/logo.png";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../store/users";
import NavProfile from "../ui/navProfile";
import { getSwitchStatus } from "../../store/theme";
import useTheme from "../hooks/useTheme";
import Switch from "../ui/switch";

const Header = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const status = useSelector(getSwitchStatus());

    const { bg, btnColor } = useTheme(status);

    return (
        <>
            <div className={`${bg} text-light mb-4 fix-header`}>
                <div className="header-container d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    {isLoggedIn ? (
                        <NavProfile btnColor={btnColor} />
                    ) : (
                        <div className="d-flex align-items-center">
                            <Switch />
                            <div>
                                <button
                                    className={`btn ${btnColor}`}
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
                                    className={`btn ${btnColor}`}
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
            <RegisterForm btnColor={btnColor} />
            <LoginForm btnColor={btnColor} />
        </>
    );
};

export default Header;
