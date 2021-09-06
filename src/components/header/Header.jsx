import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { BiGridAlt } from "react-icons/bi";
import logo from "../../images/logoGoat.png";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className={styles.principal}>
      <header className={styles.header}>
        <div className={styles.toogle}>
          <BiGridAlt size="25px" />
        </div>
        <img className={styles.logo} src={logo} alt="" />
        <nav className={styles.menu} id="nav-menu">
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/about">Nosotros</Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </nav>
        <div>
          <BiShoppingBag size="25px" />
        </div>
      </header>
    </div>
  );
};
