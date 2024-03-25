import React, { useState, useEffect } from "react";
import { createContext } from "react";
export const cartItemsContext = createContext([]);

export default function CartItemsProvider({ children }) {
     const [cartItems, setCartItems] = useState([]);
     const [meals, setMeals] = useState([]);
     useEffect(() => {
          fetch("http://localhost:3000/meals")
               .then((res) => res.json())
               .then((meals) => setMeals(meals));
     }, []);

     function onAddCart(item) {
          if (cartItems.find((itemA) => itemA.id == item.id)) return;
          setCartItems((prev) => [...prev, item]);
     }
     return (
          <cartItemsContext.Provider
               value={{ cartItems, meals, setCartItems, onAddCart }}
          >
               {children}
          </cartItemsContext.Provider>
     );
}
