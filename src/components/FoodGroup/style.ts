import styled from 'styled-components'

export const FoodGroupStyle = styled.div`
    justify-content: space-between;
    display: flex;
    align-items: center;
    align-content: center;
    max-width: 80%;
    border-bottom: 0.15rem solid #212529;
    margin-bottom: 2%;
    &:hover {
        cursor: pointer;
    }
    h3::selection {
        background-color: transparent;
    }
`