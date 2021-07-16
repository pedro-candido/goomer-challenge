import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '../'
import { RestaurantsContainer } from './style'

interface IRestaurant {
    id: number,
    name: string,
    address: string,
    image: string,
    hours?: [
        {
            from: string;
            to: string;
            days: [number];
        }
    ]
}

interface IDisponibility {
    hours?: [
        from?: string,
        to?: string,
        days?: [number]
    ]
}

export const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([])
    let isOpen = false;

    const getRestaurants = async () => {
        const { data } = await axios.get('http://challange.goomer.com.br/restaurants')
        setRestaurants(data)
    }

    const compareTime = (hours: IDisponibility) => {
        let timeNow: Date = new Date();
        let today = timeNow.getDay();
        if (hours) {
            console.log(hours)
        }
    }

    useEffect(() => {
        getRestaurants();
    }, [])

    return (
        <RestaurantsContainer>
            {restaurants.map((item: IRestaurant, index: number) => {
                if(item.hours) compareTime(item.hours);
                return (
                    <div key={index}>
                        <Card
                            logo={item.image}
                            name={item.name}
                            address={item.address}
                            id={item.id}
                            isRestaurantOpen={isOpen}
                        />
                    </div>
                )
            })}
        </RestaurantsContainer>
    )
}
