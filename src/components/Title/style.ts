import styled from 'styled-components'

export const StyledTitle = styled.h1`
    display: flex;
    justify-content: center;
    
`

export const TitleContainer = styled.div<{isHome: boolean}>`
    display: flex;
    justify-content: ${({ isHome }) => isHome ? 'center' : 'left'};
    margin-bottom: ${({ isHome }) => isHome ? '32px;' : '0'};
`