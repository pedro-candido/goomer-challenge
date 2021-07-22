import { HTMLAttributes } from 'react';

export interface ICard extends HTMLAttributes<HTMLDivElement>{
    restaurant: {
        id: number,
        image: string,
        name: string,
        address: string,
        hours?: Array<IHours>
    }
}

export interface IHours {
    from: string,
    to: string,
    days: number[]
}

export interface ParamProps{
    id: string
}

export interface IRestaurant {
    id: number,
    name: string,
    address: string,
    image: string,
    hours: Array<IHours>
}

export interface TitleProps {
    text: string,
    isHome: boolean
}