import React, { createContext, useState } from "react";
import happyFaceNegra from "../images/happyFaceNegra.png";
import sexyPeachNegra from "../images/sexyPeachNegra.png";
import sourFlavorJuiceNegra from "../images/sourFlavorJuiceNegra.png";
import idiotLoveBlanca from "../images/idiotLoveBlanca.png";
import moneyFirstBlanca from "../images/moneyFirstBlanca.png";
import goatBrandBlanca from "../images/goatBrandBlanca.png";
import cactusJackMaskCafe from "../images/cactusJackMaskCafe.png";
import sourFlavorJuiceCafe from "../images/sourFlavorJuiceCafe.png";
import rainOfVibesRoja from "../images/rainOfVibesRoja.png";
import tvNoSignalAzul from "../images/tvNoSignalAzul.png";
import cityComptonAzul from "../images/cityComptonAzul.png";
import happyFaceAzul from "../images/happyFaceAzul.png";

export const DataContext = createContext();
export const DataProvider = (props) => {
  const [products, setproducts] = useState([
    {
      id: 1,
      name: "Happy face",
      price: 35000,
      color: "Negra",
      image: happyFaceNegra,
      brand: "Goat",
      description: [
        "Gorra Bordada",
        "100% Algodón Lavado",
        "Ajustador de gorra visera",
        "Cierre de hebilla de metal",
        "Pico Pre-Curvado",
      ],
    },
    {
      id: 2,
      name: "Sexy peach",
      price: 35000,
      color: "Negra",
      image: sexyPeachNegra,
      brand: "Goat",
      description: [
        "Gorra Bordada",
        "100% Algodón Lavado",
        "Ajustador de gorra visera",
        "Cierre de hebilla de metal",
        "Pico Pre-Curvado",
      ],
    },
    {
      id: 3,
      name: "Sour flavor juice",
      price: 35000,
      color: "Negra",
      image: sourFlavorJuiceNegra,
      brand: "Goat",
      description: [
        "Gorra Bordada",
        "100% Algodón Lavado",
        "Ajustador de gorra visera",
        "Cierre de hebilla de metal",
        "Pico Pre-Curvado",
      ],
    },
    {
      id: 4,
      name: "Idiot love",
      price: 35000,
      color: "Blanca",
      image: idiotLoveBlanca,
      brand: "Goat",
      description: [
        "Gorra Bordada",
        "100% Algodón Lavado",
        "Ajustador de gorra visera",
        "Cierre de hebilla de metal",
        "Pico Pre-Curvado",
      ],
    },
    {
      id: 5,
      name: "Money first",
      price: 35000,
      color: "Blanca",
      image: moneyFirstBlanca,
      brand: "Goat",
      description: [
        "Gorra Bordada",
        "100% Algodón Lavado",
        "Ajustador de gorra visera",
        "Cierre de hebilla de metal",
        "Pico Pre-Curvado",
      ],
    },
    {
      id: 6,
      name: "Goat brand originals",
      price: 35000,
      color: "Blanca",
      image: goatBrandBlanca,
      brand: "Goat",
      description: [
        "Gorra Bordada",
        "100% Algodón Lavado",
        "Ajustador de gorra visera",
        "Cierre de hebilla de metal",
        "Pico Pre-Curvado",
      ],
    },
    {
      id: 7,
      name: "Cactus jack mask",
      price: 35000,
      color: "Cafe",
      image: cactusJackMaskCafe,
      brand: "Goat",
      description: [
        "Gorra Bordada",
        "100% Algodón Lavado",
        "Ajustador de gorra visera",
        "Cierre de hebilla de metal",
        "Pico Pre-Curvado",
      ],
    },
    {
      id: 8,
      name: "Sour flavor juice",
      price: 35000,
      color: "Cafe",
      image: sourFlavorJuiceCafe,
      brand: "Goat",
      description: [
        "Gorra Bordada",
        "100% Algodón Lavado",
        "Ajustador de gorra visera",
        "Cierre de hebilla de metal",
        "Pico Pre-Curvado",
      ],
    },
    {
      id: 9,
      name: "Rain of vibes",
      price: 35000,
      color: "Roja",
      image: rainOfVibesRoja,
      brand: "Goat",
      description: [
        "Gorra Bordada",
        "100% Algodón Lavado",
        "Ajustador de gorra visera",
        "Cierre de hebilla de metal",
        "Pico Pre-Curvado",
      ],
    },
    {
      id: 10,
      name: "Tv no signal",
      price: 35000,
      color: "Azul",
      image: tvNoSignalAzul,
      brand: "Goat",
      description: [
        "Gorra Bordada",
        "100% Algodón Lavado",
        "Ajustador de gorra visera",
        "Cierre de hebilla de metal",
        "Pico Pre-Curvado",
      ],
    },
    {
      id: 11,
      name: "City compton N.W.E",
      price: 35000,
      color: "Negra",
      image: cityComptonAzul,
      brand: "Goat",
      description: [
        "Gorra Bordada",
        "100% Algodón Lavado",
        "Ajustador de gorra visera",
        "Cierre de hebilla de metal",
        "Pico Pre-Curvado",
      ],
    },
    {
      id: 12,
      name: "Happy face",
      price: 35000,
      color: "Azul",
      image: happyFaceAzul,
      brand: "Goat",
      description: [
        "Gorra Bordada",
        "100% Algodón Lavado",
        "Ajustador de gorra visera",
        "Cierre de hebilla de metal",
        "Pico Pre-Curvado",
      ],
    },
  ]);

  const [cart, setCart] = useState([]);

  const addCart = (id) => {
    const check = cart.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product.id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert("the product has been added to cart");
    }
  };

  const value = {
    products: [products, setproducts],
    cart: [cart, setCart],
    addCart: addCart
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
