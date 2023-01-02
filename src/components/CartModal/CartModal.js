import * as React from "react";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "./CartModal.module.css";
import { MdClose } from "react-icons/md";
import bag2 from "../../assets/png/Landing/bag2.png";
import Image from "next/image";
const style = {
  position: "absolute",
  top: "10%",
  right: "3%",
  outline: "none",
  maxHeight: "700px",
  overflow: "scroll",
  border: "none",
  display: "flex",
  flexDirection: "column",
  rowGap: "2rem",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function CartModal(props) {
  const handleClose = () => props.setOpen(false);
  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Box sx={style}>
            <div className={styles.cart_modal__container_header}>
              <div className={styles.cart_modal__container_header_icon_wrapper}>
                <ArrowBackIcon
                  className={styles.cart_modal__container_header_icon}
                  onClick={() => {
                    handleClose();
                  }}
                />
              </div>
              <div className={styles.cart_modal__container_header_text}>
                Back
              </div>
            </div>
            <div className={styles.cart_modal__container_products}>
              <div className={styles.cart_modal__container_product}>
                <div
                  className={styles.cart_modal__container_product_image_wrapper}
                >
                  <Image
                    src={bag2}
                    className={styles.cart_modal__container_product_image}
                    alt=""
                  />
                </div>
                <div className={styles.cart_modal__container_product_content}>
                  <div className={styles.cart_modal__container_product_name}>
                    Coach
                  </div>
                  <div className={styles.cart_modal__container_product_desc}>
                    Leather Coach Bag
                  </div>
                  <div
                    className={styles.cart_modal__container_quantity_container}
                  >
                    <div
                      className={styles.cart_modal__container_quantity_counter}
                    >
                      <div
                        className={styles.cart_modal__container_quantity_button}
                      >
                        -
                      </div>
                      <div
                        className={
                          styles.cart_modal__container_quantity_button_text
                        }
                      >
                        1
                      </div>
                      <div
                        className={styles.cart_modal__container_quantity_button}
                      >
                        +
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.cart_modal__container_trailer}>
                  <div
                    className={
                      styles.cart_modal__container_trailer_icon_wrapper
                    }
                  >
                    <MdClose
                      className={styles.cart_modal__container_trailer_icon}
                    />
                  </div>
                  <div className={styles.cart_modal__container_trailer_text}>
                    $54.69
                  </div>
                </div>
              </div>
              <div
                className={styles.cart_modal__container_horizontal_line}
              ></div>
            </div>
            <div className={styles.cart_modal__container_prices}>
              <div className={styles.cart_modal__container_price}>
                <div className={styles.cart_modal__container_price_sub_text}>
                  Sub Total :
                </div>
                <div className={styles.cart_modal__container_price_sub_number}>
                  $109.38
                </div>
              </div>
              <div className={styles.cart_modal__container_price}>
                <div className={styles.cart_modal__container_price_sub_text}>
                  Tax :
                </div>
                <div className={styles.cart_modal__container_price_sub_number}>
                  $2.0
                </div>
              </div>
              <div className={styles.cart_modal__container_price}>
                <div className={styles.cart_modal__container_price_text}>
                  Total :
                </div>
                <div className={styles.cart_modal__container_price_number}>
                  $111.38
                </div>
              </div>
            </div>
            <div className={styles.cart_modal__container_pincode_container}>
              <input type="text" placeholder="Apply Coupon Code" />
              <div className={styles.cart_modal__container_button}>CHECK</div>
            </div>
            <div
              className={
                styles.cart_modal__container_product_description_button
              }
            >
              <div
                className={
                  styles.cart_modal__container_product_description_button_text
                }
              >
                Place Order
              </div>
            </div>
            <div
              className={styles.cart_modal__container_button_text}
              onClick={() => {
                handleClose();
              }}
            >
              Continue Shopping
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
