import React from "react";
import products from "../products";
import { ProductCard } from "./ProductCard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import styles from "./ProductsGrid.module.css";

export const ProductsGrid = () => {
  return (
    <div className={styles.productsGrid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
