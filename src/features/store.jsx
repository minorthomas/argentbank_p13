import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/lib/persistReducer';
import persistStore from 'redux-persist/lib/persistStore';
import { authSlice } from './auth/auth';
import { userSlice } from './user/user';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    auth: authSlice.reducer,
    user: userSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export const persistor = persistStore(store);
