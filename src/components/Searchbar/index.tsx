import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateValue } from '../../reducers/Searchbar.reducer'

import { Input, InputWrapper, SearchIcon } from './style';

interface ISearch {
    placeholder: string;
}

export const Searchbar = ({placeholder}: ISearch) =>{
    const [ restaurant, setRestaurant ] = useState('');
    const dispatch = useDispatch();

    const handlePress = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        dispatch(updateValue(event.target.value));
        setRestaurant(event.target.value);
    }

    return (
        <InputWrapper>
            <Input 
                type="text" 
                name="restaurant" 
                onChange={handlePress}
                value={restaurant}
                placeholder={placeholder}
                autoComplete={`off`}
            />
            <SearchIcon />
        </InputWrapper>
    )
}