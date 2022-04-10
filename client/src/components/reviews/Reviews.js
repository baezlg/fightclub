import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Reviews = () => {
  const { t } = useTranslation();
  return (
    <section>
      <Container>
        <h2 className="display-1 lead text-center p-5 text-capitalize fw-bolder text-danger">
          {t("testimonial")}
        </h2>
        <Row xs={1} lg={4} md={2}>
          <Col className="mb-2">
            <div className="bg-white p-4">
              <p className="fs-4 text-center">{t("review-1")}</p>
              <p className="d-flex justify-content-end align-items-center text-danger">
                <i className="fa-solid fa-arrow-right-long me-3 text-black"></i>
                Cindy Sam
              </p>
            </div>
          </Col>
          <Col className="mb-2">
            <div className="bg-white p-4">
              <p className="fs-4 text-center">{t("review-1")}</p>
              <p className="d-flex justify-content-end align-items-center text-danger">
                <i className="fa-solid fa-arrow-right-long me-3 text-black"></i>
                Eli Christopher
              </p>
            </div>
          </Col>
          <Col className="mb-2">
            <div className="bg-white p-4">
              <p className="fs-4 text-center">{t("review-1")}</p>
              <p className="d-flex justify-content-end align-items-center text-danger">
                <i className="fa-solid fa-arrow-right-long me-3 text-black"></i>
                John doe
              </p>
            </div>
          </Col>
          <Col className="mb-2">
            <div className="bg-white p-4">
              <p className="fs-4 text-center">{t("review-1")}</p>
              <p className="d-flex justify-content-end align-items-center  text-danger">
                <i className="fa-solid fa-arrow-right-long me-3 text-black"></i>
                Tracy Johnson
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Reviews;
