import "./App.css";
import { StateProvider } from "./StateProvider";
import Routes from "./router/index.js";
import reducer, { initialState } from "./Reducer";
import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <StateProvider initialSatate={initialState} reducer={reducer}>
      <CartProvider>
        <Routes />
      </CartProvider>
      <div className="App"></div>
    </StateProvider>
  );
}

export default App;
