// import { useSelector } from 'react-redux'

// import { RootState } from '../../store/configureStore.store';

// import { IRestaurant } from '../../global/types'

export const RestaurantHours = () => {
    // const { hours } = useSelector((state: RootState) => state.RestaurantSelected.data) as IRestaurant
    // const daysName = [
    //     'Domingo',
    //     'Segunda',
    //     'Terça',
    //     'Quarta',
    //     'Quinta',
    //     'Sexta',
    //     'Sábado',
    // ]
    // let firstDay: number[] = [];
    // let lastDay: number[] = [];

    // hours && hours.map((item) => {
    //     item.days.map((day, index) => {
    //         if(index === 0) 
    //             firstDay.push(day-1);

    //         if(index === item.days.length-1) 
    //             lastDay.push(day-1);
    //     })
    // })
    return (
        <>
            <p>Segunda à Sexta: 11:30 às 15:00</p>
            <p>Sábados: 11:30 às 22:00</p>
            <p>Domingos e Feriados: 11:30 às 15:00</p>
        </>
    )
}