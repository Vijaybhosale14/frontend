import  {useContext} from 'react'

import './FoodDisplay.css'
import { StoreContext } from "../../context/StoreContext";

import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = () => {

    const { food_list } = useContext(StoreContext);
  return (
    <div className='food-display' id='food-display'>
      <h2> Top dishes near you </h2>
      <div className="food-display-list">
        { food_list.map((item,index)=>{
          
          if(category==="All" || category===item.category){

          return (
            <FoodItem key={index} food_id={item.id} name={item.name}  discription={item.discription} price={item.price} image={item.image} category={item.category}/>
          )
          }

          })}

      </div>
    </div>
  )
}

export default FoodDisplay;
