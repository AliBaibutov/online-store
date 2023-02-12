import _ from "lodash";
import React from "react";
// import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    decrementTotalValue,
    // createBagProduct,
    getBagProducts,
    incrementTotalValue,
    removeBagProduct
} from "../store/bagProducts";
import BagIcon from "./bagIcon";

const BagPage = () => {
    const dispatch = useDispatch();
    const productsInBag = useSelector(getBagProducts());
    // const [amount, setAmount] = useState(1);

    const handleRemove = (id) => {
        dispatch(removeBagProduct(id));
    };

    // const handleCreateProduct = (id) => {
    //     const product = productsInBag.find((p) => p._id === id);
    //     // const currentProductArr = productsInBag.reduce(
    //     //     (acc, p) => {
    //     //         if (p._id === id) {
    //     //             acc.push(p);
    //     //         }
    //     //         console.log(acc);
    //     //         return acc;
    //     //     },
    //     //     [product]
    //     // );
    //     // const amountOfCurrentProduct = currentProductArr.length;
    //     // setAmount(amountOfCurrentProduct);
    //     dispatch(createBagProduct(product));
    // };

    return (
        <div className="my-container">
            <div className="text-end">
                <BagIcon />
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
                            <div className="mt-15px">
                                <button
                                    className="btn btn-outline-dark rounded-3 m-2 amount-button"
                                    onClick={() =>
                                        dispatch(decrementTotalValue(p._id))
                                    }
                                >
                                    -
                                </button>
                                {p.total}
                                <button
                                    className="btn btn-outline-dark rounded-3 m-2 amount-button"
                                    onClick={() =>
                                        dispatch(incrementTotalValue(p._id))
                                    }
                                >
                                    +
                                </button>
                                <div className="text-secondary text-center">
                                    {p.price} р. за шт.
                                </div>
                            </div>
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
        </div>
    );
};

export default BagPage;
