import React, { useContext, useState } from "react";
import { DataContext } from "./DataProvider";
import { BiTrash } from "react-icons/bi";
import styles from "./Cart.module.css";

export const Cart = () => {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);

  return (
    <>
      {cart.map((product) => (
        <div className={styles.details} key={product.id}>
          <div
            className={styles.imgContainer}
            style={{ backgroundImage: `url(${product.image})` }}
          />
          <div className={styles.description}>
            <h2 className={styles.name}>{product.name}</h2>
            <h3 className={styles.price}>COP {product.price}</h3>
            <div className={styles.counterContainer}>
              <button className={styles.btnPlus}>-</button>
              <span className={styles.quantity}>1</span>
              <button className={styles.btnLess}>+</button>
            </div>
          </div>

          <div className={styles.containerAddCart}>
            <BiTrash color="tomato" size="25px" />
          </div>
        </div>
      ))}
    </>
  );
};
