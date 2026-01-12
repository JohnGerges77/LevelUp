import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa6";
import { IoBag } from "react-icons/io5";
import styled from "styled-components";
import GameRating from "./GameRating";
import { AppContext } from "../App";

const Card = styled.div`
  position: relative;
  padding: 16px;
  height: 360px;
  width: 260px;
  border-radius: 20px;
  background: var(--bgColor);
  box-shadow: -5px -5px 15px rgba(255,255,255,.1),
               5px 5px 15px #00000059;
`;

function GameCard({ game }) {
  const { library, setLibrary, bag, setBag } = useContext(AppContext);

  const inLibrary = library.some((g) => g._id === game._id);
  const inBag = bag.some((g) => g._id === game._id);

  return (
    <Card>
      <img
        src={game.img}
        alt={game.title}
        className="w-full h-[55%] rounded-xl object-cover"
      />

      {/* Favorite */}
      <button
        onClick={() =>
          inLibrary
            ? setLibrary(library.filter((g) => g._id !== game._id))
            : setLibrary([...library, game])
        }
        className={`absolute top-4 right-4 w-10 h-10 rounded-full
        flex items-center justify-center
        ${inLibrary ? "text-[var(--second)]" : "text-white"}
        bg-[var(--bgColor)]`}
      >
        <FaHeart />
      </button>

      <div className="flex justify-between items-center mt-3">
        <span className="bg-[var(--second)] px-3 py-1 rounded-lg text-sm">
          {game.level}
        </span>
        <GameRating rating={game.rating} />
      </div>

      <h3 className="text-lg font-semibold text-slate-100 mt-2 uppercase">
        {game.title}
      </h3>

      <div className="flex justify-between items-center text-slate-100 mt-2">
        {game.discount !== 0 && (
          <span className="line-through text-sm opacity-70">
            {game.price.toFixed(2)}$
          </span>
        )}
        <span className="font-bold text-lg">
          {((1 - game.discount) * game.price).toFixed(2)}$
        </span>
      </div>

      {/* Add to Bag */}
      <button
        disabled={inBag}
        onClick={() => setBag([...bag, game])}
        className="absolute bottom-0 right-0 w-12 h-12
        flex items-center justify-center
        bg-[var(--second)] rounded-tl-xl rounded-br-xl"
      >
        <IoBag />
      </button>
    </Card>
  );
}

export default GameCard;
