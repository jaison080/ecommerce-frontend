import Image from "next/image";
import React from "react";
import { shopByBrandsData } from "../../../data";
import styles from "./ShopByBrands.module.css";

function ShopByBrands() {
  return (
    <>
      <div className={styles.shopbybrands__container}>
        <div className={styles.shopbybrands__container_title}>
          Shop By Brands
        </div>
        <div className={styles.shopbybrands__container_cards}>
          {shopByBrandsData.map((item) => {
            return (
              <div
                key={item.id}
                className={styles.shopbybrands__container_card}
              >
                <Image
                  src={item.image}
                  alt=""
                  className={styles.shopbybrands__container_card_image}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ShopByBrands;
