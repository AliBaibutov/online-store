import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { createBagProduct, getBagProducts } from "../store/bagProducts";

const ToBagButton = ({ id, products }) => {
    const dispatch = useDispatch();

    const productsInBag = useSelector(getBagProducts());
    const productsWithoutDuplicate = _.uniq(productsInBag);

    const handleBtnName = ({ target }) => {
        const btnDark = "btn btn-dark mb-3 rounded";
        const btnLight = "btn btn-success mb-3 rounded border border-secondary";
        target.textContent =
            target.textContent === "В КОРЗИНУ" ? "В КОРЗИНЕ" : "В КОРЗИНЕ";
        if (target.textContent === "В КОРЗИНУ") {
            target.className = btnDark;
        } else {
            target.className = btnLight;
        }

        const productId = target.id;

        const product = Array.isArray(products)
            ? products.find((p) => p._id === productId)
            : products;

        dispatch(createBagProduct(product));
    };

    return productsWithoutDuplicate.length > 0 ? (
        productsWithoutDuplicate.find((bp) => bp._id === id) ? (
            <button
                className="btn btn-success mb-3 rounded border border-secondary"
                onClick={handleBtnName}
                id={id}
            >
                В КОРЗИНЕ
            </button>
        ) : (
            <button
                className="btn btn-dark mb-3 rounded"
                onClick={handleBtnName}
                id={id}
            >
                В КОРЗИНУ
            </button>
        )
    ) : (
        <button
            className="btn btn-dark mb-3 rounded"
            onClick={handleBtnName}
            id={id}
        >
            В КОРЗИНУ
        </button>
    );
};

ToBagButton.propTypes = {
    id: PropTypes.string,
    products: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default ToBagButton;
