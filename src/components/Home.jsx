import React from "react";
import { ProductCard } from "./ProductCard";
import styles from "./Home.module.css";
import capGoat from "../images/goatBrandBlanca.png";

export const Home = () => {
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
      <div>
        <h2 className={styles.sectionTitle}>Productos</h2>
        <div className={styles.productsGrid}>
          <ProductCard />
        </div>
      </div>
    </>
  );
};
