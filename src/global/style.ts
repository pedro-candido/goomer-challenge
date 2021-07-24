import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat';
    }
`

export const MainContainer = styled.div`
    max-width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
`