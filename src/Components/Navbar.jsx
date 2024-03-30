import { Link, NavLink } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { state, dispatch, toggleTheme } = useContextGlobal();

  const themeChange = () => {
    dispatch({ type: "CHANGE_THEME" });
  };

  return (
    <>
      <nav className={styles.navbarFixed}>
        <h1>DH Odonto</h1>
        <div className="navTitle">
          <Link to="/">
            <h3>Home</h3>
          </Link>
          <Link to="/contact">
            <h3>Contact</h3>
          </Link>
          <Link to="/favs">
            <h3>Favs</h3>
          </Link>

          <button className={styles.themeButton} onClick={themeChange}>
            {state.theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
