import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loggedIn: false,
};

export const authSlice = createSlice({
    initialState,
    name: 'auth',
    reducers: {
        login: (state) => {
            state.loggedIn = true;
        },
        logout: (state) => {
            state.loggedIn = false;
        },
    },
});

export const { login, logout } = authSlice.actions;
