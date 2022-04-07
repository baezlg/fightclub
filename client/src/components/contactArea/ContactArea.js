import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const ContactArea = () => {
  return (
    <section>
      <Container>
        <h1 className="display-4 text-center text-white p-2 mb-5">
          Get in Touch
        </h1>
        <Row lg={2} md={2} xs={1}>
          <Col className="mb-5">
            <Form>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control type="text" size="lg" placeholder="Enter name" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  size="lg"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control type="text" size="lg" placeholder="Subject" />
              </Form.Group>
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  size="lg"
                  rows={5}
                  placeholder="Message"
                />
              </Form.Group>
              <Button type="submit" size="lg" className="p-3" variant="danger">
                Submit
              </Button>
            </Form>
          </Col>
          <Col className="bg-white">
            <div className="text-white text-center p-2">
              <p className="display-6  text-dark">
                123 mustamae tee, tallinn, eesti
              </p>
              <p className="display-6  text-dark">+372 55 555 555</p>
              <p className="display-6  text-dark">info@fightclub.com</p>
              <p className="display-6  text-dark">www.fightclub.com</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactArea;
