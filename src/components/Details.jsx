import React, { useContext, useRef } from "react";
import { useParams } from "react-router";
import { DataContext } from "./DataProvider.js";
import styles from "./Details.module.css";

export const Details = () => {
  const { id } = useParams();
  const value = useContext(DataContext)
  const [products] = value.products;
  const imgDiv = useRef();


  const details = products.filter((product) => product.id === parseInt(id));

  const handleMouseMove = (e) =>{
    const {left, top, width, height} = e.target.getBoundingClientRect();
    const x = (e.pageX - left) / width * 100;
    const y = (e.pageY - top) / height * 100;
    imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
  }

  return (
    <>
      {details.map((product) => (
        <div className={styles.details} key={product.id}>
          <div
            className={styles.imgContainer}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => imgDiv.current.style.backgroundPosition = `center`}
            ref={imgDiv}
            style={{ backgroundImage: `url(${product.image})` }}
          />
          <div className={styles.boxDetails}>
            <p className={styles.brand}>{product.brand}</p>
            <h2 className={styles.name}>{product.name}</h2>
            <div className={styles.prueba}>
              <h3 className={styles.price}>COP {product.price}</h3>
              <div className={styles.counterContainer}>
                <button className={styles.btnPlus}>-</button>
                <span className={styles.quantity}>1</span>
                <button className={styles.btnLess}>+</button>
              </div>
            </div>
            <p className={styles.infoProduct}>Información del producto</p>
            <ul className={styles.description}>
              {product.description.map((description, index) => (
                <li key={index}>- {description}</li>
              ))}
            </ul>
            <div className={styles.containerAddCart}>
              <button className={styles.addCart}>Agregar al carrito</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
