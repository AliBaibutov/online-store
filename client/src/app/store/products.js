import { createAction, createSlice } from "@reduxjs/toolkit";
// import API from "../api";
import productService from "../services/product.service";
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
        },
        productCreated: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        productUpdated: (state, action) => {
            state.entities[
                state.entities.findIndex((p) => p._id === action.payload._id)
            ] = action.payload;
        },
        productRemoved: (state, action) => {
            state.entities = state.entities.filter(
                (p) => p._id !== action.payload
            );
        }
    }
});

const { reducer: productsReducer, actions } = productsSlice;
const {
    productsRequested,
    productsReceived,
    productsRequestFailed,
    productCreated,
    productUpdated,
    productRemoved
} = actions;

const addProductRequested = createAction("products/addProductRequested");
const removeProductRequested = createAction("products/removeProductRequested");
const productUpdateRequested = createAction("products/productUpdateRequested");
const productUpdateFailed = createAction("products/productUpdateFailed");

export const loadProductsList = () => async (dispatch) => {
    dispatch(productsRequested());
    try {
        const { content } = await productService.fetchAll();
        dispatch(productsReceived(content));
    } catch (error) {
        dispatch(productsRequestFailed(error.message));
    }
};

export const createProduct = (payload) => async (dispatch) => {
    dispatch(addProductRequested(payload));
    try {
        const { content } = await productService.create(payload);

        dispatch(productCreated(content));
    } catch (error) {
        dispatch(productsRequestFailed(error.message));
    }
};

export const updateProduct = (payload) => async (dispatch) => {
    dispatch(productUpdateRequested());
    try {
        const { content } = await productService.update(payload);
        localStorage.removeItem("productId");
        dispatch(productUpdated(content));
    } catch (error) {
        dispatch(productUpdateFailed(error.message));
    }
};

export const removeProduct = (productId) => async (dispatch) => {
    dispatch(removeProductRequested());
    try {
        const { content } = await productService.remove(productId);
        if (!content) {
            dispatch(productRemoved(productId));
        }
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
