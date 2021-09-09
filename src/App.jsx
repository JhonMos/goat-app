import React from "react";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { ProductsGrid } from "./components/ProductsGrid";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { DataProvider } from "./components/DataProvider";
import { Details } from "./components/Details";
import { Cart } from "./components/Cart";



export const App = () => {
  return (
    <DataProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/contact">
           Contacto
          </Route>
          <Route path="/about">
            Acerca de
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/products/:id">
            <Details />
          </Route>
          <Route path="/">
            <ProductsGrid />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </DataProvider>
  );
};
