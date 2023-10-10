import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.images}>
        <img
          src="/assets/img/destructuring.svg"
          className={styles.destructuring}
        />
        <img src="/assets/img/WebPage_logo.svg" className={styles.webP_logo} />
      </div>
      <Link to={"/form"} className={styles.button}>
        <button>Join Us</button>
      </Link>
    </div>
  );
};

export default Home;
