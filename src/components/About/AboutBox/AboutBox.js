import React from "react";
import styles from "./AboutBox.module.css";
import about from "../../../assets/png/About/about.png";
import about1 from "../../../assets/png/About/about1.png";
import about2 from "../../../assets/png/About/about2.png";
import about3 from "../../../assets/png/About/about3.png";
import Image from "next/image";

function AboutBox() {
  return (
    <>
      <div className={styles.aboutbox__container}>
        <div className={styles.aboutbox__container_banner}>
          <Image
            src={about}
            alt=""
            className={styles.aboutbox__container_banner_image}
          />
          <div className={styles.aboutbox__container_banner_content}>
            <div className={styles.aboutbox__container_banner_title}>ABOUT</div>
            <div className={styles.aboutbox__container_banner_description}>
              Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
              simply dummy text of the printing.
            </div>
          </div>
        </div>
        <div className={styles.aboutbox__container_header}>
          <div className={styles.aboutbox__container_header_title}>About</div>
          <div className={styles.aboutbox__container_header_content}>
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
            simply dummy text of the printing. Lorem Ipsum is simply dummy text
            of the printing. Lorem Ipsum is simply dummy text of the printing.
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
            simply dummy text of the printing.
          </div>
        </div>
        <div className={styles.aboutbox__container_box}>
          <div className={styles.aboutbox__container_box_content}>
            <div className={styles.aboutbox__container_header_title}>About</div>
            <div className={styles.aboutbox__container_header_content}>
              Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
              simply dummy text of the printing. Lorem Ipsum is simply dummy
              text of the printing. Lorem Ipsum is simply dummy text of the
              printing. Lorem Ipsum is simply dummy text of the printing. Lorem
              Ipsum is simply dummy text of the printing.
            </div>
          </div>
          <div className={styles.aboutbox__container_box_image_wrapper}>
            <Image
              src={about1}
              alt=""
              className={styles.aboutbox__container_box_image}
            />
          </div>
        </div>
        <div className={styles.aboutbox__container_box}>
          <div className={styles.aboutbox__container_box_image_wrapper}>
            <Image
              src={about2}
              className={styles.aboutbox__container_box_image}
            />
          </div>
          <div className={styles.aboutbox__container_box_content}>
            <div className={styles.aboutbox__container_header_title}>About</div>
            <div className={styles.aboutbox__container_header_content}>
              Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
              simply dummy text of the printing. Lorem Ipsum is simply dummy
              text of the printing. Lorem Ipsum is simply dummy text of the
              printing. Lorem Ipsum is simply dummy text of the printing. Lorem
              Ipsum is simply dummy text of the printing.
            </div>
          </div>
        </div>
        <div className={styles.aboutbox__container_box}>
          <div className={styles.aboutbox__container_box_content}>
            <div className={styles.aboutbox__container_header_title}>About</div>
            <div className={styles.aboutbox__container_header_content}>
              Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
              simply dummy text of the printing. Lorem Ipsum is simply dummy
              text of the printing. Lorem Ipsum is simply dummy text of the
              printing. Lorem Ipsum is simply dummy text of the printing. Lorem
              Ipsum is simply dummy text of the printing.
            </div>
          </div>
          <div className={styles.aboutbox__container_box_image_wrapper}>
            <Image
              src={about3}
              className={styles.aboutbox__container_box_image}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutBox;
