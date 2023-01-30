import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getBagProducts } from "../store/bagProducts";
import _ from "lodash";
import { Link } from "react-router-dom";

const Bag = () => {
    const productsInBag = useSelector(getBagProducts());
    console.log(productsInBag);
    const productsWithoutDuplicate = _.uniq(productsInBag);
    const numberOfProducts = productsWithoutDuplicate.length;
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        setAmount(numberOfProducts);
    }, [productsInBag]);
    return (
        <div>
            <Link className="nav-link" to={"bag"}>
                <button type="button" className="btn position-relative">
                    <h3>
                        <i className="bi bi-cart3"></i>
                    </h3>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                        {amount}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </button>
                <b>0 р.</b>
            </Link>
        </div>
    );
};

Bag.propTypes = {
    amount: PropTypes.number
};

export default Bag;
