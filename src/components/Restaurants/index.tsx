import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '../'
import { RestaurantsContainer } from './style'

interface RestaurantProps {
    id:number,
    name:string,
    address:string,
    image:string,
    hours?: [
        {
            from: string;
            to: string;
            days: [number];
        }
    ]
}

export const Restaurants = () =>{

    const [ restaurants, setRestaurants ] = useState([])

    const getRestaurants = async () =>{
        const { data } = await axios.get('http://challange.goomer.com.br/restaurants')
        setRestaurants(data)
    }

    useEffect(()=>{
        getRestaurants();
    }, [])

    return(
        <RestaurantsContainer>
            {restaurants.map((item: RestaurantProps, index: number) => {
                return (
                    <div key={index}>
                        <Card
                            logo={item.image}
                            name={item.name}
                            address={item.address}
                        />
                    </div>
                )
            })}
        </RestaurantsContainer>
    )
}
