import { Title, Header, Searchbar, Restaurants } from '../../components'

const Home = () => {
    return (
        <>
            <Header />,
            <Title text="Bem-vindo ao Lista Rango" />
            <Searchbar
                placeholder={`Buscar estabelecimento`}
            />
            <Restaurants />
        </>
    )
}

export default Home