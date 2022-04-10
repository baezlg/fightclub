import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Container, Form, Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updatePassword } from "../../redux/user/userActions";

const AccountArea = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [key, setKey] = useState("profile");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const dispatch = useDispatch();
  const changePass = useSelector((state) => state.changePass);
  const { error } = changePass;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updatePassword({ password, newPassword, passwordConfirm }));
    setPassword("");
    setNewPassword("");
    setPasswordConfirm("");
  };
  return (
    <section>
      <Container>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="profile" title={`${t("profile-details")}`}>
            <div className="text-white mt-5">
              <p className="fw-bold text-capitalize">
                {`${t("name")}`} :{" "}
                <span className="fw-light">{userInfo.name}</span>
              </p>
              <p className="fw-bold text-capitalize">
                {`${t("email")}`} :{" "}
                <span className="fw-light">{userInfo.email}</span>
              </p>
              <p className="fw-bold text-capitalize">
                {`${t("phone")}`} :{" "}
                <span className="fw-light">{userInfo.phone}</span>
              </p>
              <p className="fw-bold text-capitalize">
                {`${t("personal-id")}`}:{" "}
                <span className="fw-light">{userInfo.personalID}</span>
              </p>
            </div>
          </Tab>
          <Tab eventKey="password" title={`${t("change-password")}`}>
            <Form className="mt-5" onSubmit={submitHandler}>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control
                  type="password"
                  size="lg"
                  placeholder={`${t("enter-password")}`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  size="lg"
                  placeholder={`${t("new-password")}`}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  size="lg"
                  placeholder={`${t("confirm-password")}`}
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
              </Form.Group>
              <Button
                type="submit"
                size="lg"
                className="p-3 text-uppercase"
                variant="danger"
              >
                {`${t("submit")}`}
              </Button>
            </Form>
            {error && <p className="text-warning mt-3">{error}</p>}
          </Tab>
          <Tab eventKey="classes" title={`${t("registered-classes")}`}>
            <h1 className="text-white">{`${t("not-registered")}`}</h1>
            <h5 className="text-white">
              {`${t("contact-us-reg")}`}{" "}
              <Button
                variant="danger"
                size="lg"
                onClick={() => navigate("/contact")}
                className="text-uppercase"
              >
                {`${t("contact")}`}
              </Button>
            </h5>
          </Tab>
        </Tabs>
      </Container>
    </section>
  );
};

export default AccountArea;
