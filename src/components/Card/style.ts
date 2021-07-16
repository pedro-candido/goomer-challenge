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
        h2{
            font-size: 16px;
        }
        p {
            font-size: 12px;
        }
    }
`

export const CardImage = styles.div`
    @media(min-width: 992px){
        width: 100px;
        border-radius: 4px 0 0 4px
    }
`

export const Disponibility = styles.div`
    font-size: 8px;
    min-width: 38px;
    min-height: 38px;
    padding: 5px;
    font-weight: bold;
    color: #fff;
    border-radius: 100%;
    background-color: red;
    position: absolute;
    right: -2%;
    top: -15%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`