import React, { useContext, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { forwardRef } from "react";
import { cartItemsContext } from "../store/CartItems";
import CartItem from "./CartItem";
const Cart = forwardRef(function ({ onClose, onOpenForm }, ref) {
     const { cartItems, decAmount, incAmount } = useContext(cartItemsContext);

     return createPortal(
          <dialog ref={ref} className="cart modal">
               <h2>Your Cart</h2>
               {cartItems.length === 0 ? (
                    <p>no items yet</p>
               ) : (
                    <>
                         {cartItems.map((item) => {
                              return (
                                   <CartItem
                                        key={item.id}
                                        item={item}
                                        onInc={incAmount}
                                        onDec={decAmount}
                                   />
                              );
                         })}
                         <div className="cart-total">
                              ${" "}
                              {cartItems.reduce((total, item) => {
                                   return +item.price * +item.quantity + total;
                              }, 0)}
                         </div>
                    </>
               )}

               <div className="modal-actions ">
                    <button onClick={onClose} className="text-button">
                         Close
                    </button>
                    <button
                         className="text-button button"
                         disabled={cartItems.length === 0}
                         onClick={onOpenForm}
                    >
                         Go To Checkout
                    </button>
               </div>
          </dialog>,
          document.getElementById("modal")
     );
});
export default Cart;
