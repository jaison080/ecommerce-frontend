import React from "react";
import { HashLoader } from "react-spinners";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <>
      <div className={styles.loader__container}>
        <HashLoader color={"#1b4b66"} size={100} />
      </div>
    </>
  );
}

export default Loader;
