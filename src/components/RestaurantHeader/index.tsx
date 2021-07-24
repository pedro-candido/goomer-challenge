import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { ParamProps,  IRestaurant } from '../../global/types'
import { RestaurantHours, Title } from '../index'
import { Image, HeaderWrapper, HeaderDescriptionWrapper } from './style'
import { fetchRestaurant } from '../../reducers/RestaurantSelected.reducer';
import { RootState } from '../../store/configureStore.store';


export const RestaurantHeader = () => {
    const { name, image } = useSelector((state: RootState) => state.RestaurantSelected.data) as IRestaurant;
    const { id } = useParams<ParamProps>();

    const dispatch = useDispatch();

    useEffect(() => {
        fetchRestaurant(dispatch, id);
    }, [id])

    return (
        <HeaderDescriptionWrapper>
            <Image src={image} />

            <HeaderWrapper>
                <Title
                    isHome={false}
                    text={name}
                />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <RestaurantHours />
            </HeaderWrapper>
        </HeaderDescriptionWrapper>
    )
}