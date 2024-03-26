import React, { useContext, useRef } from "react";
import { createPortal } from "react-dom";
import { forwardRef } from "react";
import { cartItemsContext } from "../store/CartItems";
import CartItem from "./CartItem";
const Cart = forwardRef(function ({}, ref) {
     const { cartItems, decAmount, incAmount } = useContext(cartItemsContext);
     // console.log(cartItems);

     return createPortal(
          <dialog ref={ref} className="cart modal">
               <h2>Your Cart</h2>
               {cartItems.length === 0 ? (
                    <p>no items yet</p>
               ) : (
                    cartItems.map((item) => (
                         <CartItem
                              key={item.id}
                              item={item}
                              onInc={incAmount}
                              onDec={decAmount}
                         />
                    ))
               )}
          </dialog>,
          document.getElementById("modal")
     );
});
export default Cart;
