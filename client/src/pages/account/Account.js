import React from "react";
import { useTranslation } from "react-i18next";
import AccountArea from "../../components/accountArea/AccountArea";
import Banner from "../../components/common/banner/Banner";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import Instagram from "../../components/common/instagram/Instagram";

const Account = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <Banner title={`${t("account")}`} />
      <AccountArea />
      <Instagram />
      <Footer />
    </>
  );
};

export default Account;
