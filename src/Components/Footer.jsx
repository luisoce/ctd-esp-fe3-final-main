import React, { useContext } from "react";
import { AppContext } from "../Context/Dark-mode";
import styles from "./Footer.module.css";

const Footer = () => {
  const { theme } = useContext(AppContext);

  return (
    <footer className={theme === "light" ? styles.light : styles.dark}>
      <p>Powered by</p>
      <img src="./img/DH.png" alt="DH-logo" />
    </footer>
  );
};

export default Footer;
