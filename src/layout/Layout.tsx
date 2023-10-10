import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";
import styles from "./Layout.module.scss";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <div style={{ backgroundColor: "var(--prussian-blue)" }}>
        <NavBar />
      </div>
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
