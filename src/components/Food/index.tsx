import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Collapsible, Loader } from '../index'
import { ParamProps } from '../../global/types'
import { RootState } from '../../store/configureStore.store';
import { fetchMenu } from '../../reducers/RestaurantMenu.reducer'

export const Food = () => {
    const state = useSelector((state: RootState) => state.RestaurantMenu);
    console.log(state);
    const dispatch = useDispatch();
    const { id } = useParams<ParamProps>();
    
    useEffect(() => {
        fetchMenu(dispatch, id);
    }, [dispatch, id])

    return(
        <>
            <Loader />
            <Collapsible />
        </>
    )
}