import { CardContainer, CardData, CardImage, Disponibility } from './style'

interface CardProps {
    logo: string;
    name: string;
    address: string;
}

export const Card = ({logo, name, address}: CardProps) =>{
    return (
        <CardContainer>
            <CardImage style={{background: `url(${logo}) 0% 0% round padding-box`}} />
            <CardData>
                <h2>{name}</h2>
                <p>{address}</p>
            </CardData>
            <Disponibility />
        </CardContainer>
    )
}