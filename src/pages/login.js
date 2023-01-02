import React from "react";
import { Navbar, Footer, LoginBox, MainLayout } from "../components";
import styles from "../styles/Login.module.css";
function Login() {
  return (
    <>
      <MainLayout>
        <LoginBox />
      </MainLayout>
    </>
  );
}

export default Login;
