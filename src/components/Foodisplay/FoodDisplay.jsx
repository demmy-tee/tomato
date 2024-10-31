import { useContext } from 'react';
import {StoreContext} from '../../context/storeContext'
import FoodItem from '../foodItems/FoodItem';
import playstore from '../../assets/play_store.png';
import appstore from '../../assets/app_store.png';
import './foodDisplay.css';
const FoodDisplay = ({ category }) => {
  const {food_list} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
      <h2> Top Dishes Near You</h2>
      <div className='food-display-list'>
        {food_list.map((item, index) => {
          if (category==="All" || category===item.category) {
              return <FoodItem key={index} id={item.id} name={item.name} description={item.description} image={item.image} price={item.price} />
          }
          })}
      </div>
      <div className='experience'>
        <p>
          For Better Experience Download
          Tomato App
        </p>
        <div className='images'>
          <div>
             <img src={playstore} alt="playstore" />
          </div>
          <div>
               <img src={appstore} alt="appstore" />
         </div>
       </div>
          </div>
    </div>
  )
}
export default FoodDisplay;