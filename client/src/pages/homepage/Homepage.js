import React from "react";
import Classes from "../../components/classes/Classes";
import Header from "../../components/common/header/Header";
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
    </>
  );
};

export default Homepage;
