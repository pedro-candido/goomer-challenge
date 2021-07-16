import { useState, useEffect } from 'react'
import axios from 'axios'

export const Searchbar = () =>{
    const [ restaurant, setRestaurant ] = useState('')
    const [ restaurants, setRestaurants ] = useState([])

    const handlePress = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setRestaurant(event.target.value);
    }

    return (
        <>
            <ul>
                { restaurants.map((item: any) =>{

                })}
            </ul>
            <input 
                type="text" 
                name="restaurant" 
                onChange={(event) => handlePress(event)}
                value={restaurant}
            />
        </>
    )
}