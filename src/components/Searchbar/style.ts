import styles from 'styled-components';
import { FiSearch } from 'react-icons/fi'


export const Input = styles('input')`
    &:focus {
        outline: 0;
        box-shadow: 0 2px 10px #00000029;
        transition: .4s box-shadow;
    }
    border-radius: 20px;
    font-size: 16px;
    width: 100%;
    padding: 10px 30px;
    border: 1px solid transparent;
    box-shadow: 0 2px 4px #00000029;
    transition: .4s box-shadow;
`

export const InputWrapper = styles('div')`
    display: flex;
    justify-content: center;
    width: 50%;
    margin: auto;
    position:relative;
`

export const SearchIcon = styles(FiSearch) `
    position: absolute;
    color: #404040;
    top: 30%;
    right: 2%;
`