import React from "react";
import { Footer, MainLayout, Navbar, ProductBox } from "../../components";
import { CustomTitle } from "../../utils";
import styles from "./../../styles/Products/Product.module.css";
function Product() {
  return (
    <>
      <CustomTitle title="Product" />
      <MainLayout>
        <ProductBox />
      </MainLayout>
    </>
  );
}

export default Product;
