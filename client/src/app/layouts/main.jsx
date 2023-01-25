import React, { useState } from "react";
// import httpService from "./services/http.service";
// import { useRoutes } from "react-router";
// import routes from "./routes";
// import SideBar from "./components/sideBar";
// import API from "../api";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategories, getCategoriesLoadingStatus } from "../store/categories";
import { getProducts, getProductsLoadingStatus } from "../store/products";
import {
    getSubcategories,
    getSubcategoriesLoadingStatus
} from "../store/subcategories";

const Main = () => {
    const products = useSelector(getProducts());
    const subcategories = useSelector(getSubcategories());
    const categories = useSelector(getCategories());
    const productsLoadingStatus = useSelector(getProductsLoadingStatus());
    const subcategoriesLoadingStatus = useSelector(
        getSubcategoriesLoadingStatus()
    );
    const categoriesLoadingStatus = useSelector(getCategoriesLoadingStatus());

    const [searchQuery, setSearchQuery] = useState("");
    const [productsList, setProductsList] = useState(products);

    const handleSearchQuery = ({ target }) => {
        setSearchQuery(target.value);
    };

    function searchUsers(data) {
        const searchedUsers = searchQuery
            ? data.filter(
                  (user) =>
                      user.name
                          .toLowerCase()
                          .indexOf(searchQuery.toLowerCase()) !== -1
              )
            : data;
        return searchedUsers;
    }

    const searchedProducts = searchUsers(productsList);

    const filterSubcategories = (catName) => {
        return subcategories.filter((s) => catName === s.catName);
    };

    const filterProducts = (subcatId) => {
        const filteredProducts = products.filter(
            (p) => p.subcategoryId === subcatId
        );
        setProductsList(filteredProducts);
    };

    const getSubcategoryById = (subcatId) => {
        return subcategories.find((s) => subcatId === s._id);
    };

    const renderAllProducts = () => {
        setProductsList(products);
    };

    return (
        <div className="my-container">
            {!productsLoadingStatus &&
                !subcategoriesLoadingStatus &&
                !categoriesLoadingStatus && (
                    <div className="d-flex">
                        <div className="d-flex flex-column pt-2 mb-2 ps-2 col-3 shadow p-3 bg-body-tertiary rounded">
                            <h4>КАТЕГОРИИ</h4>
                            {categories.map((c) => (
                                <div
                                    key={c._id}
                                    className="mb-2 cursor dropend"
                                >
                                    <div
                                        className="text-wrap category-hover"
                                        data-bs-toggle="dropdown"
                                    >
                                        {c.name}
                                    </div>
                                    <div className="dropdown-menu opacity-75">
                                        {filterSubcategories(c.name).map(
                                            (s) => (
                                                <div
                                                    className="dropdown-item category-hover bg-transparent"
                                                    onClick={() =>
                                                        filterProducts(s._id)
                                                    }
                                                    key={s._id}
                                                >
                                                    {s.name}
                                                </div>
                                            )
                                        )}
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
                        <div className="d-flex flex-column col-9">
                            <form className="ms-2 search-string input-group mb-3">
                                <input
                                    className="w-100 mx-auto form-control rounded"
                                    name="searchQuery"
                                    placeholder="Search..."
                                    type="text"
                                    aria-describedby="basic-addon1"
                                    value={searchQuery}
                                    onChange={handleSearchQuery}
                                />
                            </form>
                            <div className="d-flex flex-wrap ms-1 p-0">
                                {searchedProducts.map((p) => (
                                    <div
                                        key={p._id}
                                        className="d-flex card mb-2 mx-1 cursor shadow p-3 bg-body-tertiary rounded"
                                        style={{ width: "18rem" }}
                                    >
                                        <Link
                                            className="nav-link"
                                            to={`product/${p._id}`}
                                        >
                                            <div className="img-wrapper d-flex flex-column justify-content-center">
                                                <img
                                                    src={p.image}
                                                    className="mx-auto img-list"
                                                    alt="..."
                                                />
                                            </div>
                                            <div className="pt-3">
                                                <div className="subcat-main">
                                                    {
                                                        getSubcategoryById(
                                                            p.subcategoryId
                                                        ).name
                                                    }
                                                </div>
                                                <div className="product-name-wrapper d-flex align-items-start">
                                                    <h5 className="card-title">
                                                        {p.name}
                                                    </h5>
                                                </div>
                                                <div className="d-inline-block shadow-lg p-1 mb-5 bg-body text-warning rounded">
                                                    <h4 className="price-text">
                                                        {p.price}{" "}
                                                    </h4>
                                                </div>
                                            </div>
                                        </Link>
                                        <button className="btn btn-dark mb-3 rounded">
                                            В КОРЗИНУ
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default Main;
