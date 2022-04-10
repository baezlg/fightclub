import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/user/userActions";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

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
      dispatch(register(name, email, password));
    }
  };

  return (
    <section>
      <Container>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              type="text"
              size="lg"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              type="email"
              size="lg"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
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
              placeholder="Enter Password"
            />
          </Form.Group>
          <Form.Group
            className="mb-4"
            controlId="formBasicPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
          >
            <Form.Control
              type="password"
              size="lg"
              placeholder="Confirm Password"
            />
          </Form.Group>
          <div className="text-white">
            <p>
              have an Account?{" "}
              <Link to="/login" className="text-danger">
                Login
              </Link>
            </p>
          </div>
          <Button type="submit" size="lg" className="p-3" variant="danger">
            Register
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default RegisterForm;
