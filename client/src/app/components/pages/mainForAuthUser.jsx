import React, { useEffect, useState } from "react";
import _ from "lodash";
import { useSelector } from "react-redux";
import {
    getCategories,
    getCategoriesLoadingStatus
} from "../../store/categories";
import { getProducts, getProductsLoadingStatus } from "../../store/products";
import {
    getSubcategories,
    getSubcategoriesLoadingStatus
} from "../../store/subcategories";
import Pagination from "../common/pagination";
import { paginate } from "../../utils/paginate";
import BagIconForAuthUser from "../ui/bagIconForAuthUser";
import useTheme from "../hooks/useTheme";
import { getSwitchStatus } from "../../store/theme";
import SideBar from "../ui/sideBar";
import SortButtons from "../ui/sortButtons";
import SearchQueryForm from "../ui/searchQueryForm";
import ProdListForAuthUser from "../ui/prodListForAuthUser";

const MainForAuthUser = () => {
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
                            <SideBar
                                categories={categories}
                                filterSubcategories={filterSubcategories}
                                filterProducts={filterProducts}
                                renderAllProducts={renderAllProducts}
                            />
                            <div className="col-12 col-lg-9 ps-lg-3">
                                <SearchQueryForm
                                    searchQuery={searchQuery}
                                    handleSearchQuery={handleSearchQuery}
                                />
                                <div>Сортировка по:</div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <SortButtons handleSort={handleSort} />
                                    <BagIconForAuthUser bgBagIcon={bgBagIcon} />
                                </div>
                                <ProdListForAuthUser
                                    productCrop={productCrop}
                                    getSubcategoryById={getSubcategoryById}
                                    btnColor={btnColor}
                                    btnInBagColor={btnInBagColor}
                                />
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

export default MainForAuthUser;
