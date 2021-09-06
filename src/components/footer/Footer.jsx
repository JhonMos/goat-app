import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className="footer__copy">
        &#169; 2021 JhonMos. Todos los derechos reservados
      </p>
    </footer>
  );
};
