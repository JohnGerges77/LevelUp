import React, { useContext } from "react";
import { IoBag } from "react-icons/io5";
import { FaSlidersH } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import styled from "styled-components";
import { AppContext } from "../App";
import { Link } from "react-router-dom";

const Icons = styled.a`
positions:relative;
color: white;
font-size: 1.3rem;
width: 45px;
height:45px;
border-radius: 10px;
box-shadow: -5px -5px 15px rgba(255, 255, 255, 0.1),
5px 5px 15px rgba(0, 0, 0, 0.35);
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
cursor:pointer
`;

const Span=styled.span`
position: relative;
top:5px;
right:42px;
font-size: 0.8rem;
font-weight: 800;
height: 20px;
width: 20px;
color: azure;
padding:3px;
background-color: var(--second);
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
cursor:pointer

`
function Header({handleToggle}) {
  const {library,setLibrary,bag,setBag}=useContext(AppContext)
  return (
    <header
      className="flex justify-between
     text-stone-100  text-xl mb-2"
    >
      <FaSlidersH onClick={handleToggle} className="cursor-pointer" />

      <div className="flex items-center gap-5">
          <Link to="library">
        <Icons>
          <FaHeart />
        </Icons>
          </Link>
          <Link to="library">
          <Span>{library.length}</Span>
          </Link>
          <Link to="bag">
        <Icons>
          <IoBag />
        </Icons>
        </Link>
        <Link to="bag">
          <Span>{bag.length}</Span>
          </Link>
      </div>
    </header>
  );
}

export default Header;
