import { CardContainer, CardData, CardImage, Disponibility } from './style'
import { useState, useEffect, useMemo, HTMLAttributes } from 'react'
import { getDay, getHours } from 'date-fns'

import { ICard, IHours } from '../../global/types'

export const Card = ({ restaurant, ...rest }: ICard) => {
    // Tentar inserir prop img e passar no styled components
    const [isOpen, setIsOpen] = useState(false);
    const cardMemoized = useMemo(() => <CardImage style={{ background: `url(${restaurant.image}) 0% 0% round padding-box` }} />, [restaurant])
    const [timeNow, setTimeNow] = useState({
        day: getDay(new Date()) + 1,
        hour: getHours(new Date())
    })

    window.setInterval(() => {
        setTimeNow({
            day: getDay(new Date()) + 1,
            hour: getHours(new Date())
        })
    }, 10000)

    useEffect(() => {
        const compareTime = (hours: Array<IHours>) => {            
            !hours && setIsOpen(false);
            let tmp = hours.map(({ days, from, to }) => {
                let openHour = Number(from.split(':')[0]);
                let closeHour = Number(to.split(':')[0]);
                if (days.includes(timeNow.day) && timeNow.hour >= openHour && timeNow.hour < closeHour) {
                    return true;
                }
                if (openHour > closeHour && days.includes(timeNow.day - 1)) {
                    if (timeNow.hour >= openHour || timeNow.hour < closeHour){
                        return true;
                    }
                }
                return false;
            });

            return tmp
        }
        restaurant.hours && compareTime(restaurant.hours)
    }, [timeNow, restaurant.hours])

    return (
        <CardContainer {...rest}>
            { cardMemoized }
            <CardData>
                <h2>{restaurant.name}</h2>
                <p>{restaurant.address}</p>
            </CardData>
            <Disponibility isOpen={isOpen}>
                {isOpen ? <>
                    <span>Aberto</span>
                    <span>agora</span>
                </> : <span>Fechado</span>}
            </Disponibility>
        </CardContainer>
    )
}