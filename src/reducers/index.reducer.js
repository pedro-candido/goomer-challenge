import { combineReducers } from 'redux';

import RestaurantMenu from './RestaurantMenu.reducer';
import RestaurantSelected from './RestaurantSelected.reducer';
import SearchReducer from './Searchbar.reducer'

const reducer = combineReducers({SearchReducer, RestaurantSelected, RestaurantMenu})
export {RestaurantMenu, RestaurantSelected, SearchReducer}

export default reducer;