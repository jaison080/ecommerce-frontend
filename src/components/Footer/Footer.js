import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
function Footer() {
  return (
    <>
      <div className={styles.footer__container}>
        <div className={styles.footer__container_left}>
          <div className={styles.footer__container_left_column}>
            <div className={styles.footer__container_left_column_title}>
              Shop By Category
            </div>
            <div className={styles.footer__container_left_column_content}>
              Skincare
            </div>
            <div className={styles.footer__container_left_column_content}>
              Personal Care
            </div>
            <div className={styles.footer__container_left_column_content}>
              Handbags
            </div>
            <div className={styles.footer__container_left_column_content}>
              Apparels
            </div>
            <div className={styles.footer__container_left_column_content}>
              Watches
            </div>
            <div className={styles.footer__container_left_column_content}>
              Eye Wear
            </div>
            <div className={styles.footer__container_left_column_content}>
              Jewellery
            </div>
          </div>
          <div className={styles.footer__container_left_column}>
            <div className={styles.footer__container_left_column_title}>
              About
            </div>
            <div className={styles.footer__container_left_column_content}>
              Contact Us
            </div>
            <div className={styles.footer__container_left_column_content}>
              About Us
            </div>
            <div className={styles.footer__container_left_column_content}>
              Careers
            </div>
            <div className={styles.footer__container_left_column_content}>
              Press
            </div>
          </div>
          <div className={styles.footer__container_left_column}>
            <div className={styles.footer__container_left_column_title}>
              Policy
            </div>
            <div className={styles.footer__container_left_column_content}>
              Return Policy
            </div>
            <div className={styles.footer__container_left_column_content}>
              Terms of Use
            </div>
            <div className={styles.footer__container_left_column_content}>
              Sitemap
            </div>
            <div className={styles.footer__container_left_column_content}>
              Security
            </div>
            <div className={styles.footer__container_left_column_content}>
              Privacy
            </div>
            <div className={styles.footer__container_left_column_content}>
              EPR Compliance
            </div>
          </div>
        </div>
        <div className={styles.footer__container_right}>
          <div className={styles.footer__container_icons}>
            <div className={styles.footer__container_icon_wrapper}>
              <FaFacebookF className={styles.footer__container_icon} />
            </div>
            <div className={styles.footer__container_icon_wrapper}>
              <AiFillInstagram className={styles.footer__container_icon} />
            </div>
            <div className={styles.footer__container_icon_wrapper}>
              <FaTwitter className={styles.footer__container_icon} />
            </div>
            <div className={styles.footer__container_icon_wrapper}>
              <AiFillYoutube className={styles.footer__container_icon} />
            </div>
          </div>
          <div className={styles.footer__container_right_location}>
            <div className={styles.footer__container_location_icon_wrapper}>
              <IoLocationOutline
                className={styles.footer__container_location_icon}
              />
            </div>
            <div className={styles.footer__container_right_location_name}>
              United States
            </div>
          </div>
          <div className={styles.footer__container_right_copyright}>
            © 2022 | Cora Leviene All Rights Reserved
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
