import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <nav className={`${styles.container}`}>
      <Link to={"/"} className={styles.logo_container}>
        <img src="/assets/img/ddroidd_logo.svg" className={styles.logo} />
      </Link>
      <p className={styles.title}>Autumn - Winter Bootcamp</p>

      <Link
        to={"/form"}
        className={
          location.pathname === "/"
            ? `${styles.button} `
            : `${styles.button} ${styles.hide}`
        }
      >
        <button>Join Us</button>
      </Link>
    </nav>
  );
};

export default NavBar;
