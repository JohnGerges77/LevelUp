import React, { useState } from "react";
import filterData from "../data/filterData";
import { IoIosSearch } from "react-icons/io";
import GameCard from "../components/GameCard";

function Category({ games2 }) {
  const [categoryData, setCategoryData] = useState(games2);
  const [filters, setFilters] = useState(filterData);
  const [search, setSearch] = useState("");

  const handleFilterActive = (name) => {
    setFilters(
      filters.map((filter) => ({
        ...filter,
        active: filter.name === name,
      }))
    );

    if (name === "All") {
      setCategoryData(games2);
      return;
    }

    setCategoryData(games2.filter((game) => game.category === name));
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    setCategoryData(
      games2.filter((game) =>
        game.title.toLowerCase().includes(value)
      )
    );
  };

  return (
    <section className="overflow-y-auto px-4 md:px-8">
      {/* Filters & Search */}
      <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
        <ul className="flex flex-wrap gap-3 list-none">
          {filters.map((item) => (
            <li
              key={item.id}
              onClick={() => handleFilterActive(item.name)}
              className={`filter_li ${
                item.active ? "active" : ""
              } uppercase cursor-pointer py-2 px-5 rounded-lg transition text-white`}
            >
              {item.name}
            </li>
          ))}
        </ul>

        <div className="box_shadow flex items-center gap-3 w-full sm:w-[300px] h-[45px] px-4 rounded-lg">
          <IoIosSearch className="text-xl text-slate-300" />
          <input
            value={search}
            onChange={handleSearch}
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-full text-slate-100 placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Games */}
      <div
        className="
          grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-6
          mt-8
          place-items-center
        "
      >
        {categoryData.map((game) => (
          <GameCard key={game._id} game={game} />
        ))}
      </div>
    </section>
  );
}

export default Category;
