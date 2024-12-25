import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideMenu from '../components/SideMenu'
import Header from '../components/Header'


import styled from 'styled-components'
import LaptopScreenMessage from '../components/LaptopScreenMessage'
const Main=styled.main`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 30px;
  border:8px solid var(--bgColor);
  background: var(--bgColor);
display: flex;
  justify-content: space-between;
  align-items: center;
  // overflow: hidden;
  transition: 0.5s;
  gap: 30px;


`
function AppLayout() {
  const [active,setActive]=useState(false)


   
function handleToggleActive(){
  setActive(!active)
}

  return (
<div>
  <div className='sm:hidden'>
<LaptopScreenMessage />

  </div>
<div className='sm:block hidden'>
    <Main>
<SideMenu active={active} />
<div className={`banner ${active?'active':""}`}>
<Header handleToggle={handleToggleActive} />
<Outlet />
</div>
    </Main>
  </div>
  </div>
  )
}

export default AppLayout
