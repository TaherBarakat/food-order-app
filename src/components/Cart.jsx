import React, { useRef } from "react";
import { createPortal } from "react-dom";
import { forwardRef } from "react";

const Cart = forwardRef(function ({}, ref) {
     return createPortal(
          <dialog ref={ref} className="cart modal">
               Cart
          </dialog>,
          document.getElementById("modal")
     );
});
export default Cart;
