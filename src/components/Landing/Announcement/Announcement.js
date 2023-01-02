import React from "react";
import styles from "./Announcement.module.css";
function Announcement() {
  return (
    <>
      <div className={styles.announcements__container}>
        <div className={styles.announcements__container_content}>
          We are currently experiencing local customs clearance delays. For the
          latest updates, please check your order status here
        </div>
      </div>
    </>
  );
}

export default Announcement;
