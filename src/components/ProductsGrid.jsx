import React from "react";
import { ProductCard } from "./ProductCard";
import styles from "./ProductsGrid.module.css";
import capGoat from "../images/goatBrandBlanca.png";

export const ProductsGrid = () => {
  return (
    <>
      <section className={styles.home__container}>
        <div className={styles.home__data}>
          <h3 className={styles.home__title}>
            Vive
            <br />
            la expeciencia
            <br />
            GOAT
          </h3>
          <span className={styles.home__cap}>Gorras a la moda</span>
          <p></p>
        </div>
        <div className={styles.home__img}>
          <img className={styles.imgCapGoat} src={capGoat} alt="" />
        </div>
      </section>

      <div className={styles.productsGrid}>
        <ProductCard />
      </div>
    </>
  );
};
