import { CardContainer, CardData, CardImage, Disponibility } from './style'
import { useState, useEffect } from 'react'
interface CardProps {
    id: number;
    logo: string;
    name: string;
    address: string;
    isRestaurantOpen: boolean;
}

export const Card = ({logo, name, address, isRestaurantOpen }: CardProps) =>{
    return (
        <CardContainer>
            <CardImage style={{background: `url(${logo}) 0% 0% round padding-box`}} />
            <CardData>
                <h2>{name}</h2>
                <p>{address}</p>
            </CardData>
            <Disponibility>
                { isRestaurantOpen && <p>
                        <span>Aberto</span>
                        <span>Agora</span>
                    </p>}
                { !isRestaurantOpen && <p>Teste</p>}
                
            </Disponibility>
        </CardContainer>
    )
}