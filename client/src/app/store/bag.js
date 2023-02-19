import { createAction, createSlice } from "@reduxjs/toolkit";
// import API from "../api";
import bagService from "../services/bag.service";
// import professionService from "../services/profession.service";

const bagSlice = createSlice({
    name: "bag",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        bagRequested: (state) => {
            state.isLoading = true;
        },
        bagReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        bagRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        bagAdded: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        bagUpdated: (state, action) => {
            state.entities[
                state.entities.findIndex((p) => p._id === action.payload._id)
            ] = action.payload;
        },
        bagRemoved: (state, action) => {
            state.entities = state.entities.filter(
                (p) => p._id !== action.payload
            );
        },
        totalIncProdChanged: (state, action) => {
            state.entities.map((p) =>
                p._id === action.payload ? (p.total += 1) : p.total
            );
        },
        totalDecProdChanged: (state, action) => {
            state.entities.map((p) =>
                p._id === action.payload
                    ? p.total === 1
                        ? p.total
                        : (p.total -= 1)
                    : p.total
            );
        }
    }
});

const { reducer: bagReducer, actions } = bagSlice;
const {
    bagRequested,
    bagReceived,
    bagRequestFailed,
    bagAdded,
    bagUpdated,
    bagRemoved,
    totalIncProdChanged,
    totalDecProdChanged
} = actions;

const addBagRequested = createAction("bag/addBagRequested");
const removeBagRequested = createAction("bag/removeBagRequested");
const bagUpdateRequested = createAction("bag/bagUpdateRequested");
const bagUpdateFailed = createAction("bag/bagUpdateFailed");

export const loadBagList = () => async (dispatch) => {
    dispatch(bagRequested());
    try {
        const { content } = await bagService.fetchAll();
        dispatch(bagReceived(content));
    } catch (error) {
        dispatch(bagRequestFailed(error.message));
    }
};

export const addBag = (payload) => async (dispatch) => {
    dispatch(addBagRequested(payload));
    try {
        const { content } = await bagService.create(payload);

        dispatch(bagAdded(content));
    } catch (error) {
        dispatch(bagRequestFailed(error.message));
    }
};

export const updateBag = (payload) => async (dispatch) => {
    dispatch(bagUpdateRequested());
    try {
        const { content } = await bagService.update(payload);
        localStorage.removeItem("bagId");
        dispatch(bagUpdated(content));
    } catch (error) {
        dispatch(bagUpdateFailed(error.message));
    }
};

export const removeBag = (bagId) => async (dispatch) => {
    dispatch(removeBagRequested());
    try {
        const { content } = await bagService.remove(bagId);
        if (!content) {
            dispatch(bagRemoved(bagId));
        }
    } catch (error) {
        dispatch(bagRequestFailed(error.message));
    }
};

export const getBag = () => (state) => state.bag.entities;

export const getBagLoadingStatus = () => (state) => state.bag.isLoading;

export const getBagById = (userId) => (state) => {
    if (state.bag.entities) {
        return state.bag.entities.filter((p) => userId === p.userId);
    }
};

export const incTotalValue = (bagId) => (dispatch) => {
    dispatch(totalIncProdChanged(bagId));
};

export const decTotalValue = (bagId) => (dispatch) => {
    dispatch(totalDecProdChanged(bagId));
};

export default bagReducer;
