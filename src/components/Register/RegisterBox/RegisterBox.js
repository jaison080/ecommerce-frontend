import Image from "next/image";
import React from "react";
import styles from "./RegisterBox.module.css";
import login from "../../../assets/png/Login/login.png";
import { CustomTitle } from "../../../utils";
function RegisterBox() {
  return (
    <>
      <CustomTitle title={"Register"} />
      <div className={styles.register__container}>
        <div className={styles.register__container_box}>
          <div className={styles.register__container_box_left}>
            <Image
              src={login}
              alt=""
              className={styles.register__container_box_left_image}
            />
          </div>
          <div className={styles.register__container_box_right}>
            <div className={styles.register__container_box_right_title}>
              REGISTER
            </div>
            <div className={styles.register__container_box_right_content}>
              <div className={styles.register__container_box_right_label}>
                Name
              </div>
              <input
                type="text"
                placeholder="John Doe"
                className={styles.register__container_box_right_input}
              />
            </div>
            <div className={styles.register__container_box_right_content}>
              <div className={styles.register__container_box_right_label}>
                Email
              </div>
              <input
                type="email"
                placeholder="user@gmail.com"
                className={styles.register__container_box_right_input}
              />
            </div>
            <div className={styles.register__container_box_right_content}>
              <div className={styles.register__container_box_right_label}>
                Password
              </div>
              <input
                type="password"
                placeholder="*********"
                className={styles.register__container_box_right_input}
              />
            </div>
            <div className={styles.register__container_box_right_content}>
              <div className={styles.register__container_box_right_label}>
                Confirm Password
              </div>
              <input
                type="password"
                placeholder="*********"
                className={styles.register__container_box_right_input}
              />
            </div>
            <div className={styles.register__container_box_right_register_btn}>
              Register
            </div>
            <div className={styles.register__container_box_center_text}>
              Already have an account ?
            </div>
            <div className={styles.register__container_box_right_login_btn}>
              Login
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterBox;
