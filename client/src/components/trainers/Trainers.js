import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Bjj_tr from "./../../assets/img/bjj-tr.jpg";
import Wrestling_tr from "./../../assets/img/bjj-tr.jpg";
import Kickboxing_tr from "./../../assets/img/kickboxing-tr.jpg";
import Boxing_tr from "./../../assets/img/boxing-tr.jpg";
import Karate_tr from "./../../assets/img/karate-tr.jpg";

const Trainers = () => {
  return (
    <section>
      <Container>
        <h2 className="display-1 lead text-center p-5 text-capitalize fw-bolder text-danger">
          our trainers
        </h2>
        <Row xs={1} lg={5} md={3}>
          <Col className="mb-2">
            <Card>
              <Card.Img
                variant="top"
                fluid
                src={Kickboxing_tr}
                style={{ height: "300px" }}
              />
              <Card.Body className="text-center text-capitalize">
                <Card.Title className="fs-3 fw-bold">john doe</Card.Title>
                <Card.Text>kickboxing trainer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-2">
            <Card>
              <Card.Img
                variant="top"
                fluid
                src={Wrestling_tr}
                style={{ height: "300px" }}
              />
              <Card.Body className="text-center text-capitalize">
                <Card.Title className="fs-3 fw-bold">john doe</Card.Title>
                <Card.Text>Wrestling trainer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-2">
            <Card>
              <Card.Img
                variant="top"
                fluid
                src={Boxing_tr}
                style={{ height: "300px" }}
              />
              <Card.Body className="text-center text-capitalize">
                <Card.Title className="fs-3 fw-bold">john doe</Card.Title>
                <Card.Text>Boxing trainer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-2">
            <Card>
              <Card.Img
                variant="top"
                fluid
                src={Karate_tr}
                style={{ height: "300px" }}
              />
              <Card.Body className="text-center text-capitalize">
                <Card.Title className="fs-3 fw-bold">john doe</Card.Title>
                <Card.Text>karate trainer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-2">
            <Card>
              <Card.Img
                variant="top"
                fluid
                src={Bjj_tr}
                style={{ height: "300px" }}
              />
              <Card.Body className="text-center text-capitalize">
                <Card.Title className="fs-3 fw-bold">john doe</Card.Title>
                <Card.Text>BJJ Trainer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Trainers;
