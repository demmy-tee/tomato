import React from "react";
import { assets } from "../../assets/assets";
import './fooditem.css'

export default function FoodItem({ id, name, price, description, image }) {
  // const [cartItems, addToCart, removeFromCart] = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <h3>{name}</h3>

          <img src={assets.rating_starts} alt="rating" />
        </div>
        <p className="food-item-desc">{description }</p>
        <p className="food-item-price">${price }</p>

      </div>
    </div>
  )
}