import React from "react";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { ProductsGrid } from "./components/ProductsGrid";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/contact">
           Contacto
          </Route>
          <Route path="/about">
            Acerca de
          </Route>
          <Route path="/">
            <ProductsGrid />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};
