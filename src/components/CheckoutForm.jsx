import React, { forwardRef, useContext } from "react";
import { createPortal } from "react-dom";
import { cartItemsContext } from "../store/CartItems";
import { useRef } from "react";
const CheckoutForm = forwardRef(function ({ onBack, onSubmit }, ref) {
     const { cartItems, setCartItems } = useContext(cartItemsContext);
     const formRef = useRef();

     function handleSubmit(event) {
          event.preventDefault();
          console.log(event);
          let formData = new FormData(formRef.current);
          let customer = Object.fromEntries(formData.entries());

          let order = { items: cartItems, customer };
          fetch("http://localhost:3000/orders", {
               headers: {
                    "Content-Type": "application/json",
               },
               method: "POST",
               body: JSON.stringify({
                    order,
               }),
          });
          setCartItems([]);

          onSubmit();
     }

     return createPortal(
          <dialog ref={ref} className="cart modal">
               <form ref={formRef} onSubmit={(e) => handleSubmit(e)}>
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
                              <input
                                   required
                                   name="name"
                                   type="text"
                                   id="name"
                              />
                         </div>
                    </div>

                    <div className="control-row">
                         <div className="control">
                              <label htmlFor="email">E-mail Address</label>
                              <input
                                   required
                                   name="email"
                                   type="email"
                                   id="email"
                              />
                         </div>
                    </div>
                    <div className="control-row">
                         <div className="control">
                              <label htmlFor="street">Street</label>
                              <input
                                   required
                                   name="street"
                                   type="text"
                                   id="street"
                              />
                         </div>
                    </div>
                    <div className="control-row">
                         <div className="control">
                              <label htmlFor="postal">Postal Code</label>
                              <input
                                   required
                                   name="postal-code"
                                   type="number"
                                   id="postal"
                              />
                         </div>

                         <div className="control">
                              <label htmlFor="city">City</label>
                              <input
                                   required
                                   name="city"
                                   type="text"
                                   id="city"
                              />
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
                         <button type="submit" className="text-button button ">
                              Submit Order
                         </button>
                    </div>
               </form>
          </dialog>,

          document.getElementById("modal")
     );
});

export default CheckoutForm;
