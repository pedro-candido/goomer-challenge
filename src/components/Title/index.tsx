import { StyledTitle, TitleContainer } from './style';

import { TitleProps } from '../../global/types'

export const Title = ({text, isHome}: TitleProps) => {
    return (
        <>
            <TitleContainer isHome={isHome}>
                <StyledTitle>{text}</StyledTitle>
            </TitleContainer>
        </>
    )
}

