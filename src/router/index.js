import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";
import Checkout from "../components/Checkout";
import Navilinks from "../components/Navlinks";

function Routes() {
  return (
    <Router basename="/">
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
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default Routes;
