import React from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import { Link } from "react-router-dom";
import { getCurrentUserData } from "../store/users";

const BagIconForAuthUser = () => {
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
            <Link className="nav-link" to={"/bag"}>
                <button type="button" className="btn position-relative">
                    <h3>
                        <i className="bi bi-cart3"></i>
                    </h3>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                        {amountForAuth}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </button>
                <b>{totalPriceForAuth} р.</b>
            </Link>
        </div>
    );
};

export default BagIconForAuthUser;
