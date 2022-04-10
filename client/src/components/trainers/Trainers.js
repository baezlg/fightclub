import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Bjj_tr from "./../../assets/img/bjj-tr.jpg";
import Wrestling_tr from "./../../assets/img/bjj-tr.jpg";
import Kickboxing_tr from "./../../assets/img/kickboxing-tr.jpg";
import Boxing_tr from "./../../assets/img/boxing-tr.jpg";
import Karate_tr from "./../../assets/img/karate-tr.jpg";

const Trainers = () => {
  const { t } = useTranslation();
  return (
    <section>
      <Container>
        <h2 className="display-1 lead text-center p-5 text-capitalize fw-bolder text-danger">
          {t("our_trainers")}
        </h2>
        <Row xs={1} lg={5} md={3}>
          <Col className="mb-2">
            <Card>
              <Card.Img
                variant="top"
                fluid="true"
                src={Kickboxing_tr}
                style={{ height: "300px" }}
              />
              <Card.Body className="text-center text-capitalize">
                <Card.Title className="fs-3 fw-bold">Taylor Lowery</Card.Title>
                <Card.Text className="text-capitalize">
                  {t("kickboxing-trainer")}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-2">
            <Card>
              <Card.Img
                variant="top"
                fluid="true"
                src={Wrestling_tr}
                style={{ height: "300px" }}
              />
              <Card.Body className="text-center text-capitalize">
                <Card.Title className="fs-3 fw-bold">
                  Giovani Guerrero
                </Card.Title>
                <Card.Text className="text-capitalize">
                  {" "}
                  {t("wrestling-trainer")}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-2">
            <Card>
              <Card.Img
                variant="top"
                fluid="true"
                src={Boxing_tr}
                style={{ height: "300px" }}
              />
              <Card.Body className="text-center text-capitalize">
                <Card.Title className="fs-3 fw-bold">Gilbert Ford</Card.Title>
                <Card.Text className="text-capitalize">
                  {" "}
                  {t("boxing-trainer")}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-2">
            <Card>
              <Card.Img
                variant="top"
                fluid="true"
                src={Karate_tr}
                style={{ height: "300px" }}
              />
              <Card.Body className="text-center text-capitalize">
                <Card.Title className="fs-3 fw-bold">
                  Michael Griffin
                </Card.Title>
                <Card.Text className="text-capitalize">
                  {" "}
                  {t("karate-trainer")}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-2">
            <Card>
              <Card.Img
                variant="top"
                fluid="true"
                src={Bjj_tr}
                style={{ height: "300px" }}
              />
              <Card.Body className="text-center text-capitalize">
                <Card.Title className="fs-3 fw-bold">Abraham Mann</Card.Title>
                <Card.Text className="text-capitalize">
                  {t("bjj-trainer")}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Trainers;
