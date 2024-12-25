import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";

import styled from "styled-components";

import { AppContext } from "../App";
const Td = styled.td`
  padding: 15px 0px;
  position: relative;
  left: 30px;
`;

function ShopBagitem({ game, index }) {
  const { bag, setBag } = useContext(AppContext);
  const handleRemoveFromBag = (game) => {
    setBag(bag.filter((item) => item._id !== game._id));
  };
  return (
    <>
    <tr className="mb-[20px] text-slate-50 w-[100%] pb-[200px]  ">
      <th className="">{index + 1}</th>
      <Td className="text-[1.1rem]">
        <img
          src={game.img}
          alt={game.title}
          className="
        w-[120px] h-[70px] object-cover object-center rounded-[12px]
        "
        />
      </Td>
      <Td className="text-[1.2rem]">{game.title}</Td>
      <Td className="text-[1.1rem]">${game.price.toFixed(2)}</Td>
      <Td>${game.discount * 100}%</Td>
      <Td>${(game.price * (1 - game.discount)).toFixed(2)}</Td>
      <Td>
        <a href="#"></a>
        <MdDelete onClick={()=> handleRemoveFromBag(game)} className="text-[1.6rem] cursor-pointer" />

      </Td>
    </tr>

    </>
  );
}

export default ShopBagitem;
