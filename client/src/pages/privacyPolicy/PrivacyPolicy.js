import React from "react";
import { useTranslation } from "react-i18next";
import Banner from "../../components/common/banner/Banner";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import PPArea from "../../components/pparea/PPArea";
import Services from "../../components/services/Services";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <Banner title={`${t("privacyPolicy")}`} />
      <PPArea />
      <Services />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
