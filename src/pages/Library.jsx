import React from "react";
import GameCard from "../components/GameCard";

function Library({ games2 }) {
  if (games2.length < 1) {
    return (
      <section className="px-4">
        <h1 className="text-slate-50 font-semibold text-3xl md:text-4xl">
          My Library
        </h1>
        <div className="text-slate-100 mt-10 text-xl md:text-2xl font-medium">
          Your Library is Empty
        </div>
      </section>
    );
  }

  return (
    <section className="overflow-y-auto px-4 md:px-8">
      <h1 className="text-slate-50 font-semibold text-3xl md:text-4xl mb-6">
        My Library
      </h1>

      <div
        className="
          grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-6
          place-items-center
        "
      >
        {games2.map((game) => (
          <GameCard key={game._id} game={game} />
        ))}
      </div>
    </section>
  );
}

export default Library;
