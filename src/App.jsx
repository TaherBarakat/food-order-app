import Header from "./components/Header";
import ItemsMenu from "./components/ItemsMenu";
import CartItemsProvider from "./store/CartItems";
function App() {
     return (
          <>
               <CartItemsProvider>
                    <Header />
                    <ItemsMenu />
               </CartItemsProvider>
          </>
     );
}

export default App;
