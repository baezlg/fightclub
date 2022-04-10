import React, { useState } from "react";
import { Button, Container, Form, Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updatePassword } from "../../redux/user/userActions";

const AccountArea = () => {
  const navigate = useNavigate();
  const [key, setKey] = useState("profile");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const dispatch = useDispatch();
  const changePass = useSelector((state) => state.changePass);
  const { error } = changePass;

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
          <Tab eventKey="profile" title="Profile Details">
            <div className="text-white mt-5">
              <p className="fw-bold">
                Name : <span className="fw-light">John Doe</span>
              </p>
              <p className="fw-bold">
                Email : <span className="fw-light">john@email.com</span>
              </p>
              <p className="fw-bold">
                Phone : <span className="fw-light">55-555-5555</span>
              </p>
              <p className="fw-bold">
                Personal ID: <span className="fw-light">5243614235</span>
              </p>
            </div>
          </Tab>
          <Tab eventKey="password" title="Change Password">
            <Form className="mt-5" onSubmit={submitHandler}>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control
                  type="password"
                  size="lg"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  size="lg"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  size="lg"
                  placeholder="Confirm new password"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
              </Form.Group>
              <Button type="submit" size="lg" className="p-3" variant="danger">
                submit
              </Button>
            </Form>
            {error && <p className="text-warning mt-3">{error}</p>}
          </Tab>
          <Tab eventKey="classes" title="Registered classes">
            <h1 className="text-white">You aren't registered to any classes</h1>
            <h5 className="text-white">
              Contact us for registration{" "}
              <Button
                variant="danger"
                size="lg"
                onClick={() => navigate("/contact")}
                className="text-uppercase"
              >
                contact
              </Button>
            </h5>
          </Tab>
        </Tabs>
      </Container>
    </section>
  );
};

export default AccountArea;
