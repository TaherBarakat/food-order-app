import React, { useState, useEffect } from "react";
import { createContext } from "react";
export const cartItemsContext = createContext([]);

export default function CartItemsProvider({ children }) {
     const [cartItems, setCartItems] = useState([]);
     const [meals, setMeals] = useState([]);
     useEffect(() => {
          fetch("https://food-react-app-backend.onrender.com/meals")
               .then((res) => res.json())
               .then((meals) => setMeals(meals));
     }, []);

     function onAddCart(item) {
          if (cartItems.find((itemA) => itemA.id == item.id)) return;
          setCartItems((prev) => [...prev, item]);
     }
     function incAmount(item) {
          setCartItems((prev) => {
               let updatedCart = [...prev];
               updatedCart[prev.indexOf(item)].quantity += 1;
               return updatedCart;
          });
     }
     function decAmount(item) {
          setCartItems((prev) => {
               let updatedCart = [...prev];
               updatedCart[prev.indexOf(item)].quantity -= 1;
               if (updatedCart[prev.indexOf(item)].quantity <= 0)
                    return updatedCart.filter((i) => i != item);

               return updatedCart;
          });
     }

     return (
          <cartItemsContext.Provider
               value={{
                    cartItems,
                    meals,
                    setCartItems,
                    onAddCart,
                    incAmount,
                    decAmount,
               }}
          >
               {children}
          </cartItemsContext.Provider>
     );
}
