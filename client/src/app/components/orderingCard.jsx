import React from "react";
import PropTypes from "prop-types";

const OrderingCard = ({ total, bg, btnColor }) => {
    return (
        <div className="d-flex flex-row-reverse mt-3">
            <div
                className={`card text-${bg} mb-3 d-flex w-25 shadow-lg border-0 card-total-bag`}
            >
                <div className="card-header d-flex justify-content-around">
                    <h2>Итого:</h2>
                    <h2 className="price-text-bag">{total + " "}</h2>
                </div>
                <div className="card-body bg-white">
                    <button className={`btn ${btnColor} w-100`}>
                        <h5>Оформить заказ</h5>
                    </button>
                </div>
            </div>
        </div>
    );
};

OrderingCard.propTypes = {
    total: PropTypes.number,
    bg: PropTypes.string,
    btnColor: PropTypes.string
};

export default OrderingCard;
