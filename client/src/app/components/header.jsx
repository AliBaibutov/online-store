import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import logo from "../../imgs/logo.png";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../store/users";
import NavProfile from "./navProfile";
import { getSwitchStatus } from "../store/theme";
import useTheme from "./hooks/useTheme";
import Switch from "./switch";

const Header = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const status = useSelector(getSwitchStatus());

    const { bg, bgSwitch, btnColor } = useTheme(status);

    return (
        <>
            <div className={`${bg} text-light mb-4 fix-header`}>
                <div className="header-container d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    {isLoggedIn ? (
                        <NavProfile bgSwitch={bgSwitch} btnColor={btnColor} />
                    ) : (
                        <div className="d-flex align-items-center">
                            <Switch bgSwitch={bgSwitch} />
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

// eslint-disable-next-line no-lone-blocks
{
    /* <>
            <div className={`${bg} text-light mb-4 fix-header`}>
                <div className="header-container d-flex justify-content-between align-items-center">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    {isLoggedIn ? (
                        <NavProfile bgSwitch={bgSwitch} btnColor={btnColor} />
                    ) : (
                        <div className="d-flex align-items-center">
                            <Switch bgSwitch={bgSwitch} />
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
        </> */
}
