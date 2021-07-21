import styles from 'styled-components'

export const RestaurantsContainer = styles.div`
    @media(min-width: 992px){
        display: grid;
        grid-template-columns: 31.5% 31.5% 31.5%;
        grid-template-rows: 80px auto 80px; 
        column-gap: 30px;
        row-gap: 15px;
        max-width: 1070px;
        width: 100%;
        margin: 2% auto;
    }
`