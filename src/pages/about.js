import React from "react";
import styles from "./../styles/About.module.css";
import { CustomTitle } from "../utils";
import { Navbar, Footer, AboutBox, MainLayout } from "../components";
function About() {
  return (
    <>
      <CustomTitle title="About" />
      <MainLayout>
        <AboutBox />
      </MainLayout>
    </>
  );
}

export default About;
