import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import _ from "lodash";
import { Link } from "react-router-dom";
import { getCurrentUserData } from "../store/users";

const BagIconForAuthUser = ({ bgBagIcon }) => {
    const currentUser = useSelector(getCurrentUserData());
    const bag = currentUser?.bag;
    const amountForAuth = bag?.length;

    const totalPriceForAuth = bag
        ? bag?.reduce((acc, p) => {
              return (acc += p.price * p.total);
          }, 0)
        : 0;

    return (
        <div>
            <Link
                className="d-flex flex-column align-items-end flex-md-row align-items-md-center justify-content-md-end nav-link mb-2"
                to={"/bag"}
            >
                <button type="button" className="btn position-relative">
                    <h3>
                        <i className="bi bi-cart3"></i>
                    </h3>
                    <span
                        className={`position-absolute top-0 start-100 translate-middle badge rounded-pill ${bgBagIcon}`}
                    >
                        {amountForAuth}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </button>
                <b>{totalPriceForAuth} р.</b>
            </Link>
        </div>
    );
};

BagIconForAuthUser.propTypes = {
    bgBagIcon: PropTypes.string
};

export default BagIconForAuthUser;
