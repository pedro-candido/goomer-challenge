import { Title, Searchbar, Restaurants } from '../../components'

export const Home = () => {
    return (
        <>
            <Title
                isHome={true}
                text="Bem-vindo ao Lista Rango"
            />
            <Searchbar
                placeholder={`Buscar estabelecimento`}
            />
            <Restaurants />
        </>
    )
}
