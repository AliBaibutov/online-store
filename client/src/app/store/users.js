import { createAction, createSlice } from "@reduxjs/toolkit";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";
import userService from "../services/user.service";
import { generateAuthError } from "../utils/generateAuthError";

const initialState = localStorageService.getAccessToken()
    ? {
          entities: null,
          isLoading: true,
          error: null,
          auth: { userId: localStorageService.getUserId() },
          isLoggedIn: true,
          dataLoaded: false
      }
    : {
          entities: null,
          isLoading: false,
          error: null,
          auth: null,
          isLoggedIn: false,
          dataLoaded: false
      };

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        usersRequested: (state) => {
            state.isLoading = true;
        },
        usersReceived: (state, action) => {
            state.entities = action.payload;
            state.dataLoaded = true;
            state.isLoading = false;
        },
        usersRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        authRequestSuccess: (state, action) => {
            state.auth = action.payload;
            state.isLoggedIn = true;
        },
        authRequestFailed: (state, action) => {
            state.error = action.payload;
        },
        bagProductAdded: (state, action) => {
            state.entities[
                state.entities.findIndex((u) => u._id === state.auth.userId)
            ].bag.push(action.payload);
        },
        userUpdated: (state, action) => {
            state.entities[
                state.entities.findIndex((u) => u._id === action.payload._id)
            ] = action.payload;
        },
        totalIncProdChanged: (state, action) => {
            state.entities.map((u) =>
                u._id === state.auth.userId
                    ? u.bag.map((p) =>
                          p._id === action.payload ? (p.total += 1) : p.total
                      )
                    : null
            );
        },
        userLoggedOut: (state) => {
            state.entities = null;
            state.isLoggedIn = false;
            state.auth = null;
            state.dataLoaded = false;
        },
        authRequested: (state) => {
            state.error = null;
        }
    }
});

const { reducer: usersReducer, actions } = usersSlice;
const {
    usersRequested,
    usersReceived,
    usersRequestFailed,
    authRequestSuccess,
    authRequestFailed,
    userLoggedOut,
    authRequested,
    userUpdated,
    bagProductAdded,
    totalIncProdChanged
} = actions;

const userUpdateRequested = createAction("users/userUpdateRequested");
const userUpdateFailed = createAction("users/userUpdateFailed");

export const logIn =
    ({ payload }) =>
    async (dispatch) => {
        const { email, password } = payload;
        dispatch(authRequested());
        try {
            const data = await authService.login({ email, password });
            localStorageService.setTokens(data);
            dispatch(authRequestSuccess({ userId: data.userId }));
        } catch (error) {
            const { code, message } = error.response.data.error;
            if (code === 400) {
                const errorMessage = generateAuthError(message);
                dispatch(authRequestFailed(errorMessage));
            } else {
                dispatch(authRequestFailed(error.message));
            }
        }
    };

export const signUp = (payload) => async (dispatch) => {
    dispatch(authRequested());
    try {
        const data = await authService.register(payload);
        localStorageService.setTokens(data);
        dispatch(authRequestSuccess({ userId: data.userId }));
    } catch (error) {
        dispatch(authRequestFailed(error.message));
    }
};

export const logOut = () => (dispatch) => {
    localStorageService.removeAuthData();
    dispatch(userLoggedOut());
};

export const addToBag = (payload) => async (dispatch) => {
    dispatch(bagProductAdded(payload));
};

export const updateUser = (payload) => async (dispatch, getState) => {
    const foundUser = getState().users.entities.find(
        (u) => u._id === getState().users.auth.userId
    );
    dispatch(userUpdateRequested());
    try {
        const { content } = payload
            ? await userService.update(payload)
            : await userService.update(foundUser);
        dispatch(userUpdated(content));
    } catch (error) {
        dispatch(userUpdateFailed(error.message));
    }
};

export const loadUsersList = () => async (dispatch) => {
    dispatch(usersRequested());
    try {
        const { content } = await userService.get();
        dispatch(usersReceived(content));
    } catch (error) {
        dispatch(usersRequestFailed(error.message));
    }
};

export const getUsersList = () => (state) => state.users.entities;
export const getIsLoggedIn = () => (state) => state.users.isLoggedIn;
export const getDataStatus = () => (state) => state.users.dataLoaded;
export const getUsersLoadingStatus = () => (state) => state.users.isLoading;
export const getCurrentUserId = () => (state) => state.users.auth.userId;
export const getCurrentUserData = () => (state) =>
    state.users.entities
        ? state.users.entities.find((u) => u._id === state.users.auth?.userId)
        : null;
export const getAuthErrors = () => (state) => state.users.error;
export const getDataUpdatingStatus = () => (state) => state.users.dataUpdated;

export const incTotalValue = (productId) => (dispatch) => {
    dispatch(totalIncProdChanged(productId));
};

export default usersReducer;
