import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories";
import productsReducer from "./products";
import subcategoriesReducer from "./subcategories";

const rootReducer = combineReducers({
    products: productsReducer,
    subcategories: subcategoriesReducer,
    categories: categoriesReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
