import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentUserData, loadUsersList } from "../store/users";
import Loader from "./loader";

const NavProfile = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUsersList());
    }, []);
    const currentUser = useSelector(getCurrentUserData());
    console.log(currentUser);
    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen((prevState) => !prevState);
    };
    if (!currentUser) return <Loader />;
    return (
        <div className="d-flex align-items-center">
            <div>
                {currentUser.isAdmin ? (
                    <Link className="link" to={"/admin"}>
                        <button className="btn btn-dark d-flex">
                            <div className="me-2">Админ-панель</div>
                            <h5>
                                <i className="bi bi-journal-richtext"></i>
                            </h5>
                        </button>
                    </Link>
                ) : null}
            </div>
            <div className="dropdown" onClick={toggleMenu}>
                <div className="btn btn-dark dropdown-toggle d-flex">
                    <div className="me-2">
                        {/* <h5> */}
                        {currentUser.name}
                        {/* </h5> */}
                    </div>
                    {/* <img
                    src={currentUser.image}
                    alt=""
                    className="img-responsive rounded-circle"
                    height="40"
                /> */}
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

export default NavProfile;
