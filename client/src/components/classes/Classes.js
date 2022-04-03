import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Image, Row } from "react-bootstrap";

const Classes = () => {
  const { t } = useTranslation();
  return (
    <section>
      <Container>
        <h2 className="display-1 lead text-center p-5 text-capitalize fw-bolder text-danger">
          {t("our_classes")}
        </h2>
        <div className="class__items">
          <Row lg={3} xs={1} md={2}>
            <Col className="mb-3">
              <div className="box">
                <Image
                  fluid
                  className="box-img"
                  src="https://images.unsplash.com/photo-1575800605380-ca1d27744f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGJveGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                />
                <h2 className="box-title bg-danger p-3 text-white">
                  {t("kickboxing")}
                </h2>
              </div>
            </Col>
            <Col className="mb-3">
              <div className="box">
                <Image
                  fluid
                  className="box-img"
                  src="https://images.unsplash.com/photo-1585511543559-6c4d1f7d3da8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                />
                <h2 className="box-title bg-danger p-3 text-white">
                  {" "}
                  {t("boxing")}
                </h2>
              </div>
            </Col>
            <Col className="mb-3">
              <div className="box">
                <Image
                  fluid
                  className="box-img"
                  src="https://images.unsplash.com/photo-1529566193698-bc394165d541?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
                />
                <h2 className="box-title bg-danger p-3 text-white">
                  {" "}
                  {t("karate")}
                </h2>
              </div>
            </Col>
            <Col className="mb-3">
              <div className="box">
                <Image
                  fluid
                  className="box-img"
                  src="https://images.unsplash.com/photo-1542468019-550cb643a5e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                />
                <h2 className="box-title bg-danger p-3 text-white">
                  {t("wrestling")}
                </h2>
              </div>
            </Col>
            <Col className="mb-3">
              <div className="box">
                <Image
                  fluid
                  className="box-img"
                  src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZpdG5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                />
                <h2 className="box-title bg-danger p-3 text-white">
                  {" "}
                  {t("mma")}
                </h2>
              </div>
            </Col>
            <Col className="mb-3">
              <div className="box">
                <Image
                  fluid
                  className="box-img"
                  src="https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                />
                <h2 className="box-title bg-danger p-3 text-white">
                  {" "}
                  {t("bjj")}
                </h2>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Classes;
