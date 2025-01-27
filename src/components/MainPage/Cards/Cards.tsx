import LeftCard from "./Cards/LeftCard"
import RightCard from "./Cards/RightCard"
import './Cards.css'

const Cards = () => {
    return (
        <div className="cards">
          <LeftCard />
          <RightCard />
        </div>
    )
}

export default Cards;