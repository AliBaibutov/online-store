import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
// import API from "../api";
// import professionService from "../services/profession.service";

const bagProductsSlice = createSlice({
    name: "bagProducts",
    initialState: {
        entities: null
        // isLoading: true,
        // error: null
    },
    reducers: {
        bagProductCreated: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        bagProductRemoved: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities = state.entities.filter(
                (p) => p._id !== action.payload
            );
        }
    }
});

const { reducer: bagProductsReducer, actions } = bagProductsSlice;
const { bagProductCreated, bagProductRemoved } = actions;

export const createBagProduct = (payload) => (dispatch) => {
    console.log(payload);
    dispatch(bagProductCreated(payload));
};

export const removeBagProduct = (productId) => (dispatch) => {
    dispatch(bagProductRemoved(productId));
};

export const getBagProducts = () => (state) => state.bagProducts.entities;

// export const getProductsLoadingStatus = () => (state) =>
//     state.products.isLoading;
// export const getProductById = (productId) => (state) => {
//     if (state.products.entities) {
//         return state.products.entities.find((p) => productId === p._id);
//     }
// };

export default bagProductsReducer;
