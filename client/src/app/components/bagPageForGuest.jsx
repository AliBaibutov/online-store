import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import {
    decrementTotalValue,
    getBagProducts,
    incrementTotalValue,
    removeBagProduct
} from "../store/bagProducts";
import OrderingCard from "./orderingCard";
import BagIconForGuest from "./bagIconForGuest";
import IncDecBtns from "./incDecBtns";

const BagPageForGuest = ({ bg, bgBagIcon, btnColor, btnOutlineColor }) => {
    const dispatch = useDispatch();
    const productsInBag = useSelector(getBagProducts());
    const handleRemove = (id) => {
        dispatch(removeBagProduct(id));
    };

    const handleIncrement = (id) => {
        dispatch(incrementTotalValue(id));
    };

    const handleDecrement = (id) => {
        dispatch(decrementTotalValue(id));
    };

    const totalPrice = productsInBag
        ? productsInBag?.reduce((acc, p) => {
              return (acc += p.price * p.total);
          }, 0)
        : 0;

    return (
        <div className="my-container">
            <div className="text-center">
                <h1>Корзина</h1>
            </div>
            <div className="text-end">
                <BagIconForGuest bgBagIcon={bgBagIcon} />
            </div>
            {productsInBag?.length ? (
                productsInBag.map((p) => (
                    <div
                        key={p._id}
                        className="d-flex flex-column border-bottom"
                    >
                        <div className="d-flex justify-content-center gap-5 align-items-center">
                            <div className="d-flex flex-column align-items-center justify-content-center img-wrapper text-center">
                                <img
                                    src={p.image}
                                    className="mx-auto img-list"
                                    alt="..."
                                />
                            </div>
                            <div className="d-flex flex-column align-items-start bag-product-name">
                                <h5>{p.name}</h5>
                            </div>
                            <IncDecBtns
                                onDecrement={handleDecrement}
                                onIncrement={handleIncrement}
                                productId={p._id}
                                total={p.total}
                                price={p.price}
                                btnOutlineColor={btnOutlineColor}
                            />
                            <div className="bag-product-price d-flex justify-content-center">
                                <h5>{p.price * p.total} р.</h5>
                            </div>
                            <div>
                                <button
                                    className="btn btn-outline-danger rounded-3"
                                    onClick={() => handleRemove(p._id)}
                                >
                                    <i className="bi bi-trash-fill"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <h3 className="text-center">Корзина пуста</h3>
            )}
            <OrderingCard total={totalPrice} bg={bg} btnColor={btnColor} />
        </div>
    );
};

BagPageForGuest.propTypes = {
    bg: PropTypes.string,
    bgBagIcon: PropTypes.string,
    btnColor: PropTypes.string,
    btnOutlineColor: PropTypes.string
};

export default BagPageForGuest;
