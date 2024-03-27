import { useState } from "react";
import logo from "../assets/logo.jpg";
import Cart from "./Cart";
import React, { useRef } from "react";
import { cartItemsContext } from "../store/CartItems";
import { useContext } from "react";
export default function Header() {
     // const [modalIsoOpen, setModalIsOpen] = useState(false);
     const { cartItems } = useContext(cartItemsContext);

     const modal = useRef();
     function open() {
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
                    className="button"
                    onClick={() => {
                         // setModalIsOpen((prev) => !prev);
                         open();
                    }}
               >
                    cart ( {cartItems.length} )
               </button>

               <Cart ref={modal} onOpen={open}></Cart>
          </div>
     );
}
