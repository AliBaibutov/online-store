import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        switchStatus: false
    },
    reducers: {
        statusChanged: (state) => {
            !state.switchStatus
                ? (state.switchStatus = true)
                : (state.switchStatus = false);
        }
    }
});

const { reducer: themeReducer, actions } = themeSlice;
const { statusChanged } = actions;

export const changeSwitchStatus = () => (dispatch) => {
    dispatch(statusChanged());
};

export const getSwitchStatus = () => (state) => state.theme.switchStatus;

export default themeReducer;
