import { useDispatch, useSelector } from 'react-redux'

export const RestaurantHeader = () => {
    const state = useSelector(state => state)
    console.log(state);
    console.log('render')
    return (
        <>
            Hello World
        </>
    )
}