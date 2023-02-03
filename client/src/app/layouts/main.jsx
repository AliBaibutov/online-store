import React, { useState } from "react";
import _ from "lodash";

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
import ToBagButton from "../components/toBagButton";
import BagIcon from "../components/bagIcon";

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
    const [sortBy, setSortBy] = useState();

    const handleSearchQuery = ({ target }) => {
        setSearchQuery(target.value);
    };
    const handleSort = (path, order) => {
        setSortBy({ path, order });
    };

    function searchProducts(data) {
        const searchedProducts = searchQuery
            ? data.filter(
                  (user) =>
                      user.name
                          .toLowerCase()
                          .indexOf(searchQuery.toLowerCase()) !== -1
              )
            : data;
        return searchedProducts;
    }

    const searchedProducts = searchProducts(productsList);

    const sortedProducts = _.orderBy(
        searchedProducts,
        [sortBy?.path],
        [sortBy?.order]
    );

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
        setSearchQuery("");
        setProductsList(products);
    };

    return (
        <div className="my-container">
            {!productsLoadingStatus &&
                !subcategoriesLoadingStatus &&
                !categoriesLoadingStatus && (
                    <div className="d-flex justify-content-center">
                        <div className="d-flex flex-column pt-2 ps-2 me-1 col-3 card cursor shadow p-3 bg-body-tertiary rounded">
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
                        <div className="col-9 ps-3">
                            <form className="input-group mb-2">
                                <input
                                    className="w-100 mx-auto form-control rounded"
                                    name="searchQuery"
                                    placeholder="Введите наименование товара..."
                                    type="text"
                                    aria-describedby="basic-addon1"
                                    value={searchQuery}
                                    onChange={handleSearchQuery}
                                />
                            </form>
                            <div>Сортировка по:</div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <button
                                        type="button"
                                        className="btn btn-outline-dark border sort-button btn-sm me-2"
                                        onClick={() =>
                                            handleSort("price", "desc")
                                        }
                                    >
                                        убыванию цены
                                        <i className="bi bi-arrow-down-square-fill ms-1"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-dark border sort-button btn-sm"
                                        onClick={() =>
                                            handleSort("price", "asc")
                                        }
                                    >
                                        возрастанию цены
                                        <i className="bi bi-arrow-up-square-fill ms-1"></i>
                                    </button>
                                </div>
                                <BagIcon />
                            </div>
                            <div className="d-flex justify-content-between flex-wrap p-0 mt-2 gap-4">
                                {sortedProducts.map((p) => (
                                    <div
                                        key={p._id}
                                        className="card cursor shadow p-3 bg-body-tertiary rounded"
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
                                                    <h5>{p.name}</h5>
                                                </div>
                                                <div className="d-inline-block shadow-lg p-1 mb-5 bg-body text-warning rounded">
                                                    <h4 className="price-text">
                                                        {p.price}{" "}
                                                    </h4>
                                                </div>
                                            </div>
                                        </Link>
                                        <ToBagButton
                                            id={p._id}
                                            products={sortedProducts}
                                        />
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
