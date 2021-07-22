import { createSlice } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';

import { IRestaurant } from '../global/types'

import api from '../api';


const RestaurantSelected = createSlice({
    initialState: {
        restaurantSelected: '',
        loading: false,
        data: {} as IRestaurant | {},
        error: null
    },
    name: 'restaurantSelected',
    reducers: {
        fetchStarted(state){
            state.data = {};
            state.loading = true;
        },
        fetchSuccess(state, action){
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        },
        fetchError(state, action){
            state.loading = false;
            state.data = {};
            state.error = action.payload;
        }
    }
})

const { fetchStarted, fetchSuccess, fetchError } = RestaurantSelected.actions;

export const fetchRestaurant = async (dispatch: Dispatch, id: string) => {
    try {
        dispatch(fetchStarted());
        const { data } = await api.get(`/${id}`);
        return dispatch(fetchSuccess(data));
    } catch (error) {
        return fetchError(error);
    }
}

export default RestaurantSelected.reducer;