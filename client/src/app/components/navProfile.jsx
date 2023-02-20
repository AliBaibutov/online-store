import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentUserData, loadUsersList } from "../store/users";
import Loader from "./loader";
import Switch from "./switch";

const NavProfile = ({ bgSwitch, btnColor }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUsersList());
    }, []);
    const currentUser = useSelector(getCurrentUserData());
    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen((prevState) => !prevState);
    };
    if (!currentUser) return <Loader />;
    return (
        <div className="d-flex align-items-center">
            <Switch bgSwitch={bgSwitch} />
            <div>
                {currentUser.isAdmin ? (
                    <Link className="link" to={"/admin"}>
                        <button
                            className={`btn ${btnColor} d-flex align-items-center`}
                        >
                            <div className="me-2">Админ-панель</div>
                            <h5>
                                <i className="bi bi-journal-richtext"></i>
                            </h5>
                        </button>
                    </Link>
                ) : null}
            </div>
            <div className="dropdown" onClick={toggleMenu}>
                <div
                    className={`btn ${btnColor} dropdown-toggle d-flex align-items-center`}
                >
                    <div className="me-2">{currentUser.name}</div>
                    <h5>
                        <i className="bi bi-person-circle"></i>
                    </h5>
                </div>
                <div
                    className={"w-100 dropdown-menu" + (isOpen ? " show" : "")}
                >
                    <Link to="/logout" className="dropdown-item">
                        Выйти
                    </Link>
                </div>
            </div>
        </div>
    );
};

NavProfile.propTypes = {
    bgSwitch: PropTypes.string,
    btnColor: PropTypes.string
};

export default NavProfile;
