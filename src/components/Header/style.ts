import styled from 'styled-components';

export const StyledHeader = styled.header`
    max-height: 62px;
    background-color: #009CA3;
    margin-bottom: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1% 0;

    @media(min-width: 992px) {
        height: 62px;
    }
`

export const GoomerLogo = styled.img`
    max-width: 60px;
    image-rendering: optimizeSpeed;

    &:hover {
        cursor: pointer;
    }
`