import React from "react";
import Banner from "../../components/common/banner/Banner";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import PPArea from "../../components/pparea/PPArea";
import Services from "../../components/services/Services";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <Banner title="Privacy Policy" />
      <PPArea />
      <Services />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
