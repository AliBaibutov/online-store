import { createSlice } from "@reduxjs/toolkit";
import API from "../api";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        categoriesRequested: (state) => {
            state.isLoading = true;
        },
        categoriesReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        categoriesRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: categoriesReducer, actions } = categoriesSlice;
const { categoriesRequested, categoriesReceived, categoriesRequestFailed } =
    actions;

export const loadCategoriesList = () => async (dispatch, getState) => {
    dispatch(categoriesRequested());
    try {
        const content = await API.categories.fetchAll();
        dispatch(categoriesReceived(content));
    } catch (error) {
        dispatch(categoriesRequestFailed(error.message));
    }
};
export const getCategories = () => (state) => state.categories.entities;
export const getCategoriesLoadingStatus = () => (state) =>
    state.categories.isLoading;
export const getCategoriesById = (categoryId) => (state) => {
    if (state.categories.entities) {
        return state.categories.entities.find((p) => categoryId === p._id);
    }
};

export default categoriesReducer;
