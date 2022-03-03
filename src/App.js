import Header from "./components/UI/Layout/Header";
import Mitzvot from "./components/Mitzvot/Mitzvot";
import Cart from "../src/components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Mitzvot />
      </main>
    </CartProvider>
  );
}

export default App;
