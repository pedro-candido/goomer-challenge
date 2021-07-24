import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Collapsible, Loader } from '../index'
import { ParamProps } from '../../global/types'
import { RootState } from '../../store/configureStore.store';

export const Food = () => {
    const state = useSelector((state: RootState) => state.RestaurantMenu);
    const dispatch = useDispatch();
    const { id } = useParams<ParamProps>();
    
    return(
        <>
            <Collapsible />
        </>
    )
}