import React from "react";
import styles from "./NewArrivals.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NewArrivalsCard from "./NewArrivalsCard";
import { newArrivalsData } from "../../../data";
function NewArrivals() {
  return (
    <>
      <div className={styles.newarrivals__container}>
        <div className={styles.newarrivals__container_header}>
          <div className={styles.newarrivals__container_title}>
            New Arrivals
          </div>
          <div className={styles.newarrivals__container_button}>
            <div className={styles.newarrivals__container_button_text}>
              View All
            </div>
            <ArrowForwardIosIcon
              className={styles.newarrivals__container_button_icon}
            />
          </div>
        </div>
        <div className={styles.newarrivals__container_cards}>
          {newArrivalsData.map((item, index) => (
            <NewArrivalsCard item={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default NewArrivals;
