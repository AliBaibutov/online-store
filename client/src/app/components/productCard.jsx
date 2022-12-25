import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductById } from "../store/products";
import { getSubcategoryById } from "../store/subcategories";

const ProductCard = () => {
    const params = useParams();
    const productId = params.productId;
    const product = useSelector(getProductById(productId));
    const subcategory = useSelector(getSubcategoryById(product.subcategoryId));
    console.log(subcategory);

    return (
        <div className="my-container d-flex justify-content-center">
            <div className="card col-6">
                <span>{subcategory.name}</span>
                <h3>{product.name}</h3>
                <img
                    src={product.cardImg}
                    className="mx-auto img-card"
                    alt="..."
                />
            </div>
            <div className="card d-flex flex-column justify-content-center col-3">
                <h3>{product.price}</h3>
                <button className="btn btn-dark mb-3 rounded-0">
                    В КОРЗИНУ
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
