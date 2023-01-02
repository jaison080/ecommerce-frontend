import Image from "next/image";
import React from "react";
import styles from "./Hero.module.css";
import hero from "../../../assets/png/Landing/hero.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function Hero() {
  return (
    <>
      <div className={styles.hero__container}>
        <div className={styles.hero__container_img_wrapper}>
          <Image src={hero} alt="" className={styles.hero__container_img} />
        </div>
        <div className={styles.hero__container_card}>
          <div className={styles.hero__container_card_title}>
            Carry your Funk
          </div>
          <div className={styles.hero__container_card_content}>
            Trendy handbags collection for your party animal
          </div>
          <div className={styles.hero__container_card_button}>
            <ArrowForwardIcon
              className={styles.hero__container_card_button_icon}
            />
            <div className={styles.hero__container_card_button_text}>
              See More
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
