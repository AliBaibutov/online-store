import { React, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getProductsLoadingStatus, loadProductsList } from "../store/products";
import {
    // getSubcategoriesLoadingStatus,
    loadSubcategoriesList
} from "../store/subcategories";
import {
    // getCategoriesLoadingStatus,
    loadCategoriesList
} from "../store/categories";
import {
    // getCompaniesLoadingStatus,
    loadCompaniesList
} from "../store/companies";
import Loader from "./loader";
import { loadUsersList } from "../store/users";
import { loadBagList } from "../store/bag";

const AppLoader = ({ children }) => {
    const productsLoadingStatus = useSelector(getProductsLoadingStatus());
    // const subcategoriesLoadingStatus = useSelector(
    //     getSubcategoriesLoadingStatus()
    // );
    // const categoriesLoadingStatus = useSelector(getCategoriesLoadingStatus());
    // const companiesLoadingStatus = useSelector(getCompaniesLoadingStatus());

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCategoriesList());
        dispatch(loadSubcategoriesList());
        dispatch(loadCompaniesList());
        dispatch(loadProductsList());
        dispatch(loadUsersList());
        dispatch(loadBagList());
    }, []);
    if (productsLoadingStatus) {
        return <Loader />;
    }

    return children;
};

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default AppLoader;
