import React from "react";
import PropTypes from "prop-types";

const Bag = ({ amount }) => {
    // const [amount, setAmount] = useState(0);
    // const bagProductsList = JSON.parse(localStorage.getItem("bagProductsList"));
    // console.log(bagProductsList);
    // const numberOfProducts = bagProductsList.length;
    // useEffect(() => {
    //     setAmount(numberOfProducts);
    // }, [bagProductsList]);
    return (
        <div>
            <button type="button" className="btn position-relative">
                <h3>
                    <i className="bi bi-cart3"></i>
                </h3>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                    {amount}
                    <span className="visually-hidden">unread messages</span>
                </span>
            </button>
            <b>0 р.</b>
        </div>
    );
};

Bag.propTypes = {
    amount: PropTypes.number
};

export default Bag;
