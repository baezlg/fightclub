import React from "react";
import { useTranslation } from "react-i18next";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Button, Container } from "react-bootstrap";
SwiperCore.use([Autoplay]);

const Prices = () => {
  const { t } = useTranslation();
  return (
    <section className="prices">
      <Container>
        <h2 className="display-1 lead text-center p-5 text-capitalize fw-bolder text-danger">
          {t("our_prices")}
        </h2>
        <Swiper
          modules={[Pagination]}
          slidesPerView={3}
          loop={true}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
          }}
          className="prices__slider"
        >
          <SwiperSlide className="prices__slide p-4">
            <Container className="d-flex flex-column">
              <div className="display-5 text-center text-uppercase fw-bolder">
                {t("kickboxing")}
              </div>
              <p className="display-2 text-center fw-bolder my-4">
                <sup className="display-5 fw-light">$</sup>
                66
              </p>
              <div className="text-center fs-2">
                <p className="text-capitalize">
                  <i className="fa-solid fa-arrow-right text-danger me-2 fs-5"></i>
                  {t("personal_trainer")}
                </p>
                <p className="text-capitalize">
                  <i className="fa-solid fa-arrow-right text-danger me-2 fs-5"></i>
                  {t("convenient_time")}
                </p>
                <p className="text-capitalize">
                  <i className="fa-solid fa-arrow-right text-danger me-2 fs-5"></i>
                  {t("special_class")}
                </p>
                <p className="text-capitalize">
                  <i className="fa-solid fa-arrow-right text-danger me-2 fs-5"></i>

                  {t("group_training")}
                </p>
                <p className="text-capitalize">
                  <i className="fa-solid fa-arrow-right text-danger me-2 fs-5"></i>
                  {t("fitness_training")}
                </p>
              </div>
              <Button
                variant="danger"
                size="lg"
                className="f3-2 p-3 my-4 text-uppercase"
              >
                {t("get_started")}
              </Button>
            </Container>
          </SwiperSlide>
          <SwiperSlide className="prices__slide p-4">
            <Container className="d-flex flex-column">
              <div className="display-5 text-center text-uppercase fw-bolder">
                {t("boxing")}
              </div>
              <p className="display-2 text-center fw-bolder my-4">
                <sup className="display-5 fw-light">$</sup>
                50
              </p>
              <div className="text-center fs-2">
                <p className="text-capitalize">
                  <i className="fa-solid fa-arrow-right text-danger me-2 fs-5"></i>
                  {t("personal_trainer")}
                </p>
                <p className="text-capitalize">
                  <i className="fa-solid fa-arrow-right text-danger me-2 fs-5"></i>
                  {t("convenient_time")}
                </p>
                <p className="text-capitalize">
                  <i className="fa-solid fa-arrow-right text-danger me-2 fs-5"></i>
                  {t("special_class")}
                </p>
                <p className="text-capitalize">
                  <i className="fa-solid fa-arrow-right text-danger me-2 fs-5"></i>

                  {t("group_training")}
                </p>
                <p className="text-capitalize">
                  <i className="fa-solid fa-arrow-right text-danger me-2 fs-5"></i>
                  {t("fitness_training")}
                </p>
              </div>
              <Button
                variant="danger"
                size="lg"
                className="f3-2 p-3 my-4 text-uppercase"
              >
                {t("get_started")}
              </Button>
            </Container>
          </SwiperSlide>
          <SwiperSlide className="prices__slide p-4">
            <Container className="d-flex flex-column">
              <div className="display-5 text-center text-uppercase fw-bolder">
                {t("karate")}
              </div>
              <p className="display-2 text-center fw-bolder my-4">
                <sup className="display-5 fw-light">$</sup>
                43
              </p>
              <div className="text-center fs-2">
                <p className="text-capitalize">
                  <i className="fa-solid fa-arrow-right text-danger me-2 fs-5"></i>
                  {t("personal_trainer")}
                </p>
                <p className="text-capitalize">
                  <i className="fa-solid fa-arrow-right text-danger me-2 fs-5"></i>
                  {t("convenient_time")}
                </p>
                <p className="text-capitalize">
                  <i className="fa-solid fa-arrow-right text-danger me-2 fs-5"></i>
                  {t("special_class")}
                </p>
                <p className="text-capitalize">
                  <i className="fa-solid fa-arrow-right text-danger me-2 fs-5"></i>

                  {t("group_training")}
                </p>
                <p className="text-capitalize">
                  <i className="fa-solid fa-arrow-right text-danger me-2 fs-5"></i>
                  {t("fitness_training")}
                </p>
              </div>
              <Button
                variant="danger"
                size="lg"
                className="f3-2 p-3 my-4 text-uppercase"
              >
                {t("get_started")}
              </Button>
            </Container>
          </SwiperSlide>
          <SwiperSlide className="prices__slide p-4">
            <Container className="d-flex flex-column">
              <div className="display-5 text-center text-uppercase fw-bolder">
                {t("wrestling")}
              </div>
              <p className="display-2 text-center fw-bolder my-4">
                <sup className="display-5 fw-light">$</sup>
                55
              </p>
              <div className="text-center fs-2">
                <p className="text-capitalize">
                  <i className="fa-solid fa-arrow-right text-danger me-2 fs-5"></i>
                  {t("personal_trainer")}
                </p>
                <p className="text-capitalize">
                  <i className="fa-solid fa-arrow-right text-danger me-2 fs-5"></i>
                  {t("convenient_time")}
                </p>
                <p className="text-capitalize">
                  <i className="fa-solid fa-arrow-right text-danger me-2 fs-5"></i>
                  {t("special_class")}
                </p>
                <p className="text-capitalize">
                  <i className="fa-solid fa-arrow-right text-danger me-2 fs-5"></i>

                  {t("group_training")}
                </p>
                <p className="text-capitalize">
                  <i className="fa-solid fa-arrow-right text-danger me-2 fs-5"></i>
                  {t("fitness_training")}
                </p>
              </div>
              <Button
                variant="danger"
                size="lg"
                className="f3-2 p-3 my-4 text-uppercase"
              >
                {t("get_started")}
              </Button>
            </Container>
          </SwiperSlide>
          <SwiperSlide className="prices__slide p-4">
            <Container className="d-flex flex-column">
              <div className="display-5 text-center text-uppercase fw-bolder">
                {t("mma")}
              </div>
              <p className="display-2 text-center fw-bolder my-4">
                <sup className="display-5 fw-light">$</sup>
                104
              </p>
              <div className="text-center fs-2">
                <p className="text-capitalize">
                  <i className="fa-solid fa-arrow-right text-danger me-2 fs-5"></i>
                  {t("personal_trainer")}
                </p>
                <p className="text-capitalize">
                  <i className="fa-solid fa-arrow-right text-danger me-2 fs-5"></i>
                  {t("convenient_time")}
                </p>
                <p className="text-capitalize">
                  <i className="fa-solid fa-arrow-right text-danger me-2 fs-5"></i>
                  {t("special_class")}
                </p>
                <p className="text-capitalize">
                  <i className="fa-solid fa-arrow-right text-danger me-2 fs-5"></i>

                  {t("group_training")}
                </p>
                <p className="text-capitalize">
                  <i className="fa-solid fa-arrow-right text-danger me-2 fs-5"></i>
                  {t("fitness_training")}
                </p>
              </div>
              <Button
                variant="danger"
                size="lg"
                className="f3-2 p-3 my-4 text-uppercase"
              >
                {t("get_started")}
              </Button>
            </Container>
          </SwiperSlide>
          <SwiperSlide className="prices__slide p-4">
            <Container className="d-flex flex-column">
              <div className="display-5 text-center text-uppercase fw-bolder">
                {t("bjj")}
              </div>
              <p className="display-2 text-center fw-bolder my-4">
                <sup className="display-5 fw-light">$</sup>
                49
              </p>
              <div className="text-center fs-2">
                <p className="text-capitalize">
                  <i className="fa-solid fa-arrow-right text-danger me-2 fs-5"></i>
                  {t("personal_trainer")}
                </p>
                <p className="text-capitalize">
                  <i className="fa-solid fa-arrow-right text-danger me-2 fs-5"></i>
                  {t("convenient_time")}
                </p>
                <p className="text-capitalize">
                  <i className="fa-solid fa-arrow-right text-danger me-2 fs-5"></i>
                  {t("special_class")}
                </p>
                <p className="text-capitalize">
                  <i className="fa-solid fa-arrow-right text-danger me-2 fs-5"></i>

                  {t("group_training")}
                </p>
                <p className="text-capitalize">
                  <i className="fa-solid fa-arrow-right text-danger me-2 fs-5"></i>
                  {t("fitness_training")}
                </p>
              </div>
              <Button
                variant="danger"
                size="lg"
                className="f3-2 p-3 my-4 text-uppercase"
              >
                {t("get_started")}
              </Button>
            </Container>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};

export default Prices;
