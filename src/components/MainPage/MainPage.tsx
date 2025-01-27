import Cards from "./Cards/Cards"
import MainCard from "./Cards/Cards/MainCard"
import Footer from "./components/Footer"
import Header from "./components/Header"
import './MainPage.css'

const MainPage = () => {
    return (
        <div className="wrapper" >
            <Header />
            <MainCard />
            <Cards />
            <Footer />
        </div>
    )
}

export default MainPage;