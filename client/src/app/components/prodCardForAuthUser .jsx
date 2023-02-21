import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductById } from "../store/products";
import { getSubcategoryById } from "../store/subcategories";
import BagIconForAuthUser from "./bagIconForAuthUser";
import ToBagBtnForAuthUser from "./toBagBtnForAuthUser";

const ProdCardForAuthUser = ({ bgBagIcon, btnInBagColor, btnColor }) => {
    const params = useParams();
    const productId = params.productId;
    const product = useSelector(getProductById(productId));
    const subcategory = useSelector(getSubcategoryById(product.subcategoryId));
    return (
        <div className="my-container">
            <div className="d-flex flex-column align-items-end">
                <BagIconForAuthUser bgBagIcon={bgBagIcon} />
                <div className="d-flex col-12 justify-content-center mb-56px">
                    <div className="d-flex flex-column align-items-center col-4 shadow p-3 bg-body-tertiary rounded me-3">
                        <span className="text-center">{subcategory.name}</span>
                        <h3 className="text-center mb-4">{product.name}</h3>
                        <img
                            src={product.image}
                            className="mx-auto card-img"
                            alt="..."
                        />
                    </div>
                    <div className="d-flex flex-column justify-content-between col-4 shadow p-3 bg-body-tertiary rounded">
                        <div>
                            <h2>Описание товара</h2>
                            <p>{product.description}</p>
                        </div>
                        <div>
                            <h3 className="price-text">{product.price} </h3>
                            <ToBagBtnForAuthUser
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

ProdCardForAuthUser.propTypes = {
    bgBagIcon: PropTypes.string,
    btnInBagColor: PropTypes.string,
    btnColor: PropTypes.string
};

export default ProdCardForAuthUser;
