import React, { useState } from "react";
import filterData from "../data/filterData";
import { IoIosSearch } from "react-icons/io";
import GameCard from "../components/GameCard";
function Category({ games2 }) {
  const [categoryData, setCategoryData] = useState(games2);

  const [filters, setfilters] = useState(filterData);

  const handleFilterActive = (name) => {
 
    setfilters(
      
      filters.map((filter) => {
        filter.active = false;
        if (filter.name === name) {
          filter.active = true;
        }
        return filter;
      })
    );   
    if (name === "All") {
      setCategoryData(games2);
      return;
    }
    setCategoryData(games2.filter((game) => game.category === name));
  };

  
  //search
  const[search,setSearch]=useState()

  const handleSearch= e =>{
    setCategoryData(
      games2.filter((game)=>game.title.toLowerCase().includes(e.target.value.toLowerCase()))
    )
setSearch(e.target.value)

  }
  
  
  return (
    <section className="overflow-y-scroll">
      <div className="text-stone-100 flex items-center justify-between">
        <div>
          <ul className="flex flex-wrap gap-[15px] p-[0] my-[30px] mx-[0] list-none">
            {filters.map((item) => (
              <li
                onClick={() => handleFilterActive(item.name)}
                className={`filter_li ${
                  item.active ? "active" : undefined
                } transition-[0.3s] uppercase cursor-pointer 
            py-[10px] px-[25px] rounded-[10px]`}
                key={item.id}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="box_shadow  inline-flex 
           w-[300px] h-[50px] gap-[15px] py-[8px] px-[20px]
          rounded-[10px] items-center mr-3"
        >
          <i className="text-[1.3rem]">
            {" "}
            <IoIosSearch />
          </i>
          <input
          value={search}
          onChange={handleSearch}
            type="text"
            placeholder="Seacrh"
            className="outline-none border-none bg-transparent 
text-[1.2rem] focus:text-slate-100
 placeholder:text-slate-400"
          />
        </div>
      </div>
      <div className="flex flex-wrap  justify-around items-center ">
        {categoryData.map((game) => (
          <GameCard key={game._id} game={game} />
        ))}
      </div>
    </section>
  );
}

export default Category;
