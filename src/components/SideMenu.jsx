import React from "react";

import { IoGameController } from "react-icons/io5";
import NavBarItems from "./NavBarItems";
import { Link } from "react-router-dom";
function SideMenu({active}) {
  return (
    <div className={`side_menu ${active? 'active':''}`}>
      <Link to="/" className="logo">
     <IoGameController className="text-slate-50 min-w-10"/>
        <span className="pr-5">LevelUp</span>
      </Link>
      <NavBarItems active={active} />
    </div>
  );
}

export default SideMenu;
