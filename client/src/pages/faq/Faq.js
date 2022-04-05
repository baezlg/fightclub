import React from "react";
import Banner from "../../components/common/banner/Banner";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import FaqArea from "../../components/faqArea/FaqArea";
import Services from "../../components/services/Services";

const Faq = () => {
  return (
    <>
      <Header />
      <Banner title="Faqs" />
      <FaqArea />
      <Services />
      <Footer />
    </>
  );
};

export default Faq;
