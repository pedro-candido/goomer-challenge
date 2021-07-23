import { useSelector } from 'react-redux'

import { RootState } from '../../store/configureStore.store';

import { IRestaurant } from '../../global/types'

export const RestaurantHours = () => {
    const { hours } = useSelector((state: RootState) => state.RestaurantSelected.data) as IRestaurant
    const daysName = [
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado',
    ]
    let firstDay: number[] = [];
    let lastDay: number[] = [];
    let daysInterval = []

    hours && hours.map((item) => {
        item.days.map((day, index) => {
            if(index === 0) 
                firstDay.push(day-1);

            if(index === item.days.length-1) 
                lastDay.push(day-1);
        })
    })

    let firstDayFiltered = daysName.filter((day, index) => index === firstDay[index])

    console.log(firstDayFiltered)

    return (
        <>
            {firstDayFiltered.map(item => {
                return (
                    <p>{ item }</p>
                )
            })}
        </>
    )
}