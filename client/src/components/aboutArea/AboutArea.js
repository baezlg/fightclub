import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const AboutArea = () => {
  const { t } = useTranslation();
  return (
    <section>
      <Container>
        <Row lg={2} md={2} xs={1}>
          <Col className="mb-5">
            <Image
              src="https://images.unsplash.com/photo-1599677100066-edddd69b70e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGp1ZG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              fluid
            />
          </Col>
          <Col>
            <div className="text-white">
              <h1 className="display-4">{t("about-club")}</h1>
              <p className="fs-3">{t("about-text")}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutArea;
