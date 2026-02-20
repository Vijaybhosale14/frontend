//import React from 'react'

import { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';
const Cart = () => {

  const{ cartItems, food_list ,removeFromCart,getTotalcartAmount } = useContext(StoreContext);

  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-item-title'>
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item)=>{
          if(cartItems[item._id]>0)
          {
            return(
              <div>
              <div className='cart-item-title cart-item-item'>
                <img src={item.image} alt=""/>
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item_id]}</p>
                <p>${item.price * cartItems[item_id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'> X </p>
              </div>
              <hr/>
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2> Cart Totals</h2>
          <div> 
            <div className="cart-total-details" >
                  <p> Subtotal</p>
                  <p> {getTotalcartAmount()} </p>
            </div>
            <hr />
            <div className="cart-total-details" >
                <p>Delivery Fee</p>
                <p>{ getTotalcartAmount()===0?0:2 }</p>
            </div>
            <hr />
            <div className="cart-total-details" >
              <p>Total</p>
              <p>{getTotalcartAmount()===0?0:getTotalcartAmount()+2}</p>
            </div>
          </div>
          <button conclick={()=>navigate()} >PROCEED TO CHECKOUT </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p> If you have code, Enter it here..</p>
            <div className='cart-promocode-input'>
            <input type="text" placeholder='promo code' />
             <button>Submit </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;
