import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserData, updateUser } from "../store/users";
import OrderingCard from "./orderingCard";
import BagIconForAuthUser from "./bagIconForAuthUser";
import IncDecBtns from "./incDecBtns";
import { Link } from "react-router-dom";

const BagPageForAuthUser = ({ bg, bgBagIcon, btnColor, btnOutlineColor }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(getCurrentUserData());
    const bag = currentUser?.bag;
    const handleRemove = (id) => {
        const updatedBag = bag?.filter((p) => p._id !== id);
        dispatch(updateUser({ ...currentUser, bag: updatedBag }));
    };

    const handleIncrement = (id) => {
        const updatedProduct = bag.find((p) => p._id === id);
        let { total } = updatedProduct;
        const updatedUser = {
            ...currentUser,
            bag: bag.map((p) =>
                p === updatedProduct
                    ? { ...updatedProduct, total: (total += 1) }
                    : p
            )
        };
        dispatch(updateUser(updatedUser));
    };

    const handleDecrement = (id) => {
        const updatedProduct = bag.find((p) => p._id === id);
        let { total } = updatedProduct;
        const updatedUser = {
            ...currentUser,
            bag: bag.map((p) =>
                p === updatedProduct
                    ? total > 1
                        ? { ...updatedProduct, total: (total -= 1) }
                        : p
                    : p
            )
        };
        dispatch(updateUser(updatedUser));
    };

    const totalPriceForAuth = bag
        ? bag?.reduce((acc, p) => {
              return (acc += p.price * p.total);
          }, 0)
        : 0;

    return (
        <div className="my-container">
            <div className="text-center">
                <h1>Корзина</h1>
            </div>
            <div className="text-end">
                <BagIconForAuthUser bgBagIcon={bgBagIcon} />
            </div>
            {bag?.length ? (
                bag.map((p) => (
                    <div
                        key={p._id}
                        className="d-flex flex-column border-bottom mb-2 mb-md-0 pb-2 pb-md-0"
                    >
                        <div className="d-flex justify-content-center">
                            <div className="d-flex flex-column align-items-center flex-md-row">
                                <div className="d-flex flex-column me-xl-5 flex-xl-row align-items-center">
                                    <Link
                                        className="nav-link"
                                        to={`/product/${p._id}`}
                                    >
                                        <div className="d-flex flex-column align-items-center justify-content-center img-wrapper text-center">
                                            <img
                                                src={p.image}
                                                className="mx-auto img-list"
                                                alt="..."
                                            />
                                        </div>
                                    </Link>
                                    <div className="bag-product-name text-center text-xl-start">
                                        <Link
                                            className="nav-link"
                                            to={`/product/${p._id}`}
                                        >
                                            <h5>{p.name}</h5>
                                        </Link>
                                    </div>
                                </div>
                                <IncDecBtns
                                    onDecrement={handleDecrement}
                                    onIncrement={handleIncrement}
                                    productId={p._id}
                                    total={p.total}
                                    price={p.price}
                                    btnOutlineColor={btnOutlineColor}
                                />
                            </div>
                            <div className="d-flex flex-column flex-md-row justify-content-between align-items-end align-items-md-center gap-md-5">
                                <div className="bag-product-price mt-50px d-flex justify-content-end">
                                    <h5 className="border border-dark rounded-3 m-0 bag-price">
                                        {p.price * p.total} р.
                                    </h5>
                                </div>
                                <div className="mb-38px">
                                    <button
                                        className="btn btn-outline-danger rounded-3"
                                        onClick={() => handleRemove(p._id)}
                                    >
                                        <i className="bi bi-trash-fill"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <h3 className="text-center">Корзина пуста</h3>
            )}
            <OrderingCard
                total={totalPriceForAuth}
                bg={bg}
                btnColor={btnColor}
            />
        </div>
    );
};

BagPageForAuthUser.propTypes = {
    bg: PropTypes.string,
    bgBagIcon: PropTypes.string,
    btnColor: PropTypes.string,
    btnOutlineColor: PropTypes.string
};

export default BagPageForAuthUser;
