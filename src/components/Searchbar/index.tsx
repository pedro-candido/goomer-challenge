import { useState, useEffect } from 'react'

import { Input, InputWrapper, SearchIcon } from './style'

export const Searchbar = () =>{
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
                placeholder={`Buscar estabelecimento`}
                autoComplete={`off`}
            />
            <SearchIcon />
        </InputWrapper>
    )
}