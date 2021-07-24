import { RestaurantHeader, Food, Loader } from '../../components';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/configureStore.store';

import { useState } from 'react'

export const Restaurant = () => {
    return (
        <>
            <RestaurantHeader />
            <Food />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        </>
    )
}