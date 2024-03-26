import React from "react";

export default function CartItem({ item, onInc, onDec }) {
     console.log(item);
     return (
          <div className="cart-item">
               <p>
                    {item.name} - {item.quantity} &times; {item.price}
               </p>
               <div className="cart-item-actions">
                    <button onClick={() => onDec(item)}>-</button>
                    {item.quantity}
                    <button onClick={() => onInc(item)}>+</button>
               </div>
          </div>
     );
}
