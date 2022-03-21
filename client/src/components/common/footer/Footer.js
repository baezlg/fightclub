import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__top">
        <Container>
          <Row>
            <Col sm>
              <div className="text-capitalize text-white ">
                <h2 className="footer__logo mb-5 text-danger">FightClub</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  consequatur perspiciatis totam.
                </p>
              </div>
            </Col>
            <Col sm>
              <div className="text-capitalize text-white ">
                <h1 className="lead fs-3 mb-5 fw-bolder">Explore</h1>
                <p>
                  <i className="fa-solid fa-arrow-right text-danger me-4 fs-5"></i>
                  About Us
                </p>
                <p>
                  <i className="fa-solid fa-arrow-right text-danger me-4 fs-5"></i>
                  Latest News
                </p>
                <p>
                  <i className="fa-solid fa-arrow-right text-danger me-4 fs-5"></i>
                  Privacy Policy
                </p>
                <p>
                  <i className="fa-solid fa-arrow-right text-danger me-4 fs-5"></i>
                  Frequently Asked Questions
                </p>
                <p>
                  <i className="fa-solid fa-arrow-right text-danger me-4 fs-5"></i>
                  Our Classes
                </p>
              </div>
            </Col>
            <Col sm>
              <div className="text-capitalize text-white ">
                <h1 className="lead fs-3 mb-5 fw-bolder">Our Contacts</h1>
                <p>
                  <i className="fa-solid fa-map text-danger me-4"></i>
                  123 Mustamae Tee, Tallinn, Estonia
                </p>
                <p>
                  <i className="fa-solid fa-phone text-danger me-4"></i>
                  +372 55 555 555
                </p>
                <p>
                  <i className="fa-solid fa-paper-plane text-danger me-4"></i>
                  info@fightclub.com
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="footer__bottom text-white d-flex justify-content-center p-5 bg-secondary">
        Copyright ©2022 All rights reserved | FightClub
      </div>
    </footer>
  );
};

export default Footer;
