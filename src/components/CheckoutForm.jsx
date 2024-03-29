import React, { forwardRef, useContext } from "react";
import { createPortal } from "react-dom";
import { cartItemsContext } from "../store/CartItems";
const CheckoutForm = forwardRef(function ({ onBack, onSubmit }, ref) {
     const { cartItems } = useContext(cartItemsContext);
     return createPortal(
          <dialog ref={ref} className="cart modal">
               <form action="">
                    <h2>Checkout</h2>
                    <p>
                         Total Amount: $
                         {cartItems?.reduce((total, item) => {
                              return +item.price * +item.quantity + total;
                         }, 0)}
                    </p>

                    <div className="control-row">
                         <div className="control">
                              <label htmlFor="name">Full Name</label>
                              <input type="text" id="name" />
                         </div>
                    </div>

                    <div className="control-row">
                         <div className="control">
                              <label htmlFor="email">E-mail Address</label>
                              <input type="email" id="email" />
                         </div>
                    </div>
                    <div className="control-row">
                         <div className="control">
                              <label htmlFor="street">Street</label>
                              <input type="text" id="street" />
                         </div>
                    </div>
                    <div className="control-row">
                         <div className="control">
                              <label htmlFor="postal">Postal Code</label>
                              <input type="number" id="postal" />
                         </div>

                         <div className="control">
                              <label htmlFor="city">City</label>
                              <input type="text" id="city" />
                         </div>
                    </div>
                    <div className="modal-actions ">
                         <button
                              type="button"
                              onClick={onBack}
                              className="text-button"
                         >
                              Back
                         </button>
                         <button
                              type="button"
                              onClick={onSubmit}
                              className="text-button button "
                         >
                              Submit Order
                         </button>
                    </div>
               </form>
          </dialog>,

          document.getElementById("modal")
     );
});

export default CheckoutForm;
