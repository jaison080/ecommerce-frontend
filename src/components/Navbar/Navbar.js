import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { RxPerson } from "react-icons/rx";
import { BsHandbag } from "react-icons/bs";
import styles from "./Navbar.module.css";
import CartModal from "../CartModal/CartModal";

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <div className={styles.navbar__container}>
        <div className={styles.navbar__container_left}>
          <div className={styles.navbar__container_title}>CORA'L</div>
          <div className={styles.navbar__container_links}>
            <div className={styles.navbar__container_link}>Handbags</div>
            <div className={styles.navbar__container_link}>Watches</div>
            <div className={styles.navbar__container_link}>Skincare</div>
            <div className={styles.navbar__container_link}> Jewellery</div>
            <div className={styles.navbar__container_link}>Apparels</div>
          </div>
        </div>
        <div className={styles.navbar__container_right}>
          <div className={styles.navbar__container_search_container}>
            <div className={styles.navbar__container_icon_wrapper}>
              <AiOutlineSearch className={styles.navbar__container_icon} />
            </div>
            <input type="text" placeholder="Search for products or brands" />
          </div>
          <div className={styles.navbar__container_icons}>
            <div className={styles.navbar__container_icon_wrapper}>
              <FaRegHeart className={styles.navbar__container_icon} />
            </div>
            <div className={styles.navbar__container_icon_wrapper}>
              <RxPerson className={styles.navbar__container_icon} />
            </div>
            <div
              className={styles.navbar__container_icon_wrapper}
              onClick={() => {
                handleOpen();
              }}
            >
              <BsHandbag className={styles.navbar__container_icon} />
            </div>
          </div>
        </div>
      </div>
      <CartModal setOpen={setOpen} open={open} />
    </>
  );
}

export default Navbar;
