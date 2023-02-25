import React from "react";
import PropTypes from "prop-types";

const IncDecBtns = ({
    onDecrement,
    onIncrement,
    productId,
    total,
    price,
    btnOutlineColor
}) => {
    return (
        <div className="mt-15px">
            <button
                className={`btn ${btnOutlineColor} rounded-3 m-2 amount-button`}
                onClick={() => onDecrement(productId)}
            >
                -
            </button>
            {total}
            <button
                className={`btn ${btnOutlineColor} rounded-3 m-2 amount-button`}
                onClick={() => onIncrement(productId)}
            >
                +
            </button>
            <div className="text-secondary text-center">{price} р. за шт.</div>
        </div>
    );
};

IncDecBtns.propTypes = {
    onDecrement: PropTypes.func,
    onIncrement: PropTypes.func,
    productId: PropTypes.string,
    total: PropTypes.number,
    price: PropTypes.number,
    btnOutlineColor: PropTypes.string
};

export default IncDecBtns;
