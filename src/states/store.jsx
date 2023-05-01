import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userSlice } from './userSlice';
import { authSlice } from './authSlice';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/lib/persistReducer';
import persistStore from 'redux-persist/lib/persistStore';

const rootReducer = combineReducers({
    auth: authSlice.reducer,
    user: userSlice.reducer,
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export const persistor = persistStore(store);
