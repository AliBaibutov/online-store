import { createSlice } from "@reduxjs/toolkit";
// import API from "../api";
import subcategoryService from "../services/subcategory.service";

const subcategoriesSlice = createSlice({
    name: "subcategories",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        subcategoriesRequested: (state) => {
            state.isLoading = true;
        },
        subcategoriesReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        subcategoriesRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: subcategoriesReducer, actions } = subcategoriesSlice;
const {
    subcategoriesRequested,
    subcategoriesReceived,
    subcategoriesRequestFailed
} = actions;

export const loadSubcategoriesList = () => async (dispatch, getState) => {
    dispatch(subcategoriesRequested());
    try {
        const { content } = await subcategoryService.fetchAll();
        dispatch(subcategoriesReceived(content));
    } catch (error) {
        dispatch(subcategoriesRequestFailed(error.message));
    }
};
export const getSubcategories = () => (state) => state.subcategories.entities;
export const getSubcategoriesLoadingStatus = () => (state) =>
    state.subcategories.isLoading;
export const getSubcategoryById = (subcategoryId) => (state) => {
    if (state.subcategories.entities) {
        return state.subcategories.entities.find(
            (s) => subcategoryId === s._id
        );
    }
};

export default subcategoriesReducer;
