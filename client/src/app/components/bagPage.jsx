import _ from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { getBagProducts } from "../store/bagProducts";
import Bag from "./bag";

const BagPage = () => {
    const productsInBag = useSelector(getBagProducts());
    const productsWithoutDuplicate = _.uniq(productsInBag);
    console.log(productsWithoutDuplicate);

    return (
        <div className="my-container">
            <div className="text-end">
                <Bag />
            </div>
            {productsWithoutDuplicate.length ? (
                productsWithoutDuplicate.map((p) => (
                    <div key={p._id} className="d-flex flex-column">
                        <div className="d-flex justify-content-around align-items-center">
                            <div className="img-wrapper text-center">
                                <img
                                    src={p.image}
                                    className="mx-auto img-list"
                                    alt="..."
                                />
                            </div>
                            <div>
                                <b>{p.name}</b>
                            </div>
                            <div>3123213</div>
                            <div>sffdsdf</div>
                            <div>sdfsdfs</div>
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
