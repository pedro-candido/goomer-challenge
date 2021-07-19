import { useState, useEffect } from 'react'

import { Input, InputWrapper, SearchIcon } from './style'

interface ISearch {
    placeholder: string;
}

export const Searchbar = ({placeholder}: ISearch) =>{
    const [ restaurant, setRestaurant ] = useState('')

    const handlePress = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setRestaurant(event.target.value);
    }

    return (
        <InputWrapper>
            <Input 
                type="text" 
                name="restaurant" 
                onChange={(event) => handlePress(event)}
                value={restaurant}
                placeholder={placeholder}
                autoComplete={`off`}
            />
            <SearchIcon />
        </InputWrapper>
    )
}