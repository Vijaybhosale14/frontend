//import React from 'react'

import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import Cart from "./pages/cart/Cart"
import Footer from "./components/Footer/Footer";
import { useState } from "react"
import LoginPoup from "./components/LoginPopup/LoginPoup"


const App = () => {


  const [showLogin , setShowLogin] = useState(false)
  return (
    <>
    {showLogin? <LoginPoup setShowLogin={setShowLogin}/>:<></>}
     <div className="app">
      
      <Navbar  setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer />
    </>
    
  )
}

export default App
