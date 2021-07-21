import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit';

const SearchReducer = createSlice({
    initialState: {
        value: '',
        loading: false,
        data: [] || null,
        error: null,
        success: false,
        isFetchStarted: false
    },
    name: 'searchBar',
    reducers: {
        updateValue(state, action) {
            state.value = action.payload;
        },
        fetchStarted(state) {
            state.loading = true;
            state.isFetchStarted = true
        },
        fetchSuccess(state, action) {
            state.loading = false;
            state.success = true;
            state.data = action.payload;
            state.error = null;
        },
        fetchError(state, action) {
            state.loading = false;
            state.data = [];
            state.error = action.payload;
            state.success = false;
        }
    }
})

const { fetchError, fetchStarted, fetchSuccess } = SearchReducer.actions;

export const fetchRestaurants = async (dispatch: any) =>{
    const baseUrl = 'http://challange.goomer.com.br';

    try {
        dispatch(fetchStarted());
        const { data } = await axios.get(`${baseUrl}/restaurants`)
        return dispatch(fetchSuccess(data));
    } catch( error ) {
        return dispatch(fetchError(error))
    }
}


export default SearchReducer.reducer;
export const { updateValue } = SearchReducer.actions;