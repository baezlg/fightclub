import React from "react";

const Banner = ({ title }) => {
  return (
    <div className="d-flex justify-content-center align-items-center banner flex-column">
      <h1 className="fw-bolder text-center display-2">{title}</h1>
      <p className="fs-2">
        Home / <span className="text-danger fs-2">{title}</span>
      </p>
    </div>
  );
};

export default Banner;
