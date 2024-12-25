import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
function GameRating({rating}) {
    const[stars,setStars]=useState([])
const Stars=()=>{
let stars=[]
    for(let i=0;i<rating;i++){
        stars.push(i)
    }
    return stars;
};


useEffect(()=>{

setStars(Stars());

},[])


    return (
        <div className='flex text-[var(--second)] gap-1'>
      {stars.map(()=><FaStar key={Math.random()} />)}
    </div>
  )
}


export default GameRating
