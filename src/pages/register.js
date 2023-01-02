import React from "react";
import { Navbar, Footer, RegisterBox, MainLayout } from "../components";
import styles from "../styles/Register.module.css";
function Register() {
  return (
    <>
      <MainLayout>
        <RegisterBox />
      </MainLayout>
    </>
  );
}

export default Register;
