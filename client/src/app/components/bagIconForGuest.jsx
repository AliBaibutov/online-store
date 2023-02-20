import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getBagProducts } from "../store/bagProducts";
import _ from "lodash";
import { Link } from "react-router-dom";

const BagIconForGuest = ({ bgBagIcon }) => {
    const productsInBag = useSelector(getBagProducts());
    const numberOfProducts = productsInBag ? productsInBag?.length : 0;

    const totalPrice = productsInBag
        ? productsInBag?.reduce((acc, p) => {
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
                    <span
                        className={`position-absolute top-0 start-100 translate-middle badge rounded-pill ${bgBagIcon}`}
                    >
                        {numberOfProducts}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </button>
                <b>{totalPrice} р.</b>
            </Link>
        </div>
    );
};

BagIconForGuest.propTypes = {
    bgBagIcon: PropTypes.string
};

export default BagIconForGuest;
