import { useParams } from 'react-router-dom'

import { useSelector } from 'react-redux'

import { ParamProps } from '../../global/types'

import { RestaurantHours } from '../index'

export const RestaurantHeader = () => {
    const { id } = useParams<ParamProps>()
    return (
        <>
            <RestaurantHours />
            { id }
        </>
    )
}