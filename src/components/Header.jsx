import { useState } from "react";
import logo from "../assets/logo.jpg";
import Cart from "./Cart";
import React, { useRef } from "react";
import { cartItemsContext } from "../store/CartItems";
import CheckoutForm from "./CheckoutForm";
import Success from "./Success";
import { useContext } from "react";
export default function Header() {
     // const [modalIsoOpen, setModalIsOpen] = useState(false);
     const { cartItems } = useContext(cartItemsContext);

     const cart = useRef();
     const form = useRef();
     const success = useRef();
     function open(modal) {
          !modal.current.open
               ? modal.current.showModal()
               : modal.current.close();
          // console.log(modal.current.open);
     }
     return (
          <div id="main-header">
               <div id="title">
                    <img src={logo} alt="logo" /> <h1>REACTFOOD</h1>
               </div>
               <button
                    className="order-button"
                    onClick={() => {
                         // setModalIsOpen((prev) => !prev);
                         open(cart);
                    }}
               >
                    cart ( {cartItems.length} )
               </button>

               <Cart
                    ref={cart}
                    onClose={() => open(cart)}
                    onOpenForm={() => {
                         open(cart);
                         open(form);
                    }}
               ></Cart>
               <CheckoutForm
                    ref={form}
                    onBack={() => {
                         open(cart);
                         open(form);
                    }}
                    onSubmit={() => {
                         open(form);
                         open(success);
                    }}
               ></CheckoutForm>
               <Success
                    ref={success}
                    onClose={() => {
                         open(success);
                    }}
               />
          </div>
     );
}
