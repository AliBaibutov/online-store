import { createSlice } from "@reduxjs/toolkit";
// import API from "../api";
import companyService from "../services/company.service";
// import professionService from "../services/profession.service";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        productsRequested: (state) => {
            state.isLoading = true;
        },
        productsReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        productsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: productsReducer, actions } = productsSlice;
const { productsRequested, productsReceived, productsRequestFailed } = actions;

export const loadProductsList = () => async (dispatch, getState) => {
    dispatch(productsRequested());
    try {
        const { content } = await companyService.fetchAll();
        dispatch(productsReceived(content));
    } catch (error) {
        dispatch(productsRequestFailed(error.message));
    }
};
export const getProducts = () => (state) => state.products.entities;
export const getProductsLoadingStatus = () => (state) =>
    state.products.isLoading;
export const getProductById = (productId) => (state) => {
    if (state.products.entities) {
        return state.products.entities.find((p) => productId === p._id);
    }
};

export default productsReducer;
