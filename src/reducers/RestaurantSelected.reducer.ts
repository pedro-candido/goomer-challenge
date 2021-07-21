import { createSlice } from '@reduxjs/toolkit'

const RestaurantSelected = createSlice({
    initialState: {
        restaurantName: '',
    },
    name: 'restaurantSelected',
    reducers: {
        setRestaurantName(state, action) {
            state.restaurantName = action.payload;
        }
    }
})

export const { setRestaurantName } = RestaurantSelected.actions;
export default RestaurantSelected.reducer;