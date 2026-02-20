//import React from 'react'

import { menu_list } from '../../assets/assets'
import './ExploreMenu.css'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our  Menu</h1>
        <p className='explore-menu-text'>Food is very important for our life. It gives us energy to work, play, and grow. Healthy food keeps our body strong and protects us from diseases. We should eat fruits, vegetables, grains, and milk every day. Junk food is tasty but harmful to our health. Therefore, we must eat healthy food to live a happy and healthy life.</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index) => {
                return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name? "All":item.menu_name)} key={index} className="explore-menu-item-list">
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
     })}
    </div>
     <hr/>

    </div>
  )
}

export default ExploreMenu 


