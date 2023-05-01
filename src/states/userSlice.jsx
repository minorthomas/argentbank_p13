import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        id: null,
        firstName: null,
        lastName: null,
        email: null,
    },
    reducers: {
        handleToken: (state, action) => {
            return {
                ...state,
                token: action.payload,
            };
        },
        handleUser: (state, action) => {
            return {
                ...state,
                id: action.payload.id,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
            };
        },
        handleName: (state, action) => {
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
            };
        },
    },
});

export const { handleToken, handleUser, handleName } = userSlice.actions;