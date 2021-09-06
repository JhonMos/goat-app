import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { BiGridAlt } from "react-icons/bi";
import logo from "../../images/logoGoat.png";
import styles from "./Header.module.css";

export const Header = () => {

  return (
    <div className={styles.principal}>
      <header className={styles.header}>
        <div className={styles.toogle} >
          <BiGridAlt size="25px" />
        </div>
        <img className={styles.logo} src={logo} alt="" />
        <nav className={styles.menu} id="nav-menu">
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>Home</li>
            <li className={styles.menuItem}>Nosotros</li>
            <li className={styles.menuItem}>Contacto</li>
          </ul>
        </nav>
        <div>
          <BiShoppingBag size="25px" />
        </div>
      </header>
    </div>
  );
};
