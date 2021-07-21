import { Title, Header, Searchbar, Restaurants } from '../../components'

export const Home = () => {
    return (
        <>
            <Title text="Bem-vindo ao Lista Rango" />
            <Searchbar
                placeholder={`Buscar estabelecimento`}
            />
            <Restaurants />
        </>
    )
}
