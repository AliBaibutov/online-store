import React from "react";
import PropTypes from "prop-types";

const OrderingCard = ({ total }) => {
    return (
        <div className="d-flex flex-row-reverse mt-3">
            <div className="card text-bg-dark mb-3 d-flex w-25 shadow-lg border-0 card-total-bag">
                <div className="card-header d-flex justify-content-around">
                    <h2>Итого:</h2>
                    <h2 className="price-text-bag">{total + " "}</h2>
                </div>
                <div className="card-body bg-white">
                    <button className="btn btn-dark w-100">
                        <h5>Оформить заказ</h5>
                    </button>
                </div>
            </div>
        </div>
    );
};

OrderingCard.propTypes = {
    total: PropTypes.number
};

export default OrderingCard;
