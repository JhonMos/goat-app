import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./DataProvider";
import styles from "./ProductCard.module.css";

export const ProductCard = () => {
  const [products] = useContext(DataContext);
  console.log(products);
  return (
    <>
      {
        products.map((product) => (
          <div className={styles.card__product} key={product.id}>
            <div className={styles.card__img}>
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.name} />
              </Link>
            </div>
            <div className={styles.card__description}>
              <span className={styles.card__brand}>{product.brand}</span>
              <span className={styles.card__name}>{product.name}</span>
              <span className={styles.card__price}>COP. {product.price}</span>
            </div>
          </div>
      ))}
    </>
  );
};
