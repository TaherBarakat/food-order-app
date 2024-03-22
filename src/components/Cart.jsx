import React, { useContext, useRef } from "react";
import { createPortal } from "react-dom";
import { forwardRef } from "react";
import { cartItemsContext } from "../store/CartItems";
const Cart = forwardRef(function ({}, ref) {
     const cartItems = useContext(cartItemsContext);

     return createPortal(
          <dialog ref={ref} className="cart modal">
               <h2>Your Cart</h2>
               {cartItems.length === 0 ? (
                    <p>no items yet</p>
               ) : (
                    <ul>
                         {cartItems.map((item) => (
                              <li>{item.name}</li>
                         ))}
                    </ul>
               )}
          </dialog>,
          document.getElementById("modal")
     );
});
export default Cart;
