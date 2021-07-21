import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import SearchReducer from '../reducers/Searchbar.reducer';

const middleware = [...getDefaultMiddleware()]
const reducer = combineReducers({SearchReducer})
const store = configureStore({reducer, middleware});

export default store;
export type RootState = ReturnType<typeof reducer>