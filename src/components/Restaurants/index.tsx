import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Card } from '../';
import { RestaurantsContainer } from './style';

import { RootState } from '../../store/configureStore.store';

import { fetchRestaurants } from '../../reducers/Searchbar.reducer';

import { IRestaurant } from '../../global/types';

export const Restaurants = () => {
    const { SearchReducer } = useSelector((state: RootState) => state);
    const { value: inputValue  } = SearchReducer;
    
    const { data } = useSelector((state: RootState) => state.SearchReducer);

    const [ restaurants, setRestaurants ] = useState<IRestaurant[]>([]);
    const [ restaurantsToRender, setRestaurantsToRender ] = useState<IRestaurant[]>([]);

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        fetchRestaurants(dispatch);
    }, [dispatch])

    useEffect(() => {
        setRestaurants(data);
    }, [data])

    useEffect(()=> {
        const compareStrings = (firstString: string, secondString: string) =>{
            const firstStringCapitalized = firstString.toLowerCase();
            const secondStringCapitalized = secondString.toLowerCase();

            return firstStringCapitalized.includes(secondStringCapitalized);
        }

        const handleInputChange = () => {
            if (inputValue === '') {
                setRestaurantsToRender(restaurants);
            } else {
                const filteredRestaurants = restaurants.filter(restaurant => compareStrings(restaurant.name, inputValue) === true);
                setRestaurantsToRender(filteredRestaurants);
            }
        }

        handleInputChange();
    }, [inputValue, restaurants])

    const handleClick = (index: number) => {
        history.push(`/restaurant/${index}`);
    }

    return (
        <RestaurantsContainer>
            {restaurantsToRender.map((item) => {
                return (
                        <Card
                            onClick={() => handleClick(item.id)}
                            key={item.id}
                            restaurant={item}
                        />
                )
            })}
        </RestaurantsContainer>
    )
}
