import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        switchStatus: false
    },
    reducers: {
        statusChanged: (state, action) => {
            state.switchStatus = action.payload;
        }
    }
});

const { reducer: themeReducer, actions } = themeSlice;
const { statusChanged } = actions;

export const changeSwitchStatus = (payload) => (dispatch) => {
    dispatch(statusChanged(payload));
};

export const getSwitchStatus = () => (state) => state.theme.switchStatus;

export default themeReducer;
