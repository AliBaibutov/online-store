import _ from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { getBagProducts } from "../store/bagProducts";
import BagIcon from "./bagIcon";

const BagPage = () => {
    const productsInBag = useSelector(getBagProducts());
    const productsWithoutDuplicate = _.uniq(productsInBag);

    return (
        <div className="my-container">
            <div className="text-end">
                <BagIcon />
            </div>
            {productsWithoutDuplicate.length ? (
                productsWithoutDuplicate.map((p) => (
                    <div key={p._id} className="d-flex flex-column">
                        <div className="d-flex justify-content-center gap-5 align-items-center">
                            <div className="d-flex flex-column align-items-center img-wrapper text-center">
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
                                1
                                <button className="btn btn-outline-dark btn-sm m-2 amount-button">
                                    +
                                </button>
                            </div>
                            <div>
                                <h5>{p.price} р.</h5>
                            </div>
                            <div>
                                <button className="btn btn-outline-danger">
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
