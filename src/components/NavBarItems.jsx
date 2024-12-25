import React from 'react'
import { FaHome } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { IoLibrary } from "react-icons/io5";
import { IoBag } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {

display:flex;
align-items:center;
   
   
  
    transition: all 0.5s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
   padding:7px 0px 5px 15px;
border-radius:20px;

   background: var(--bgColor);
  box-shadow: -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.35);
  }
    `;

function NavBarItems({active}) {
  return (
    <ul className='text-stone-50'>
        <li className='pt-6 text-xl'>
         
          <StyledNavLink to="/">
           <FaHome className={`min-w-5 ${active?'relative right-2':''}`}/>
            <span className={`pl-5  ${active?'hidden':''}`} >Home</span>
          </StyledNavLink>
        </li>
        <li className='pt-6 text-xl'>
         
          <StyledNavLink to="category">
         <BiCategory className={`min-w-5 ${active?'relative right-2':''}`} />
            <span className={`pl-5  ${active?'hidden':''}`}>Category</span>
          </StyledNavLink>
        </li> 

        <li className='pt-6 text-xl'>
         
          <StyledNavLink to="library">
           <IoLibrary className={`min-w-5 ${active?'relative right-2':''}`} />
            <span className={`pl-5  ${active?'hidden':''}`}>My Library</span>
          </StyledNavLink>
        </li>
 
        <li className='pt-6 text-xl'>
         
          <StyledNavLink to="bag">
            <IoBag className={`min-w-5 ${active?'relative right-2':''}`}/>
            <span className={`pl-5  ${active?'hidden':''}`}>My Bag</span>
          </StyledNavLink>
        </li>

      </ul>

      
  )
}

export default NavBarItems