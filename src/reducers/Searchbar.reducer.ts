import { createSlice } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import api from '../api';

const SearchReducer = createSlice({
    initialState: {
        value: '',
        loading: false,
        data: [],
        error: null,
    },
    name: 'searchBar',
    reducers: {
        updateValue(state, action) {
            state.value = action.payload;
        },
        fetchStarted(state) {
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

const { fetchError, fetchStarted, fetchSuccess } = SearchReducer.actions;

export const fetchRestaurants = async (dispatch: Dispatch) => {
    try {
        dispatch(fetchStarted());
        const { data } = await api.get('');
        return dispatch(fetchSuccess(data));
    } catch (error) {
        return dispatch(fetchError(error))
    }
}


export default SearchReducer.reducer;
export const { updateValue } = SearchReducer.actions;