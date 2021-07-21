import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { Card } from '../'
import { RestaurantsContainer } from './style'
import { IHours } from '../Card'
import { RootState } from '../../store/configureStore.store'

import { fetchRestaurants } from '../../reducers/Searchbar.reducer'

interface IRestaurant {
    id: number,
    name: string,
    address: string,
    image: string,
    hours: Array<IHours>
}

export const Restaurants = () => {
    const SearchReducer = useSelector((state: RootState) => state.SearchReducer);
    const { data } = useSelector((state: RootState) => state.SearchReducer);
    const [ restaurants, setRestaurants ] = useState<IRestaurant[]>([]);
    const [ restaurantsToRender, setRestaurantsToRender ] = useState<IRestaurant[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchRestaurants(dispatch)
    }, [dispatch])

    useEffect(() => {
        setRestaurants(data);
    }, [data])

    useEffect(()=> {
        const handleInputChange = () => {
            if (SearchReducer.value === '') {
                setRestaurantsToRender(restaurants)
                console.log(SearchReducer.value)
            } else {
                const filteredRestaurants = restaurants.filter(newItem => newItem.name.toLowerCase().includes(SearchReducer.value) === true)
                setRestaurantsToRender(filteredRestaurants)
            }
        }

        handleInputChange();
    },[SearchReducer.value, restaurants])

    return (
        <RestaurantsContainer>
            {restaurantsToRender.map((item, index: number) => {
                return (
                        <Card
                            key={index}
                            restaurant={item}
                        />
                )
            })}
        </RestaurantsContainer>
    )
}
