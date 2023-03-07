import { React, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
    getProductsLoadingStatus,
    loadProductsList
} from "../../../store/products";
import { loadSubcategoriesList } from "../../../store/subcategories";
import { loadCategoriesList } from "../../../store/categories";
import { loadCompaniesList } from "../../../store/companies";
import Loader from "../../common/loader";
import { loadUsersList } from "../../../store/users";

const AppLoader = ({ children }) => {
    const productsLoadingStatus = useSelector(getProductsLoadingStatus());

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCategoriesList());
        dispatch(loadSubcategoriesList());
        dispatch(loadCompaniesList());
        dispatch(loadProductsList());
        dispatch(loadUsersList());
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
