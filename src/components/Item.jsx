import React from "react";

export default function Item({ item }) {
     return (
          <div className="meal-item">
               <article>
                    <img src={`http://localhost:3000/${item.image}`} alt="" />
                    <h3>{item.name}</h3>
                    <div className="meal-item-price">{item.price}</div>
                    <div className="meal-item-description">
                         {item.description}
                    </div>
                    <button className="button">Add To Cart</button>
               </article>
          </div>
     );
}
