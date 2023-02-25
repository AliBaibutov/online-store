import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { createBagProduct, getBagProducts } from "../../store/bagProducts";

const ToBagBtnForGuest = ({ id, products, btnColor, btnInBagColor }) => {
    const dispatch = useDispatch();
    const productsInBag = useSelector(getBagProducts());

    const handleBtnName = ({ target }) => {
        const productId = target.id;

        const product = Array.isArray(products)
            ? products.find((p) => p._id === productId)
            : products;

        dispatch(createBagProduct({ ...product, total: 1 }));
    };

    if (productsInBag?.length > 0) {
        if (productsInBag?.find((bp) => bp._id === id)) {
            return (
                <button
                    className={`btn ${btnInBagColor} mb-3 rounded border border-secondary`}
                    id={id}
                    disabled
                >
                    В КОРЗИНЕ
                </button>
            );
        } else {
            return (
                <button
                    className={`btn ${btnColor} mb-3 rounded`}
                    onClick={handleBtnName}
                    id={id}
                >
                    В КОРЗИНУ
                </button>
            );
        }
    } else {
        return (
            <button
                className={`btn ${btnColor} mb-3 rounded`}
                onClick={handleBtnName}
                id={id}
            >
                В КОРЗИНУ
            </button>
        );
    }
};

ToBagBtnForGuest.propTypes = {
    id: PropTypes.string,
    btnColor: PropTypes.string,
    btnInBagColor: PropTypes.string,
    products: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default ToBagBtnForGuest;
