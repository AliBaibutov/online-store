import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ToBagBtnForGuest from "./toBagBtnForGuest";

const ProdListForGuest = ({
    productCrop,
    getSubcategoryById,
    btnColor,
    btnInBagColor
}) => {
    return (
        <div className="d-flex flex-wrap justify-content-center justify-content-sm-start align-items-strech p-0 mt-2 gap-1 gap-md-4">
            {productCrop.map((p) => (
                <div
                    key={p._id}
                    className="d-flex flex-shrink-1 card cursor shadow p-3 bg-body-tertiary rounded card-width"
                >
                    <Link className="nav-link" to={`product/${p._id}`}>
                        <div className="img-wrapper d-flex align-items-center justify-content-center">
                            <img
                                src={p.image}
                                className="mx-auto img-list"
                                alt="..."
                            />
                        </div>
                        <div className="pt-3">
                            <div className="subcat-main">
                                {getSubcategoryById(p.subcategoryId).name}
                            </div>
                            <div className="product-name-wrapper d-flex align-items-start">
                                <h5>{p.name}</h5>
                            </div>
                            <div className="d-inline-block shadow-lg p-1 mb-5 bg-body text-warning rounded">
                                <h4 className="price-text">{p.price} </h4>
                            </div>
                        </div>
                    </Link>
                    <ToBagBtnForGuest
                        id={p._id}
                        products={productCrop}
                        btnColor={btnColor}
                        btnInBagColor={btnInBagColor}
                    />
                </div>
            ))}
        </div>
    );
};

ProdListForGuest.propTypes = {
    btnColor: PropTypes.string,
    btnInBagColor: PropTypes.string,
    getSubcategoryById: PropTypes.func,
    productCrop: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default ProdListForGuest;
