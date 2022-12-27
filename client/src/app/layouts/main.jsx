import React, { useState } from "react";
// import httpService from "./services/http.service";
// import { useRoutes } from "react-router";
// import routes from "./routes";
// import SideBar from "./components/sideBar";
// import API from "../api";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategories } from "../store/categories";
import { getProducts } from "../store/products";
import { getSubcategories } from "../store/subcategories";

const Main = () => {
    const products = useSelector(getProducts());
    const subcategories = useSelector(getSubcategories());
    const categories = useSelector(getCategories());

    const [productsList, setProductsList] = useState(products);

    const filterSubcategories = (catId) => {
        return subcategories.filter((s) => catId === s.categoryId);
    };

    const filterProducts = (subcatId) => {
        const filteredProducts = products.filter(
            (p) => p.subcategoryId === subcatId
        );
        setProductsList(filteredProducts);
    };

    const renderAllProducts = () => {
        setProductsList(products);
    };

    return (
        <div className="my-container">
            <div className="d-flex">
                <div className="d-flex flex-column pt-2 mb-2 ps-2 col-3 shadow p-3 mb-5 bg-body-tertiary rounded">
                    <h4>КАТЕГОРИИ</h4>
                    {categories.map((c) => (
                        <div key={c._id} className="mb-2 cursor dropend">
                            <div
                                className="text-wrap category-hover"
                                data-bs-toggle="dropdown"
                            >
                                {c.name}
                            </div>
                            <div className="dropdown-menu">
                                {filterSubcategories(c._id).map((s) => (
                                    <div
                                        className="dropdown-item category-hover bg-transparent text-wrap"
                                        onClick={() => filterProducts(s._id)}
                                        key={s._id}
                                    >
                                        {s.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div
                        className="category-hover bg-transparent cursor text-wrap"
                        onClick={renderAllProducts}
                    >
                        Все товары
                    </div>
                </div>

                <div
                    className={
                        "d-flex justify-content-start flex-wrap ms-1 p-0 col-9"
                    }
                >
                    {productsList.map((p) => (
                        <>
                            <Link className="nav-link" to={`product/${p._id}`}>
                                <div
                                    key={p._id}
                                    className="d-flex card border-dark mb-2 mx-1 cursor"
                                    style={{ width: "18rem" }}
                                >
                                    <div className="img-wrapper d-flex flex-column justify-content-center">
                                        <img
                                            src={p.image}
                                            className="mx-auto img-list"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="pt-3 px-3">
                                        <span>
                                            {filterSubcategories(
                                                p.subcategoryId
                                            )}
                                        </span>
                                        <div className="product-name-wrapper d-flex align-items-start">
                                            <h5 className="card-title">
                                                {p.name}
                                            </h5>
                                        </div>
                                        <div className="d-inline-block bg-light text-dark border rounded border-dark mb-3 px-1">
                                            <h4>{p.price} р.</h4>
                                        </div>
                                    </div>
                                    <button className="btn btn-dark mb-3 rounded-0">
                                        В КОРЗИНУ
                                    </button>
                                </div>
                            </Link>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Main;
