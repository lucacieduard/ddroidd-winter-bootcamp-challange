import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.scss";
import Button from "../Button/Button";

const NavBar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <nav className={`${styles.container}`}>
      <Link to={"/"} className={styles.logo_container}>
        <img src="/assets/img/ddroidd_logo.svg" className={styles.logo} />
      </Link>
      <p className={styles.title}>Autumn - Winter Bootcamp</p>

      <Button hide={location.pathname === "/" ? false : true} to="/form" />
    </nav>
  );
};

export default NavBar;
