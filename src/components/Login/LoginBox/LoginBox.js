import Image from "next/image";
import React from "react";
import styles from "./LoginBox.module.css";
import login from "../../../assets/png/Login/login.png";
import { CustomTitle } from "../../../utils";
import { AiFillEye } from "react-icons/ai";
function LoginBox() {
  return (
    <>
      <CustomTitle title={"Login"} />
      <div className={styles.login__container}>
        <div className={styles.login__container_box}>
          <div className={styles.login__container_box_left}>
            <Image
              src={login}
              alt=""
              className={styles.login__container_box_left_image}
            />
          </div>
          <div className={styles.login__container_box_right}>
            <div className={styles.login__container_box_right_title}>LOGIN</div>
            <div className={styles.login__container_box_right_content}>
              <div className={styles.login__container_box_right_label}>
                Email
              </div>
              <input
                type="email"
                placeholder="user@gmail.com"
                className={styles.login__container_box_right_input}
              />
            </div>
            <div className={styles.login__container_box_right_content}>
              <div className={styles.login__container_box_right_label}>
                Password
              </div>
              <input
                type="password"
                placeholder="*********"
                className={styles.login__container_box_right_input}
              />
            </div>
            <div className={styles.login__container_box_right_text}>
              Forgot your Password ?
            </div>
            <div className={styles.login__container_box_right_login_btn}>
              Login
            </div>
            <div className={styles.login__container_box_center_text}>
              Not yet Registered ?
            </div>
            <div className={styles.login__container_box_right_register_btn}>
              Register
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginBox;
