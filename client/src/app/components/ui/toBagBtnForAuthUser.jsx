import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addToBag, getCurrentUserData, updateUser } from "../../store/users";

const ToBagBtnForAuthUser = ({ id, products, btnColor, btnInBagColor }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(getCurrentUserData());

    const handleBtnName = ({ target }) => {
        const productId = target.id;

        const product = Array.isArray(products)
            ? products.find((p) => p._id === productId)
            : products;

        dispatch(addToBag({ ...product, total: 1 })) && dispatch(updateUser());
    };

    if (currentUser?.bag.length > 0) {
        if (currentUser?.bag.find((bp) => bp._id === id)) {
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

ToBagBtnForAuthUser.propTypes = {
    id: PropTypes.string,
    btnColor: PropTypes.string,
    btnInBagColor: PropTypes.string,
    products: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default ToBagBtnForAuthUser;
