import { createSlice } from "@reduxjs/toolkit";
// import API from "../api";
import companyService from "../services/company.service";
const companiesSlice = createSlice({
    name: "companies",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        companiesRequested: (state) => {
            state.isLoading = true;
        },
        companiesReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        companiesRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: companiesReducer, actions } = companiesSlice;
const { companiesRequested, companiesReceived, companiesRequestFailed } =
    actions;

export const loadCompaniesList = () => async (dispatch, getState) => {
    dispatch(companiesRequested());
    try {
        const { content } = await companyService.fetchAll();
        dispatch(companiesReceived(content));
    } catch (error) {
        dispatch(companiesRequestFailed(error.message));
    }
};
export const getCompanies = () => (state) => state.companies.entities;
export const getCompaniesLoadingStatus = () => (state) =>
    state.companies.isLoading;
export const getCompaniesById = (compId) => (state) => {
    if (state.companies.entities) {
        return state.companies.entities.find((c) => compId === c._id);
    }
};

export default companiesReducer;
