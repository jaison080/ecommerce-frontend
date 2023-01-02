import Image from "next/image";
import React from "react";
import bottomhero from "../../../assets/svg/Landing/bottomhero.svg";
import bottomhero1 from "../../../assets/png/Landing/bottomhero1.png";
import bottomhero2 from "../../../assets/png/Landing/bottomhero2.png";
import styles from "./BottomHero.module.css";
function BottomHero() {
  return (
    <>
      <div className={styles.bottomhero__container}>
        <Image
          src={bottomhero}
          alt=""
          className={styles.bottomhero__container_image}
        />
        <div className={styles.bottomhero__container_content}>
          <div className={styles.bottomhero__container_content_title}>
            LIFESTYLE
          </div>
          <div className={styles.bottomhero__container_content_description}>
            Makeup Accessories from Top Brands
          </div>
        </div>
      </div>
      <div className={styles.bottomhero__container_1}>
        <div className={styles.bottomhero__container_image_1_wrapper}>
          <Image
            src={bottomhero1}
            alt=""
            className={styles.bottomhero__container_image_1}
          />
        </div>
        <div className={styles.bottomhero__container_image_1_wrapper}>
          <Image
            src={bottomhero2}
            alt=""
            className={styles.bottomhero__container_image_1}
          />
        </div>
      </div>
    </>
  );
}

export default BottomHero;
