import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import Category from "./pages/Category"
import Bag from "./pages/Bag"
import Library from "./pages/Library"
import AppLayout from "./pages/AppLayout"
import React, {  useEffect, useState } from "react"

export const AppContext=React.createContext();

function App() {
  const[games,setGames]=useState([])
  
    const[games2,setGames2]=useState([])
   
  

  useEffect(function(){
  
    async function fetchGames(){
   
      const res=await fetch(`/gamesData.json`);
      const data =await res.json();
      setGames((data))
  
  
      
     
    }
    fetchGames()
  },[]);


  useEffect(function(){
  
    async function fetchGames2(){
   
      const res=await fetch(`/gamesData2.json`);
      const data =await res.json();
      setGames2((data))
  
  
      
     
    }
    fetchGames2()
  },[]);



const[library,setLibrary]=useState([])
const[bag,setBag]=useState([])

  
  return (
<AppContext.Provider value={{library,setLibrary,bag,setBag}}>
{games2 &&games2.length>0 && (
      <>
    <BrowserRouter>
    <Routes>
    <Route element={<AppLayout />}>
     
       <Route path="/" element={<Main games={games} games2={games2} />} />
        <Route path="category" element={<Category games2={games2} />} />
        <Route path="bag" element={<Bag games2={bag} />} />
        <Route path="library" element={<Library games2={library} />} />
   
     
     
       
      </Route>

    
    </Routes>
  </BrowserRouter>
     </>
)}
</AppContext.Provider>


  )
}

export default App
