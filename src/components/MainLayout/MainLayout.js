import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "./MainLayout.module.css";

const MainLayout = (props) => {
  return (
    <div className={styles.layout__container}>
      <Navbar />
      <div className={styles.layout__root}>{props.children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
