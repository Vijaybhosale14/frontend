//import React from 'react'
import  { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';


const Navbar = ({setShowLogin}) => {

  const [menu , setMenu] =useState ("home");

  const {getTotalCartAmount} =useContext(StoreContext);
  return (
    <div className='navbar'>
     <link to='/'><img src={assets.logo} alt="Logo" className='Logo'/></link>
      <ul className='navbar-menu'>
        <Link to="/" onClick={() => setMenu("home")} className= {menu ==="home"? "active" :""}>home </Link>
        <a href='#explor-emenu' onClick={() => setMenu("menu")} className= {menu ==="menu"? "active" :""}>menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile_app")}className={menu ==="mobile_app"? "active" :""}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact_us")}className={menu ==="contact_us"? "active" :""}>contact us</a>
      </ul>

      <div className="navbar_right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar_search_icon">
           <link  to='/cart'> <img src={assets.basket_icon} alt="basket" />  </link>
        
          <div className={getTotalCartAmount()===0?0:"dot"}></div>
          <button  onClick={()=>setShowLogin(true)}>sign in </button>


        </div>
      </div>

      
    </div>
  )
}

export default Navbar
