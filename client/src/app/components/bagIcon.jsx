import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getBagProducts } from "../store/bagProducts";
import _ from "lodash";
import { Link } from "react-router-dom";

const BagIcon = () => {
    const productsInBag = useSelector(getBagProducts());
    const numberOfProducts = productsInBag ? productsInBag?.length : 0;
    const [amount, setAmount] = useState(0);

    const totalPrice = productsInBag
        ? productsInBag?.reduce((acc, p) => {
              return (acc += p.price * p.total);
          }, 0)
        : 0;

    useEffect(() => {
        setAmount(numberOfProducts);
    }, [numberOfProducts]);
    return (
        <div>
            <Link className="nav-link" to={"/bag"}>
                <button type="button" className="btn position-relative">
                    <h3>
                        <i className="bi bi-cart3"></i>
                    </h3>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                        {amount}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </button>
                <b>{totalPrice} р.</b>
            </Link>
        </div>
    );
};

BagIcon.propTypes = {
    amount: PropTypes.number
};

export default BagIcon;
