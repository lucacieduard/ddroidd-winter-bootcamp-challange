import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <p>Come to the dark side... we have</p>
      <img src="/assets/img/cookies.svg" alt="" />
    </footer>
  );
};

export default Footer;
