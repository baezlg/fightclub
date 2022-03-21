import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  return (
    <section className="services">
      <Container>
        <h2 className="display-1 lead text-center p-5 text-capitalize fw-bolder text-danger">
          {t("our_services")}
        </h2>
        <div className="services__items">
          <Row lg={3} md={3} xs={1}>
            <Col className="mb-5">
              <Card className="text-center d-flex flex-column align-items-center p-3">
                <Image
                  style={{ width: "13rem", height: "13rem" }}
                  roundedCircle
                  fluid
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                />
                <Card.Body>
                  <Card.Title className="h1 fw-bolder text-uppercase display-6">
                    {t("services_title")}
                  </Card.Title>
                  <Card.Text>{t("services_text")}</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col className="mb-5">
              <Card className="text-center d-flex flex-column align-items-center p-3">
                <Image
                  style={{ width: "13rem", height: "13rem" }}
                  roundedCircle
                  fluid
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                />
                <Card.Body>
                  <Card.Title className="h1 fw-bolder text-uppercase display-6">
                    {t("services_title")}
                  </Card.Title>
                  <Card.Text>{t("services_text")}</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col className="mb-5">
              <Card className="text-center d-flex flex-column align-items-center p-3">
                <Image
                  style={{ width: "13rem", height: "13rem" }}
                  roundedCircle
                  fluid
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                />
                <Card.Body>
                  <Card.Title className="h1 fw-bolder text-uppercase display-6">
                    {t("services_title")}
                  </Card.Title>
                  <Card.Text>{t("services_text")}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Services;
