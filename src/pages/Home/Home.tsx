import styles from "./Home.module.scss";
import Button from "../../components/Button/Button";

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
      <Button hide={false} to="/form" />
    </div>
  );
};

export default Home;
