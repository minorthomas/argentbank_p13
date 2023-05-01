import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuth: false,
    token: null,
};

export const authSlice = createSlice({
    initialState,
    name: 'auth',
    reducers: {
        login: (state) => {
            state.isAuth = true;
        },
        logout: (state) => {
            state.isAuth = false;
        },
        handleToken: (state, action) => {
            return {
                ...state,
                token: action.payload,
            };
        },
    },
});

export const { login, logout, handleToken } = authSlice.actions;
