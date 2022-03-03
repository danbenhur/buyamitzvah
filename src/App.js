import Header from "./components/UI/Layout/Header";
import Mitzvot from "./components/Mitzvot/Mitzvot";
import Cart from "../src/components/Cart/Cart";
import { Fragment, useState } from "react";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Mitzvot />
      </main>
    </Fragment>
  );
}

export default App;
