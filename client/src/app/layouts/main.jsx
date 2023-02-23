import React, { useEffect, useState } from "react";
import _ from "lodash";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategories, getCategoriesLoadingStatus } from "../store/categories";
import { getProducts, getProductsLoadingStatus } from "../store/products";
import {
    getSubcategories,
    getSubcategoriesLoadingStatus
} from "../store/subcategories";
import Pagination from "../components/pagination";
import { paginate } from "../utils/paginate";
import { getIsLoggedIn } from "../store/users";
import BagIconForAuthUser from "../components/bagIconForAuthUser";
import BagIconForGuest from "../components/bagIconForGuest";
import ToBagBtnForAuthUser from "../components/toBagBtnForAuthUser";
import ToBagBtnForGuest from "../components/toBagBtnForGuest";
import useTheme from "../components/hooks/useTheme";
import { getSwitchStatus } from "../store/theme";

const Main = () => {
    const products = useSelector(getProducts());
    const subcategories = useSelector(getSubcategories());
    const categories = useSelector(getCategories());
    const productsLoadingStatus = useSelector(getProductsLoadingStatus());
    const subcategoriesLoadingStatus = useSelector(
        getSubcategoriesLoadingStatus()
    );
    const categoriesLoadingStatus = useSelector(getCategoriesLoadingStatus());
    const isLoggedIn = useSelector(getIsLoggedIn());

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
                  (p) =>
                      p.name
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

    useEffect(() => {
        setCurrentPage(1);
    }, [productsList, searchQuery]);

    const count = sortedProducts.length;
    const pageSize = 8;
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleIncrementPage = (pagesLength) => {
        setCurrentPage((prevState) =>
            prevState < pagesLength ? prevState + 1 : prevState
        );
    };
    const handleDecrementPage = () => {
        setCurrentPage((prevState) =>
            prevState > 1 ? prevState - 1 : prevState
        );
    };

    const productCrop = paginate(sortedProducts, currentPage, pageSize);

    const filterSubcategories = (catName) => {
        return subcategories.filter((s) => catName === s.catName);
    };

    const filterProducts = (subcatId) => {
        const filteredProducts = sortedProducts.filter(
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

    const status = useSelector(getSwitchStatus());
    const { btnColor, btnInBagColor, bg, bgBagIcon } = useTheme(status);

    return (
        <div className="my-container">
            {!productsLoadingStatus &&
                !subcategoriesLoadingStatus &&
                !categoriesLoadingStatus && (
                    <>
                        <div className="d-flex flex-column flex-lg-row h-100 justify-content-center">
                            <div className="d-flex flex-column align-items-center align-items-lg-start pt-2 ps-2 me-1 mb-2 mb-lg-0 col-12 col-lg-3 card cursor shadow p-3 bg-body-tertiary rounded">
                                <h4>КАТЕГОРИИ</h4>
                                {categories.map((c) => (
                                    <div
                                        key={c._id}
                                        className="mb-2 cursor dropdown"
                                    >
                                        <div
                                            className="category-hover"
                                            data-bs-toggle="dropdown"
                                        >
                                            {c.name}
                                        </div>
                                        <div className="dropdown-menu">
                                            {filterSubcategories(c.name).map(
                                                (s) => (
                                                    <div
                                                        className="dropdown-item text-wrap category-hover bg-transparent"
                                                        onClick={() =>
                                                            filterProducts(
                                                                s._id
                                                            )
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
                            <div className="col-12 col-lg-9 ps-lg-3">
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
                                    <div className="d-flex flex-column flex-sm-row">
                                        <button
                                            type="button"
                                            className={`btn btn-outline-dark mb-2 mb-sm-0 border sort-button btn-sm me-2`}
                                            onClick={() =>
                                                handleSort("price", "desc")
                                            }
                                        >
                                            убыванию цены
                                            <i className="bi bi-arrow-down-square-fill ms-1"></i>
                                        </button>
                                        <button
                                            type="button"
                                            className={`btn btn-outline-dark mb-2 mb-sm-0 border sort-button btn-sm`}
                                            onClick={() =>
                                                handleSort("price", "asc")
                                            }
                                        >
                                            возрастанию цены
                                            <i className="bi bi-arrow-up-square-fill ms-1"></i>
                                        </button>
                                    </div>
                                    {isLoggedIn ? (
                                        <BagIconForAuthUser
                                            bgBagIcon={bgBagIcon}
                                        />
                                    ) : (
                                        <BagIconForGuest
                                            bgBagIcon={bgBagIcon}
                                        />
                                    )}
                                </div>
                                <div className="d-flex flex-wrap justify-content-center justify-content-sm-start align-items-strech p-0 mt-2 gap-1 gap-md-4">
                                    {productCrop.map((p) => (
                                        <div
                                            key={p._id}
                                            className="d-flex flex-shrink-1 card cursor shadow p-3 bg-body-tertiary rounded card-width"
                                        >
                                            <Link
                                                className="nav-link"
                                                to={`product/${p._id}`}
                                            >
                                                <div className="img-wrapper d-flex align-items-center justify-content-center">
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
                                            {isLoggedIn ? (
                                                <ToBagBtnForAuthUser
                                                    id={p._id}
                                                    products={productCrop}
                                                    btnColor={btnColor}
                                                    btnInBagColor={
                                                        btnInBagColor
                                                    }
                                                />
                                            ) : (
                                                <ToBagBtnForGuest
                                                    id={p._id}
                                                    products={productCrop}
                                                    btnColor={btnColor}
                                                    btnInBagColor={
                                                        btnInBagColor
                                                    }
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <Pagination
                                    itemsCount={count}
                                    pageSize={pageSize}
                                    onPageChange={handlePageChange}
                                    onIncrementPage={handleIncrementPage}
                                    onDecrementPage={handleDecrementPage}
                                    currentPage={currentPage}
                                    bg={bg}
                                    btnColor={btnColor}
                                />
                            </div>
                        </div>
                    </>
                )}
        </div>
    );
};

export default Main;
