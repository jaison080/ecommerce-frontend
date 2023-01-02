import React, { useRef, useState } from "react";
import styles from "./ProductBox.module.css";
import { MdNavigateNext } from "react-icons/md";
import Image from "next/image";
import bag2 from "../../../assets/png/Landing/bag2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Navigation } from "swiper";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { Autoplay } from "swiper";
import { Rating } from "@mui/material";
import { BsHandbag } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
function ProductBox() {
  const [value, setValue] = useState(2);
  const swiperRef = useRef();
  return (
    <>
      <div className={styles.product_box__container}>
        <div className={styles.product_box__container_navigate}>
          <div className={styles.product_box__container_navigate_name}>
            Home
          </div>
          <div className={styles.product_box__container_navigate_icon_wrapper}>
            <MdNavigateNext
              className={styles.product_box__container_navigate_icon}
            />
          </div>
          <div className={styles.product_box__container_navigate_name}>
            Products
          </div>
          <div className={styles.product_box__container_navigate_icon_wrapper}>
            <MdNavigateNext
              className={styles.product_box__container_navigate_icon}
            />
          </div>
          <div className={styles.product_box__container_navigate_name}>
            Product
          </div>
        </div>
        <div className={styles.product_box__container_product_details}>
          <div className={styles.product_box__container_product}>
            <div
              className={styles.product_box__container_product_image_wrapper}
            >
              <Image
                src={bag2}
                alt=""
                className={styles.product_box__container_product_image}
              />
            </div>
            <div className={styles.product_box__container_product_images}>
              <MdSkipPrevious
                size={30}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  swiperRef.current?.slidePrev();
                }}
              />
              <Swiper
                slidesPerView={3}
                centeredSlides={true}
                loop={true}
                autoplay={{
                  delay: 2000,
                }}
                modules={[Navigation, Autoplay]}
                pagination={{ clickable: true }}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                className={styles.product_box__container_product_images_swiper}
              >
                <SwiperSlide>
                  <Image
                    src={bag2}
                    alt=""
                    className={
                      styles.product_box__container_product_images_swiper_image
                    }
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={bag2}
                    alt=""
                    className={
                      styles.product_box__container_product_images_swiper_image
                    }
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={bag2}
                    alt=""
                    className={
                      styles.product_box__container_product_images_swiper_image
                    }
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={bag2}
                    alt=""
                    className={
                      styles.product_box__container_product_images_swiper_image
                    }
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={bag2}
                    alt=""
                    className={
                      styles.product_box__container_product_images_swiper_image
                    }
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={bag2}
                    alt=""
                    className={
                      styles.product_box__container_product_images_swiper_image
                    }
                  />
                </SwiperSlide>
              </Swiper>
              <MdSkipNext
                size={30}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  swiperRef.current?.slideNext();
                }}
              />
            </div>
          </div>
          <div
            className={styles.product_box__container_product_details_content}
          >
            <div
              className={
                styles.product_box__container_product_details_content_1
              }
            >
              <div className={styles.product_box__container_product_name}>
                Coach
              </div>
              <div className={styles.product_box__container_product_short_desc}>
                Leather Coach Bag with Adjustable Straps
              </div>
            </div>
            <div className={styles.product_box__container_card__content_rating}>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <div
                className={
                  styles.product_box__container_card__content_rating_text
                }
              >
                (250) Ratings
              </div>
            </div>
            <div
              className={
                styles.product_box__container_card__content_price_container
              }
            >
              <div
                className={styles.product_box__container_card__content_price}
              >
                $54.69
              </div>
              <div
                className={styles.product_box__container_card__content_oldprice}
              >
                $78.66
              </div>
              <div
                className={styles.product_box__container_card__content_discount}
              >
                50% OFF
              </div>
            </div>
            <div className={styles.product_box__container_delivery_container}>
              <div
                className={
                  styles.product_box__container_delivery_container_left
                }
              >
                <div
                  className={
                    styles.product_box__container_delivery_container_title
                  }
                >
                  Delivery Details
                </div>
                <div
                  className={
                    styles.product_box__container_delivery_container_desc
                  }
                >
                  Check estimated delivery date/pickup option.
                </div>
              </div>
              <div className={styles.product_box__container_pincode_container}>
                <input type="text" placeholder="Apply Valid Pincode" />
                <div className={styles.product_box__container_button}>
                  CHECK
                </div>
              </div>
            </div>
            <div className={styles.product_box__container_quantity_container}>
              <div
                className={
                  styles.product_box__container_quantity_container_text
                }
              >
                Quantity :
              </div>
              <div className={styles.product_box__container_quantity_counter}>
                <div className={styles.product_box__container_quantity_button}>
                  -
                </div>
                <div
                  className={styles.product_box__container_quantity_button_text}
                >
                  1
                </div>
                <div className={styles.product_box__container_quantity_button}>
                  +
                </div>
              </div>
            </div>
            <div className={styles.product_box__container_offers}>
              <div className={styles.product_box__container_offer}>
                <div className={styles.product_box__container_offer_left}>
                  <div className={styles.product_box__container_offer_text}>
                    Get upto 30% Off on order value above $100
                  </div>
                  <div className={styles.product_box__container_offer_terms}>
                    Terms & Conditions
                  </div>
                </div>
                <div className={styles.product_box__container_offer_card}>
                  <div
                    className={styles.product_box__container_offer_card_text}
                  >
                    Use Code
                  </div>
                  <div
                    className={styles.product_box__container_offer_card_code}
                  >
                    ORDER100
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                styles.product_box__container_product_description_buttons
              }
            >
              <div
                className={
                  styles.product_box__container_product_description_button
                }
              >
                <div
                  className={
                    styles.product_box__container_product_description_button_icon_wrapper
                  }
                >
                  <BsHandbag
                    className={
                      styles.product_box__container_product_description_button_icon
                    }
                  />
                </div>
                <div
                  className={
                    styles.product_box__container_product_description_button_text
                  }
                >
                  Add to Bag
                </div>
              </div>
              <div
                className={
                  styles.product_box__container_product_description_button_1
                }
              >
                <div
                  className={
                    styles.product_box__container_product_description_button_icon_wrapper_1
                  }
                >
                  <FaRegHeart
                    className={
                      styles.product_box__container_product_description_button_icon_1
                    }
                  />
                </div>
                <div
                  className={
                    styles.product_box__container_product_description_button_text_1
                  }
                >
                  Add to Wishlist
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.product_box__container_bottom}>
          <div className={styles.product_box__container_bottom_tabs}>
            <div className={styles.product_box__container_bottom_tab_1}>
              Product Description
            </div>
            <div className={styles.product_box__container_bottom_tab}>
              Related Products
            </div>
            <div className={styles.product_box__container_bottom_tab}>
              Ratings and Reviews
            </div>
          </div>
          <div className={styles.product_box__container_bottom_description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
            scelerisque laoreet tortor cras molestie tincidunt malesuada
            malesuada. Neque, mauris duis dui id morbi magna. Cras lacus,
            viverra auctor in turpis est quisque eget tristique. Dolor augue
            mattis duis semper gravida enim eu imperdiet sit. Et pharetra platea
            pretium nec feugiat tincidunt quam leo tristique. Nulla enim
            consectetur sit et tempus, faucibus leo ac cras. Purus ut non eu mus
            volutpat. Eget est vel sagittis amet sit eu eu ullamcorper tellus.
            Leo mauris, faucibus vulputate adipiscing elementum tristique
            dictumst augue pellentesque. Justo, sed nunc, pretium turpis
            scelerisque. Enim urna etiam morbi vestibulum ac dictumst. Ac ut
            elementum molestie sit felis imperdiet.
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductBox;
