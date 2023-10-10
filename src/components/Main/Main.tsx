import styles from "./Main.module.scss";
const Main = ({ children }: { children: React.ReactNode }) => {
  return <main className={styles.container}>{children}</main>;
};

export default Main;
