import React from "react";

export default function CartItem({ item }) {
     console.log(item);
     return (
          <div className="cart-item">
               <p>
                    {item.name} - {item.quantity} &times; {item.price}
               </p>
               <div className="cart-item-actions">
                    <button>-</button>
                    {item.quantity}
                    <button>+</button>
               </div>
          </div>
     );
}
