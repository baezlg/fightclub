import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/user/userActions";

const LoginForm = () => {
  const location = useLocation();
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
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control
              type="password"
              size="lg"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div className="text-white">
            <p>
              Don't have an Account?{" "}
              <Link to="/register" className="text-danger">
                Register
              </Link>
            </p>
          </div>
          <Button type="submit" size="lg" className="p-3" variant="danger">
            Login
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default LoginForm;
