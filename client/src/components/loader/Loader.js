import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center loader">
      <Spinner
        animation="border"
        variant="danger"
        className="spinner-border-sm loader-item"
      />
    </div>
  );
};

export default Loader;
