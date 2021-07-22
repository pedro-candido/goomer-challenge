import { useParams } from 'react-router-dom'

import { useSelector } from 'react-redux'

import { ParamProps } from '../../global/types'

export const RestaurantHeader = () => {
    const { id } = useParams<ParamProps>()

    const state = useSelector(state => state)
    return (
        <>
            { id }
        </>
    )
}