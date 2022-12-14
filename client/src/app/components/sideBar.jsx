import React from "react";

const SideBar = () => {
    return (
        <ul className="nav flex-column me-4">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                    Категории
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    Link
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    Link
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link">Disabled</a>
            </li>
        </ul>
    );
};

export default SideBar;
