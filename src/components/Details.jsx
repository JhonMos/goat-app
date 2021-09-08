import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { DataContext } from "./DataProvider.js";

export const Details = () => {
  const { id } = useParams();
  const [products, setProducts] = useContext(DataContext);

  const details = products.filter(
    (product, index) => product.id === parseInt(id)
  );

  return <div>Details</div>;
};
