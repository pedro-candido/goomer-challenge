import styles from 'styled-components'

export const RestaurantsContainer = styles.div`
    @media(min-width: 992px){
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 80px;
        margin: 0% auto;
        grid-row: 20px;
    }
`