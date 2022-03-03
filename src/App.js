import Header from "./components/UI/Layout/Header";
import Mitzvot from "./components/Mitzvot/Mitzvot";
import Cart from "../src/components/Cart/Cart";

function App() {
  return (
    <>
      <Cart></Cart>
      <Header />
      <main>
        <Mitzvot />
      </main>
    </>
  );
}

export default App;
