import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import reducer from '../reducers/index.reducer'

const middleware = [...getDefaultMiddleware()]

const store = configureStore({reducer, middleware});

export default store;
export type RootState = ReturnType<typeof reducer>