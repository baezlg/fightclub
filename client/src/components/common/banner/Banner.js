import React from "react";
import { useTranslation } from "react-i18next";

const Banner = ({ title }) => {
  const { t } = useTranslation();
  return (
    <div className="d-flex justify-content-center align-items-center banner flex-column">
      <h1 className="fw-bolder text-center display-2 text-capitalize">
        {title}
      </h1>
      <p className="fs-2 text-capitalize">
        {t("home")} /{" "}
        <span className="text-danger fs-2 text-capitalize">{title}</span>
      </p>
    </div>
  );
};

export default Banner;
