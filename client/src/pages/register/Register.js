import React from "react";
import { useTranslation } from "react-i18next";
import Banner from "../../components/common/banner/Banner";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import Instagram from "../../components/common/instagram/Instagram";
import RegisterForm from "../../components/registerForm/RegisterForm";

const Register = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <Banner title={`${t("register")}`} />
      <RegisterForm />
      <Instagram />
      <Footer />
    </>
  );
};

export default Register;
