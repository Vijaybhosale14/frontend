//import React from 'react'


import  { useState } from 'react'
import { assets } from '../../assets/assets'
import './LoginPoup.css'


const LoginPoup = ({setShowLogin}) => {

    const[currState , setCurrState ] = useState ("Login")  

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-poup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className=" login-popup-input">
          {currState==="login"?<></>:<input type="text"  placeholder='your name'  required />}
            <input type="text"  placeholder='your name'  required />
            <input type="email" placeholder='your email' required />
            <input type="password" placeholder='password' required />
        </div>
        <button >{currState==="Sign Up"?"Create account":"Login"} </button>
        <div className="login-popup-condition">
          <input type= "text" required />
          <p> By continuing, i agree to the teams of use  & privacy policy </p>

        </div>
        {currState==="Login"
        ?<p>Create a New Account? <span onClick={()=>setCurrState("sing up")}>Click here</span></p>
         :<p>Already have an  Account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPoup
