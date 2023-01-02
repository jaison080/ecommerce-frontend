import React from "react";
import { handPickedCollectionsData } from "../../../data";
import styles from "./HandPickedCollections.module.css";
import HandPickedCollectionsCard from "./HandPickedCollectionsCard";

function HandPickedCollections() {
  return (
    <>
      <div className={styles.handpickedcollections__container}>
        <div className={styles.handpickedcollections__container_title}>
          Handpicked Collections
        </div>
        <div className={styles.handpickedcollections__container_cards}>
          {handPickedCollectionsData.map((item, index) => (
            <HandPickedCollectionsCard
              key={index}
              item={item}
              className={styles.handpickedcollections__container_card}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default HandPickedCollections;
