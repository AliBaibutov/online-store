import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addToBag, getCurrentUserData, updateUser } from "../store/users";

const ToBagBtnForAuthUser = ({ id, products }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(getCurrentUserData());

    const handleBtnName = ({ target }) => {
        const productId = target.id;

        const product = Array.isArray(products)
            ? products.find((p) => p._id === productId)
            : products;

        dispatch(addToBag({ ...product, total: 1 })) && dispatch(updateUser());
    };

    return currentUser?.bag.length > 0 ? (
        currentUser?.bag.find((bp) => bp._id === id) ? (
            <button
                className="btn btn-success mb-3 rounded border border-secondary"
                id={id}
                disabled
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

ToBagBtnForAuthUser.propTypes = {
    id: PropTypes.string,
    products: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default ToBagBtnForAuthUser;
