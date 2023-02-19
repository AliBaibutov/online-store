import React from "react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserData, updateUser } from "../store/users";
import OrderingCard from "./orderingCard";
import BagIconForAuthUser from "./bagIconForAuthUser";
import IncDecBtns from "./incDecBtns";

const BagPageForAuthUser = () => {
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
                <BagIconForAuthUser />
            </div>
            {bag?.length ? (
                bag.map((p) => (
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
            <OrderingCard total={totalPriceForAuth} />
        </div>
    );
};

export default BagPageForAuthUser;
