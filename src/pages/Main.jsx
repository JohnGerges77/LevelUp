import { Link } from "react-router-dom";
import GameCard from "../components/GameCard";
import SwiperGames from "../components/Swiper";
import "./main.css";
import { FaArrowRight } from "react-icons/fa6";

export default function Main({ games, games2 }) {
  return (
    <section className="overflow-y-auto px-4 md:px-8">
      
      {/* Swiper */}
      <div className="mb-8">
        <SwiperGames games={games} />
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-slate-100 mb-6 gap-3">
        <h2 className="uppercase text-xl md:text-2xl">
          Games on promotion
        </h2>

        <Link
          to="category"
          className="flex items-center gap-2 text-base md:text-[1.2rem]
          transition-all duration-300 hover:text-[var(--second)]"
        >
          View More Games <FaArrowRight />
        </Link>
      </div>

      {/* Games Grid */}
      <div className="
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-6
        place-items-center
      ">
        {games2.slice(0, 8).map((game) => (
          <GameCard key={game._id} game={game} />
        ))}
      </div>

    </section>
  );
}
