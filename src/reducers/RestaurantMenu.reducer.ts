import { createSlice } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';

import { FoodProps } from '../global/types'

import api from '../api';


const RestaurantMenu = createSlice({
    initialState: {
        loading: false,
        data: [] as FoodProps[],
        error: null
    },
    name: 'restaurantMenu',
    reducers: {
        fetchStarted(state) {
            state.data = [];
            state.loading = true;
        },
        fetchSuccess(state, action) {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        },
        fetchError(state, action) {
            state.loading = false;
            state.data = [];
            state.error = action.payload;
        }
    }
})

const { fetchStarted, fetchSuccess, fetchError } = RestaurantMenu.actions;

export const fetchMenu = async (dispatch: Dispatch, id: string) => {
    try {
        dispatch(fetchStarted());
        const { data } = await api.get(`/${id}/menu`);
        return dispatch(fetchSuccess(data));
    } catch (error) {
        return fetchError(error);
    }
}

export default RestaurantMenu.reducer;