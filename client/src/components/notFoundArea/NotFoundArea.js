import React from "react";
import { Button, Container } from "react-bootstrap";

const NotFoundArea = () => {
  return (
    <section>
      <Container>
        <div className="text-white text-center">
          <h1 className="fw-bolder notfound-text">404</h1>
          <h2 className="fs-1 fw-bold">Page Not Found</h2>
          <p className="fs-2 my-2">
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <Button
            size="lg"
            className="text-uppercase p-3 mt-5 fs-2"
            variant="danger"
          >
            homepage
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default NotFoundArea;
