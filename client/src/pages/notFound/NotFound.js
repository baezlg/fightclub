import React from "react";
import { useTranslation } from "react-i18next";
import Banner from "../../components/common/banner/Banner";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import NotFoundArea from "../../components/notFoundArea/NotFoundArea";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <Banner title={`${t("notfound")}`} />
      <NotFoundArea />
      <Footer />
    </>
  );
};

export default NotFound;
