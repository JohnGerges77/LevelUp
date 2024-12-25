import React, { useEffect, useState } from 'react'
import { BsFillWalletFill } from "react-icons/bs";
import ShopBagitem from '../components/ShopBagitem'
import styled from 'styled-components'
const TH =styled.th`
padding:20px 5px;
`
function Bag({games2}) {


const[totalPrice,setTotalPrice]=useState(0);

function handleTotalPrice(){
  return games2.map((game)=>game.price* (1-game.discount))
  .reduce((acc,cur)=>acc+cur,0)
}
useEffect(()=>{

setTotalPrice(handleTotalPrice())

},[games2])
  if(games2.length<1){

    return (
    <>
    <h1 className='text-slate-50 font-semibold text-4xl'> My Bag</h1>
    <div className='text-slate-100
    mt-10 text-2xl font-medium'>
 Your Bag is Empty
 </div>
      </>)
}
  return (
    <section className="overflow-y-scroll overflow-x-hidden text-slate-100">
 <>
 
<table className='box_shadow my-[50px]
 text-slate-50 rounded-[20px] bg-var[--bgColor] w-[95%] '>
  <thead>
    <tr className='text-[1.3rem] pt-5'>
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

     
    {games2.map((game,index)=>(<ShopBagitem index={index} key={game._id} game={game} />)) }
    
</tbody>
</table>
<div className="flex justify-between">
<div>
  <p className='text-[1.3rem]'>Total Items : {games2.length}</p>
</div>
<div className='flex items-center gap-[50px]'>
<span className='text-[1.15rem]'>Total Price : {totalPrice.toFixed(2)}</span>
  <a href="#" className='box_shadow flex items-center gap-3 mr-5 
   py-[12px] px-[20px] bg-[var(--bgColor)]
  rounded-[15px]'>
   <span> Check out  </span><BsFillWalletFill  />
 
     </a>
</div>
    </div>
 
 </>
    
   </section> 
  )
}

export default Bag
