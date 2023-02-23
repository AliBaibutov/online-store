import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductById } from "../store/products";
import { getSubcategoryById } from "../store/subcategories";
import BagIconForGuest from "./bagIconForGuest";
import ToBagBtnForGuest from "./toBagBtnForGuest";

const ProdCardForGuest = ({ bgBagIcon, btnInBagColor, btnColor }) => {
    const params = useParams();
    const productId = params.productId;
    const product = useSelector(getProductById(productId));
    const subcategory = useSelector(getSubcategoryById(product.subcategoryId));
    return (
        <div className="my-container">
            <div className="d-flex flex-column align-items-end">
                <BagIconForGuest bgBagIcon={bgBagIcon} />
                <div className="d-flex flex-column align-items-center align-items-lg-stretch flex-lg-row col-12 justify-content-lg-center mb-56px">
                    <div className="d-flex flex-column align-items-center col-12 col-md-6 col-lg-4 shadow p-3 bg-body-tertiary rounded mt-4 mt-md-0 mb-4 mb-lg-0 me-lg-3">
                        <span className="text-center">{subcategory.name}</span>
                        <h3 className="text-center mb-4">{product.name}</h3>
                        <img
                            src={product.image}
                            className="mx-auto card-img"
                            alt="..."
                        />
                    </div>
                    <div className="d-flex flex-column justify-content-between col-12 col-md-6 col-lg-4 shadow p-3 bg-body-tertiary rounded">
                        <div>
                            <h2>Описание товара</h2>
                            <p>{product.description}</p>
                        </div>
                        <div>
                            <h3 className="price-text mb-2">
                                {product.price}{" "}
                            </h3>
                            <ToBagBtnForGuest
                                id={productId}
                                products={product}
                                btnInBagColor={btnInBagColor}
                                btnColor={btnColor}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProdCardForGuest.propTypes = {
    bgBagIcon: PropTypes.string,
    btnInBagColor: PropTypes.string,
    btnColor: PropTypes.string
};

export default ProdCardForGuest;
