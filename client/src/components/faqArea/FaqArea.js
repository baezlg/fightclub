import React from "react";
import { Accordion, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const FaqArea = () => {
  const { t } = useTranslation();
  return (
    <section>
      <Container>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{t("faq-1")}</Accordion.Header>
            <Accordion.Body>{t("faq-a")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>{t("faq-2")}</Accordion.Header>
            <Accordion.Body>{t("faq-a")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>{t("faq-3")}</Accordion.Header>
            <Accordion.Body>{t("faq-a")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>{t("faq-4")}</Accordion.Header>
            <Accordion.Body>{t("faq-a")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>{t("faq-5")}</Accordion.Header>
            <Accordion.Body>{t("faq-a")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>{t("faq-6")}</Accordion.Header>
            <Accordion.Body>{t("faq-a")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>{t("faq-7")}</Accordion.Header>
            <Accordion.Body>{t("faq-a")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>{t("faq-8")}</Accordion.Header>
            <Accordion.Body>{t("faq-a")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>{t("faq-9")}</Accordion.Header>
            <Accordion.Body>{t("faq-a")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>{t("faq-10")}</Accordion.Header>
            <Accordion.Body>{t("faq-a")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header>{t("faq-11")}</Accordion.Header>
            <Accordion.Body>{t("faq-a")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="11">
            <Accordion.Header>{t("faq-12")}</Accordion.Header>
            <Accordion.Body>{t("faq-a")}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};

export default FaqArea;
