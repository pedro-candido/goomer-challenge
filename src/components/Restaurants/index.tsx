import { useState, useEffect } from 'react';
import { Card } from '../'
import { RestaurantsContainer } from './style'

import { IHours } from '../Card'

import axios from 'axios';
interface IRestaurant {
    id: number,
    name: string,
    address: string,
    image: string,
    hours: Array<IHours>
}

export const Restaurants = () => {
    const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

    const getRestaurants = async () => {
        const { data } = await axios.get('http://challange.goomer.com.br/restaurants')
        setRestaurants(data)
    }

    useEffect(() => {
        getRestaurants();
    }, [])

    return (
        <RestaurantsContainer>
            {restaurants.map((item, index: number) => {
                return (
                        <Card
                            restaurant={item}
                        />
                )
            })}
        </RestaurantsContainer>
    )
}
