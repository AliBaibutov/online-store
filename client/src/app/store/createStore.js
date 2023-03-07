import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bagProductsReducer from "./bagProducts";
import categoriesReducer from "./categories";
import companiesReducer from "./companies";
import productsReducer from "./products";
import subcategoriesReducer from "./subcategories";
import themeReducer from "./theme";
import usersReducer from "./users";

const rootReducer = combineReducers({
    products: productsReducer,
    companies: companiesReducer,
    subcategories: subcategoriesReducer,
    categories: categoriesReducer,
    bagProducts: bagProductsReducer,
    users: usersReducer,
    theme: themeReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
