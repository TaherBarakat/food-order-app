import React, { useState } from "react";
import { createContext } from "react";
export const cartItemsContext = createContext([]);

export default function CartItemsProvider({ children }) {
     const [cartItems, setCartItems] = useState([
          { name: "taher" },
          { name: "ss" },
     ]);
     return (
          <cartItemsContext.Provider value={cartItems}>
               {children}
          </cartItemsContext.Provider>
     );
}
