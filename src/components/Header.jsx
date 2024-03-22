import { useState } from "react";
import logo from "../assets/logo.jpg";
import Cart from "./Cart";
import React, { useRef } from "react";

export default function Header() {
     const [modalIsoOpen, setModalIsOpen] = useState(false);
     const modal = useRef();
     function open() {
          modalIsoOpen ? modal.current.showModal() : modal.current.close();
     }
     return (
          <div id="main-header">
               <div id="title">
                    <img src={logo} alt="logo" /> <h1>REACTFOOD</h1>
               </div>
               <button
                    onClick={() => {
                         setModalIsOpen((prev) => !prev);
                         open();
                    }}
               >
                    cart
               </button>

               <Cart ref={modal}></Cart>
          </div>
     );
}
