import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer ">
      <section className="footer__top">
        <Container>
          <Row>
            <Col sm>
              <div className="text-capitalize text-white">
                <h2 className="footer__logo mb-5 text-danger">FightClub</h2>
                <p>{t("footer_intro")}</p>
              </div>
            </Col>
            <Col sm>
              <div className="text-capitalize text-white ">
                <h1 className="lead fs-3 mb-5 fw-bolder"> {t("explore")}</h1>
                <p>
                  <i className="fa-solid fa-arrow-right text-danger me-4 fs-5"></i>
                  <Link to="/about" className="quickLink">
                    {t("about_us")}
                  </Link>
                </p>
                <p>
                  <i className="fa-solid fa-arrow-right text-danger me-4 fs-5"></i>
                  {t("latest_news")}
                </p>
                <p>
                  <i className="fa-solid fa-arrow-right text-danger me-4 fs-5"></i>
                  <Link to="/privacy-policy" className="quickLink">
                    {t("privacy_policy")}
                  </Link>
                </p>
                <p>
                  <i className="fa-solid fa-arrow-right text-danger me-4 fs-5"></i>
                  <Link to="/faq" className="quickLink">
                    {t("faq")}
                  </Link>
                </p>
                <p>
                  <i className="fa-solid fa-arrow-right text-danger me-4 fs-5"></i>
                  {t("our_classes")}
                </p>
              </div>
            </Col>
            <Col sm>
              <div className="text-capitalize text-white ">
                <h1 className="lead fs-3 mb-5 fw-bolder">
                  {" "}
                  {t("our_contacts")}
                </h1>
                <p>
                  <i className="fa-solid fa-map text-danger me-4"></i>
                  {t("address")}
                </p>
                <p>
                  <i className="fa-solid fa-phone text-danger me-4"></i>
                  +372 55 555 555
                </p>
                <p>
                  <i className="fa-solid fa-paper-plane text-danger me-4"></i>
                  info@fightclub.com
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="footer__bottom text-white d-flex justify-content-center p-5 bg-secondary">
        {t("copyright")} | <p className="text-danger mx-2"> FightClub</p>
      </div>
    </footer>
  );
};

export default Footer;
