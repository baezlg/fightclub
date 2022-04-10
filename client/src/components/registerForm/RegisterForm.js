import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/user/userActions";

const RegisterForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [personalID, setPersonalID] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, phone, personalID, password));
      setName("");
      setEmail("");
      setPhone("");
      setPersonalID("");
      setPassword("");
    }
  };

  return (
    <section>
      <Container>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-4" controlId="formBasicName">
            <Form.Control
              type="text"
              size="lg"
              placeholder={`${t("enter-name")}`}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              type="email"
              size="lg"
              placeholder={`${t("enter-email")}`}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPhone">
            <Form.Control
              type="text"
              size="lg"
              placeholder={`${t("enter-phone")}`}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicId">
            <Form.Control
              type="text"
              size="lg"
              placeholder={`${t("personal-id")}`}
              onChange={(e) => setPersonalID(e.target.value)}
            />
          </Form.Group>

          <Form.Group
            className="mb-4"
            controlId="formBasicPassword"
            onChange={(e) => setPassword(e.target.value)}
          >
            <Form.Control
              type="password"
              size="lg"
              placeholder={`${t("enter-password")}`}
            />
          </Form.Group>
          <Form.Group
            className="mb-4"
            controlId="formBasicPasswordConfirm"
            onChange={(e) => setConfirmPassword(e.target.value)}
          >
            <Form.Control
              type="password"
              size="lg"
              placeholder={`${t("confirm-password")}`}
            />
          </Form.Group>
          <div className="text-white">
            <p>
              {`${t("have-account")}`}{" "}
              <Link to="/login" className="text-danger">
                {`${t("login")}`}
              </Link>
            </p>
          </div>
          <Button type="submit" size="lg" className="p-3" variant="danger">
            {`${t("register")}`}
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default RegisterForm;
