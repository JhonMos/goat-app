import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { DataContext } from "./DataProvider.js";
import styles from "./Details.module.css";

export const Details = () => {
  const { id } = useParams();
  const [products, setProducts] = useContext(DataContext);

  const details = products.filter(
    (product, index) => product.id === parseInt(id)
  );

  return (
    <>
      {details.map((product) => (
        <div className="details" key={product.id}>
          <div
            className={styles.imgContainer}
            style={{ backgroundImage: `url(${product.image})` }}
          />
          <div className="boxDetails">
            <p>{product.brand}</p>
            <h2>{product.name}</h2>
            <h3>COP {product.price}</h3>
            <p>Información del producto</p>
            <ul>
              {
                  product.description.map((description, index) =>(
                      <li key={index}>- {description}</li>
                  ))
              }
            </ul>
            <button>Agregar al carrito</button>
          </div>
        </div>
      ))}
    </>
  );
};
