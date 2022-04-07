import React from "react";
import Banner from "../../components/common/banner/Banner";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import Instagram from "../../components/common/instagram/Instagram";
import ContactArea from "../../components/contactArea/ContactArea";

const Contact = () => {
  return (
    <>
      <Header />
      <Banner title="contact" />
      <ContactArea />
      <Instagram />
      <Footer />
    </>
  );
};

export default Contact;
