import Image from "next/image";
import React, { useState } from "react";
import styles from "./NewArrivals.module.css";
import { FaRegHeart } from "react-icons/fa";
import { Rating } from "@mui/material";
function NewArrivalsCard({ item }) {
  const [value, setValue] = useState(2);

  return (
    <>
      <div className={styles.newarrivals__container_card__container}>
        <div className={styles.newarrivals__container_card__image_wrapper}>
          <Image
            className={styles.newarrivals__container_card__image}
            src={item.image}
            alt=""
          />
        </div>
        <div className={styles.newarrivals__container_card__content}>
          <div className={styles.newarrivals__container_card__content_header}>
            <div className={styles.newarrivals__container_card__content_title}>
              {item.category}
            </div>
            <div
              className={
                styles.newarrivals__container_card__content_header_icon_wrapper
              }
            >
              <FaRegHeart
                className={
                  styles.newarrivals__container_card__content_header_icon
                }
              />
            </div>
          </div>
          <div className={styles.newarrivals__container_card__content_name}>
            {item.name}
          </div>
          <div className={styles.newarrivals__container_card__content_rating}>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
          <div
            className={
              styles.newarrivals__container_card__content_price_container
            }
          >
            <div className={styles.newarrivals__container_card__content_price}>
              {item.price}
            </div>
            <div
              className={styles.newarrivals__container_card__content_oldprice}
            >
              {item.oldprice}
            </div>
            <div
              className={styles.newarrivals__container_card__content_discount}
            >
              {item.discount} OFF
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewArrivalsCard;
