import React from "react";
import { useTranslation } from "react-i18next";
import AboutArea from "../../components/aboutArea/AboutArea";
import Banner from "../../components/common/banner/Banner";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import Instagram from "../../components/common/instagram/Instagram";
import Services from "../../components/services/Services";
import Trainers from "../../components/trainers/Trainers";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <Banner title={`${t("about")}`} />
      <AboutArea />
      <Services />
      <Trainers />
      <Instagram />
      <Footer />
    </>
  );
};

export default About;
