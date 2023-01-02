import React from "react";
import Image from "next/image";
import styles from "./HandPickedCollections.module.css";

function HandPickedCollectionsCard({ item }) {
  return (
    <>
      <div
        className={styles.handpickedcollections__container_card_image_wrapper}
      >
        <Image
          src={item.image}
          alt=""
          className={styles.handpickedcollections__container_card_image}
        />
      </div>
    </>
  );
}

export default HandPickedCollectionsCard;
