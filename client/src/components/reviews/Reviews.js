import React from "react";
import { Col, Row, Container } from "react-bootstrap";

const Reviews = () => {
  return (
    <section>
      <Container>
        <h2 className="display-1 lead text-center p-5 text-capitalize fw-bolder text-danger">
          Testimonial
        </h2>
        <Row xs={1} lg={4} md={2}>
          <Col className="mb-2">
            <div className="bg-white p-4">
              <p className="fs-4 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                quo libero explicabo, voluptas unde fugiat rerum tempore maxime,
                non incidunt quis eius maiores minima deserunt obcaecati soluta
                nesciunt laborum perspiciatis quae fugit, dolores illo natus.
                Quaerat sapiente qui quas id?
              </p>
              <p className="d-flex justify-content-end align-items-center text-danger">
                <i className="fa-solid fa-arrow-right-long me-3 text-black"></i>
                Eli Christopher
              </p>
            </div>
          </Col>
          <Col className="mb-2">
            <div className="bg-white p-4">
              <p className="fs-4 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                quo libero explicabo, voluptas unde fugiat rerum tempore maxime,
                non incidunt quis eius maiores minima deserunt obcaecati soluta
                nesciunt laborum perspiciatis quae fugit, dolores illo natus.
                Quaerat sapiente qui quas id?
              </p>
              <p className="d-flex justify-content-end align-items-center text-danger">
                <i className="fa-solid fa-arrow-right-long me-3 text-black"></i>
                Eli Christopher
              </p>
            </div>
          </Col>
          <Col className="mb-2">
            <div className="bg-white p-4">
              <p className="fs-4 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                quo libero explicabo, voluptas unde fugiat rerum tempore maxime,
                non incidunt quis eius maiores minima deserunt obcaecati soluta
                nesciunt laborum perspiciatis quae fugit, dolores illo natus.
                Quaerat sapiente qui quas id?
              </p>
              <p className="d-flex justify-content-end align-items-center text-danger">
                <i className="fa-solid fa-arrow-right-long me-3 text-black"></i>
                John doe
              </p>
            </div>
          </Col>
          <Col className="mb-2">
            <div className="bg-white p-4">
              <p className="fs-4 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                quo libero explicabo, voluptas unde fugiat rerum tempore maxime,
                non incidunt quis eius maiores minima deserunt obcaecati soluta
                nesciunt laborum perspiciatis quae fugit, dolores illo natus.
                Quaerat sapiente qui quas id?
              </p>
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
