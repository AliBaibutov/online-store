import _ from "lodash";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    createBagProduct,
    getBagProducts,
    removeBagProduct
} from "../store/bagProducts";
import BagIcon from "./bagIcon";

const BagPage = () => {
    const dispatch = useDispatch();
    const productsInBag = useSelector(getBagProducts());
    const [amount, setAmount] = useState(1);

    const handleRemove = (id) => {
        dispatch(removeBagProduct(id));
    };

    const handleCreateProduct = (id) => {
        const product = productsInBag.find((p) => p._id === id);
        const currentProductArr = productsInBag.reduce((acc, p) => {
            if (p._id === id) {
                acc.push(p);
            }
            return acc;
        }, []);
        const amountOfCurrentProduct = currentProductArr.length;
        setAmount(amountOfCurrentProduct);
        dispatch(createBagProduct(product));
    };

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
                            <div>
                                <button className="btn btn-outline-dark btn-sm m-2 amount-button">
                                    -
                                </button>
                                {amount}
                                <button
                                    className="btn btn-outline-dark btn-sm m-2 amount-button"
                                    onClick={() => handleCreateProduct(p._id)}
                                >
                                    +
                                </button>
                            </div>
                            <div>
                                <h5>{p.price} р.</h5>
                            </div>
                            <div>
                                <button
                                    className="btn btn-outline-danger"
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
