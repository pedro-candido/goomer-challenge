import StyledTitle from './style'

interface TitleProps {
    text: string
}

export const Title = ({text}: TitleProps) => {
    return (
        <>
            <StyledTitle>{text}</StyledTitle>
        </>
    )
}

