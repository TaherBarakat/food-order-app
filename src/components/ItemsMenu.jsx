import React, { useState, useContext } from "react";
import { cartItemsContext } from "../store/CartItems";

import Item from "./Item";

export default function ItemsMenu() {
     const { meals } = useContext(cartItemsContext);

     // const [meals, setMeals] = useState([]);
     // useEffect(() => {
     //      fetch("http://localhost:3000/meals")
     //           .then((res) => res.json())
     //           .then((meals) => setMeals(meals));
     // }, []);
     return (
          <div id="meals">
               {meals.map((item) => (
                    <Item key={item.id} item={item} />
               ))}
          </div>
     );
}
