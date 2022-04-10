import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const PPArea = () => {
  const { t } = useTranslation();
  return (
    <section className="text-white">
      <Container>
        <h1 className="display-1 mb-5">{t("wp-policy")}</h1>
        <h3 className="fw-bold mb-4 text-danger">{t("intro-1")}</h3>
        <p className="display-6">{t("ppp-1")}</p>
        <h4 className="display-6 my-5">{t("pph-1")}</h4>
        <ul className="display-6 mb-5">
          <li className="display-6">{t("ppl-01")}</li>
          <li className="display-6">{t("ppl-02")}</li>
          <li className="display-6">{t("ppl-03")}</li>
          <li className="display-6">{t("ppl-04")}</li>
        </ul>
        <h3 className="fw-bold my-4 text-danger">{t("intro-2")}</h3>
        <p className="display-6">{t("ppp-2")}</p>
        <h3 className="fw-bold my-5 text-danger">{t("intro-3")}</h3>
        <p className="display-6">{t("ppp-3")}</p>
        <h3 className="fw-bold my-4 text-danger">{t("intro-4")}</h3>
        <h4 className="display-6 ">{t("pph-2")}</h4>
        <ul className="display-6 fs-2">
          <li className="display-6">{t("ppl-11")}</li>
          <li className="display-6">{t("ppl-12")}</li>
          <li className="display-6">{t("ppl-13")}</li>
          <li className="display-6">{t("ppl-14")}</li>
          <li className="display-6">{t("ppl-15")}</li>
          <li className="display-6">{t("ppl-16")}</li>
          <li className="display-6">{t("ppl-17")}</li>
          <li className="display-6">{t("ppl-18")}</li>
          <li className="display-6">{t("ppl-19")}</li>
        </ul>

        <h3 className="fw-bold my-4 text-danger">{t("intro-5")}</h3>
        <p className="display-6">
          {t("pph-3")}
          <br />
          {t("pp-ad")}
        </p>
      </Container>
    </section>
  );
};

export default PPArea;
