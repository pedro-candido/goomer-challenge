import { CardContainer, CardData, CardImage, Disponibility } from './style'
import { useState, useEffect, useMemo } from 'react'
import { getDay, getHours } from 'date-fns'

export interface ICard {
    restaurant: {
        id: number;
        image: string;
        name: string;
        address: string;
        hours?: Array<IHours>
    }
}

export interface IHours {
    from: string;
    to: string;
    days: number[];
}

export const Card = ({ restaurant }: ICard) => {
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
    
            hours.map(({ days, from, to }) => {
                let openHour = Number(from.split(':')[0]);
                let closeHour = Number(to.split(':')[0]);
                if (days.includes(timeNow.day) && timeNow.hour >= openHour && timeNow.hour < closeHour) {
                    return setIsOpen(true);
                }
                if (openHour > closeHour && days.includes(timeNow.day - 1)) {
                    if (timeNow.hour > openHour || timeNow.hour < closeHour)
                        return setIsOpen(true);
                }
                return setIsOpen(false);
            });
        }

        restaurant.hours && compareTime(restaurant.hours)
    }, [timeNow, restaurant.hours])

    return (
        <CardContainer>
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