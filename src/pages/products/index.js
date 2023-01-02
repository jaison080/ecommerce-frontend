import React from "react";
import { Footer, MainLayout, Navbar, ProductsBox } from "../../components";
import { CustomTitle } from "../../utils";
import styles from "./../../styles/Products/Home.module.css";
function Products() {
  return (
    <>
      <CustomTitle title="ProductS" />
      <MainLayout>
        <ProductsBox />
      </MainLayout>
    </>
  );
}

export default Products;
