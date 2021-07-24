import { Collapse } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { useParams } from 'react-router-dom'

import { fetchMenu } from '../../reducers/RestaurantMenu.reducer'
import { FoodContainer } from './style';
import { RootState } from '../../store/configureStore.store'
import { FoodProps, ParamProps } from '../../global/types'

export const Collapsible = () => {
    const { data } = useSelector((state: RootState) => state.RestaurantMenu);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const [food, setFood] = useState<FoodProps>();
    const { id } = useParams<ParamProps>()

    useEffect(()=>{
        fetchMenu(dispatch, id)
        data && setFood(data)
    }, [data])

    const handleClick = (foodName: string) => {
        setIsOpen(!isOpen)
    };

    return (
        <>
        </>
    )
}