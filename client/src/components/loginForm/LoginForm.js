import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/user/userActions";

const LoginForm = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log(userInfo);

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      if (location.search.startsWith("?")) {
        navigate(`/${location.search.split("=")[1]}`);
      } else {
        navigate(redirect);
      }
    }
  }, [navigate, userInfo, redirect, location.search]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <section>
      <Container>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              type="email"
              size="lg"
              placeholder={`${t("enter-email")}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control
              type="password"
              size="lg"
              placeholder={`${t("enter-password")}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div className="text-white">
            <p>
              {`${t("no-account")}`}{" "}
              <Link to="/register" className="text-danger">
                {`${t("register")}`}
              </Link>
            </p>
          </div>
          <Button type="submit" size="lg" className="p-3" variant="danger">
            {`${t("login")}`}
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default LoginForm;
