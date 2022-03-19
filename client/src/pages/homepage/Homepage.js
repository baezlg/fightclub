import React from "react";
import Classes from "../../components/classes/Classes";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import Instagram from "../../components/common/instagram/Instagram";
import Featured from "../../components/featured/Featured";
import Prices from "../../components/prices/Prices";
import Services from "../../components/services/Services";

const Homepage = () => {
  return (
    <>
      <Header />
      <Featured />
      <Services />
      <Classes />
      <Prices />
      <Instagram />
      <Footer />
    </>
  );
};

export default Homepage;
