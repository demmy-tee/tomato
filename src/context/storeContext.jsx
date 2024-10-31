import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (itemId) => {
      
    }
    const removeFromCart = () => {
      // implement remove from cart logic here  
    }

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart
}
  return (
    <StoreContext.Provider value={contextValue }>
        {props.children}
    </StoreContext.Provider>
  )
}
export default StoreContextProvider;