import { StyledHeader, GoomerLogo } from './style'
import { useHistory, useLocation } from 'react-router-dom'

export const Header = () => {

    const history = useHistory();
    const location = useLocation();

    const handleClick = () => {
        if(location.pathname !== '/')
            history.push('/')
    }

    return(
        <StyledHeader>
            <GoomerLogo onClick={handleClick} src="https://i.imgur.com/N1PZ8OJ.png" alt="" />
        </StyledHeader>
    )
}

