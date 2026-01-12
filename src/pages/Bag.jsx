import React, { useEffect, useState } from "react";
import { BsFillWalletFill } from "react-icons/bs";
import ShopBagitem from "../components/ShopBagitem";
import styled from "styled-components";

const TH = styled.th`
  padding: 15px 10px;
  white-space: nowrap;
`;

function Bag({ games2 }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = games2
      .map((g) => g.price * (1 - g.discount))
      .reduce((a, b) => a + b, 0);
    setTotalPrice(total);
  }, [games2]);

  if (games2.length < 1) {
    return (
      <section className="px-4">
        <h1 className="text-slate-50 font-semibold text-3xl md:text-4xl">
          My Bag
        </h1>
        <div className="text-slate-100 mt-10 text-xl md:text-2xl font-medium">
          Your Bag is Empty
        </div>
      </section>
    );
  }

  return (
    <section className="overflow-y-auto px-4 md:px-8 text-slate-100">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">My Bag</h1>

      {/* Table Scroll */}
      <div className="overflow-x-auto">
        <table className="box_shadow min-w-[900px] rounded-2xl w-full">
          <thead>
            <tr className="text-lg">
              <TH>No.</TH>
              <TH>Preview</TH>
              <TH>Game</TH>
              <TH>Price</TH>
              <TH>Discount</TH>
              <TH>Payment</TH>
              <TH>Remove</TH>
            </tr>
          </thead>
          <tbody>
            {games2.map((game, index) => (
              <ShopBagitem
                key={game._id}
                index={index}
                game={game}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 gap-4">
        <p className="text-lg">Total Items : {games2.length}</p>

        <div className="flex items-center gap-6">
          <span className="text-lg">
            Total Price : {totalPrice.toFixed(2)}$
          </span>
          <button className="box_shadow flex items-center gap-3 py-3 px-6 rounded-xl bg-[var(--bgColor)]">
            Check out <BsFillWalletFill />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Bag;
