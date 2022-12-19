import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { loadProductsList } from "../store/products";
import {
    // getSubcategoriesLoadingStatus,
    loadSubcategoriesList
} from "../store/subcategories";
import {
    getCategoriesLoadingStatus,
    loadCategoriesList
} from "../store/categories";

const AppLoader = ({ children }) => {
    // const productsLoadingStatus = useSelector(getProductsLoadingStatus());
    // const subcategoriesLoadingStatus = useSelector(
    //     getSubcategoriesLoadingStatus()
    // );
    const categoriesLoadingStatus = useSelector(getCategoriesLoadingStatus());
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadProductsList());
        dispatch(loadSubcategoriesList());
        dispatch(loadCategoriesList());
    }, []);
    if (categoriesLoadingStatus) {
        return "Loading...";
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
