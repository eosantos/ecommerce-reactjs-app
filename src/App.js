import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./components/Checkout";
import Navilinks from "./components/Navlinks";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Navilinks />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Navilinks />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
