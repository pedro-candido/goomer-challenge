import styles from 'styled-components'

export const CardContainer = styles.div`
    @media(min-width: 992px){
        max-height: 100px;
        max-width:367px;
        display: flex;
        flex-direction: row;
        margin-top: 5%;
        padding: 0;
        border-radius: 4px;
        box-shadow: 0 2px 4px #00000029;
        position: relative;
    }
`

export const CardData = styles.div`
    @media(min-width: 992px){
        display: flex;
        flex-direction: column;
        padding: 20px;
        width: 267px;
    }
`

export const CardImage = styles.div`
    @media(min-width: 992px){
        width: 100px;
        border-radius: 4px 0 0 4px
    }
`

export const Disponibility = styles.div`
    min-width: 48px;
    min-height: 48px;
    border-radius: 100%;
    background-color: red;
    position: absolute;
    right: -5%;
    top: -15%;
`