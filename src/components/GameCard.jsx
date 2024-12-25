import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa6";
import GameRating from "./GameRating";
import { IoBag } from "react-icons/io5";
import styled from "styled-components";
import { AppContext } from "../App";
function GameCard({ game }) {
  const { library, setLibrary, bag, setBag } = useContext(AppContext);
  const handleAddToLibrary = (game) => {
    setLibrary([...library, game]);
  };

  const handleAddToBag = (game) => {
    if(bag.includes(game))return;
    setBag([...bag, game]);
  };

  const handleRemoveFromLibrary = (game) => {
    setLibrary(library.filter((item) => item._id !== game._id));
  };

  const GameCard = styled.div`
    position: relative;
    padding: 20px 15px;
    margin-bottom: 25px;
    height: 370px;
    width: 260px;
    border: 1px solid rgba(0, 0, 0, 0, 0.1);
    border-radius: 20px;
    background: var(--bgColor);
    box-shadow: -5px -5px 15px rgba(255, 255, 255, 0.1), 5px 5px 15px #00000059;
  `;
  const Title = styled.div`
    margin-top: 10px;
    font-family: "Bauhaus 93";
    text-transform: uppercase;
    font-size: 1.3rem;
    color: aliceblue;
  `;
  return (
    <div className=" mr-2">
      <GameCard>
        <img
          src={game.img}
          alt={game.title}
          className="w-[100%] h-[55%] rounded-[20px] 
      mb-[15px] object-cover object-center "
        />
        <a
          href="#"
          className={`${
            library.includes(game) ? "text-[var(--second)]" : "text-stone-50"
          }  flex items-center justify-center transition-[.3s] 
      absolute top-[20px] right-[15px] w-[40px] h-[40px] bg-[var(--bgColor)] p-[5px] rounded-l-[20px] rounded-t-[0]`}
          onClick={
            library.includes(game)
              ? () => handleRemoveFromLibrary(game)
              : () => handleAddToLibrary(game)
          }
        >
          <FaHeart />
        </a>
        <div className="flex justify-between">
          <span
            className="text-slate-200 bg-[var(--second)]
           py-[5px] px-[10px] rounded-[10px] font-normal space-x-1"
          >
            {game.level}
          </span>
          <GameRating key={game._id} rating={game.rating} />
        </div>
        <Title>{game.title}</Title>
        <div className="flex items-center justify-between flex-wrap text-slate-100">
          {game.discount != 0 && (
            <>
              <span className="bg-red-500 py-[2px] px-[5px] rounded-[10px] text-[1.2rem] font-bold">
                <i>{game.discount * 100}%</i>
              </span>
              <span className="line-through decoration-red-500 decoration-2  text-[0.8rem]">
                {" "}
                {game.price.toFixed(2)}$
              </span>
            </>
          )}
          <span className="text-[1.2rem] font-bold">
            ${((1 - game.discount) * game.price).toFixed(2)}
          </span>
        </div>
        <a
          href="#"
          className="absolute right-0 bottom-0 text-slate-100
        bg-[var(--second)] p-[10px] w-[40px] h-[40px] flex justify-center items-center
        text-[1.2rem] transition-[0.3s] rounded-tl-[20px] 
        rounded-br-[20px] hover:bg-slate-700 "
        onClick={()=>handleAddToBag(game)}
        >
          <IoBag />
        </a>
      </GameCard>
    </div>
  );
}

export default GameCard;
