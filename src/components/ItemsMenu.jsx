import React, { useEffect, useState } from "react";
import Item from "./Item";
export default function ItemsMenu() {
     const [meals, setMeals] = useState([]);
     useEffect(() => {
          fetch("http://localhost:3000/meals")
               .then((res) => res.json())
               .then((meals) => setMeals(meals));
     }, []);
     console.log(meals);
     return (
          <div id="meals">
               {meals.map((item) => (
                    <Item key={item.id} item={item} />
               ))}
          </div>
     );
}
