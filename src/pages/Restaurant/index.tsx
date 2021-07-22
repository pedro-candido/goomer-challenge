import { RestaurantHeader, Title } from '../../components';
import { fetchRestaurant } from '../../reducers/RestaurantSelected.reducer';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/configureStore.store';

import { ParamProps, IRestaurant } from '../../global/types'


export const Restaurant = () => {
    const restaurant = useSelector((state: RootState) => state.RestaurantSelected.data) as IRestaurant
    const dispatch = useDispatch();
    const { id } = useParams<ParamProps>();

    useEffect(() => {
        fetchRestaurant(dispatch, id);
    }, [id])

    return (
        <>
            <RestaurantHeader />
            <Title
                isHome={false}
                text={restaurant.name}
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </>
    )
}