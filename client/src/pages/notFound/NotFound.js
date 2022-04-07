import React from "react";
import Banner from "../../components/common/banner/Banner";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import NotFoundArea from "../../components/notFoundArea/NotFoundArea";

const NotFound = () => {
  return (
    <>
      <Header />
      <Banner title="Error" />
      <NotFoundArea />
      <Footer />
    </>
  );
};

export default NotFound;
