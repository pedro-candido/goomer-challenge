import styles from 'styled-components'

export const CardContainer = styles.div`
    @media(min-width: 992px){
        max-width: 365px;
        display: flex;
        flex-direction: row;
        margin-top: 5%;
        padding: 0;
        border-radius: 4px;
        box-shadow: 0 2px 4px #00000029;
        position: relative;
        transition: .4s transform;

        &:hover {
            transform: scale(1.05);
            transition: .4s transform;
            cursor: pointer;
        }
    }
`

export const CardData = styles.div`
    @media(min-width: 992px){
        padding: 15px;
        width: 267px;
        h2{
            font-size: 18px;
            text-overflow: ellipsis;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            display: -webkit-box;
        }
        p {
            font-size: 14px;
            text-overflow: ellipsis;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            display: -webkit-box;
        }
    }
`
// usar img como prop pra poder usar o imageRendering e o usememo
export const CardImage = styles.div`
    @media(min-width: 992px){
        image-rendering: smooth;
        width: 100px;
        border-radius: 4px 0 0 4px
    }
`

export const Disponibility = styles.div<{isOpen: boolean}>`
    background-color: ${({isOpen}) => isOpen ? '#2B0D61' : '#B5ABD4'};
    font-size: 8px;
    width: 45px;
    height: 45px;
    padding: 5px;
    font-weight: bold;
    color: #fff;
    border-radius: 100%;
    position: absolute;
    right: -2%;
    top: -15%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`