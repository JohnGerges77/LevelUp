import React from 'react'
import GameCard from '../components/GameCard'

function Library({games2}) {
  if(games2.length<1){

         return (
         <>
         <h1 className='text-slate-50 font-semibold text-4xl'> My Library</h1>
         <div className='text-slate-100
         mt-10 text-2xl font-medium'>
      Your Library is Empty
      </div>
           </>)
  }
  return (

 <section className="overflow-y-scroll">
 
   

<div className="flex flex-wrap  justify-start items-center ">
{games2.map((game)=>(<GameCard key={game._id} game={game} />)) }
</div>

</section> 
  )
}

export default Library
