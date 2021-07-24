import { useEffect, useLayoutEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../store/configureStore.store';

import { IRestaurant } from '../../global/types'

export const RestaurantHours = () => {
    const { hours } = useSelector((state: RootState) => state.RestaurantSelected.data) as IRestaurant
    const [filteredDays, setFilteredDays] = useState<string[]>()
    let firstDayFiltered: string[];
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
    

    useLayoutEffect(() => {
        setFilteredDays(daysName.filter((day, index) => index === firstDay[index]))
    }, [])

    return (
        <>
            <p>Segunda à Sexta: 11:30 às 15:00</p>
            <p>Sábados: 11:30 às 22:00</p>
            <p>Domingos e Feriados: 11:30 às 15:00</p>
        </>
    )
}