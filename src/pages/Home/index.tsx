import { Title, Header, Searchbar, Restaurants } from '../../components'

const Home = () => {
    return (
        <>
            <Header />,
            <Title text="Bem-vindo ao Lista Rango" />
            <Searchbar />

            <Restaurants />
        </>
    )
}

export default Home