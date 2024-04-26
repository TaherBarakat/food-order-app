import React from "react";
import { useContext } from "react";
import { cartItemsContext } from "../store/CartItems";

export default function Item({ item }) {
     const { onAddCart, cartItems } = useContext(cartItemsContext);

     return (
          <div className="meal-item">
               <article>
                    <img
                         src={`https://food-react-app-backend.onrender.com/${item.image}`}
                         alt=""
                    />
                    <h3>{item.name}</h3>
                    <div className="meal-item-price">{item.price}</div>
                    <div className="meal-item-description">
                         {item.description}
                    </div>
                    <button
                         onClick={() => onAddCart({ ...item, quantity: 1 })}
                         className="button  meal-item-actions  "
                         disabled={cartItems.find(
                              (itemA) => itemA.id == item.id
                         )}
                    >
                         {cartItems.find((itemA) => itemA.id == item.id)
                              ? "Added"
                              : "Add"}{" "}
                         To Cart
                    </button>
               </article>
          </div>
     );
}
