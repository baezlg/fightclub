import React from "react";
import Classes from "../../components/classes/Classes";
import Banner from "../../components/common/banner/Banner";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import Instagram from "../../components/common/instagram/Instagram";
import Services from "../../components/services/Services";

const ClassesPage = () => {
  return (
    <>
      <Header />
      <Banner title="Classes" />
      <Classes />
      <Services />
      <Instagram />
      <Footer />
    </>
  );
};

export default ClassesPage;
