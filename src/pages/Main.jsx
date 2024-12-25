
import { Link } from "react-router-dom";
import GameCard from "../components/GameCard";
import SwiperGames from "../components/Swiper";
import "./main.css";
import { FaArrowRight } from "react-icons/fa6";
export default function Main({ games,games2 }) {
  return (
    <section className="overflow-y-scroll">
     
        <div>
          <SwiperGames games={games} />
        </div>
      <div className="flex justify-between text-slate-100 mb-5">
        <div>
          <h2 className="uppercase text-2xl">Games on promotion</h2>
        </div>
        <Link to="category" className="flex items-center gap-2 text-[1.2rem] 
        decoration-none transition-[2s] hover:text-[var(--second)]">View More Games <span><FaArrowRight /></span>
        </Link>


      </div>
<div className="flex flex-wrap  justify-around items-center ">
 {games2.slice(0,8).map((game)=>(<GameCard key={game._id} game={game} />)) }
</div>

    </section> 
  );
}