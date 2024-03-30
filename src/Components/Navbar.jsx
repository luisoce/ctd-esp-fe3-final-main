import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/Dark-mode";
import styles from "./Navbar.module.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, setTheme } = React.useContext(AppContext);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className={theme === "light" ? styles.light : styles.dark}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to="/">Home</Link>
      <Link to="/contacto">Contact</Link>
      <Link to="/favs">Favs</Link>
      <button onClick={changeTheme}>{theme === "light" ? "🌙" : "☀"}</button>
    </nav>
  );
};

export default Navbar;
