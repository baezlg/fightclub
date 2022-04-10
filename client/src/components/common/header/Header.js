import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import Cookies from "js-cookie";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { logout } from "../../../redux/user/userActions";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [lang, setLang] = useState(Cookies.get("i18next"));
  console.log(lang);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handleChange = (e) => {
    const { value } = e.target;
    i18n.changeLanguage(value);
    setLang(Cookies.get("i18next"));
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="header">
      <div className="p-2 bg-danger">
        <Container className="d-flex justify-content-end">
          <div className="flags">
            <label
              className={
                lang === "gb" ? "fi fi-gb icon active" : "fi fi-gb icon"
              }
              htmlFor="gb"
            >
              <input
                type="radio"
                name="lang"
                value="gb"
                id="gb"
                defaultChecked={lang === "gb"}
                onChange={handleChange}
              />
            </label>
            <label
              className={
                lang === "ee" ? "fi fi-ee icon active" : "fi fi-ee icon"
              }
              htmlFor="ee"
            >
              <input
                type="radio"
                name="lang"
                value="ee"
                id="ee"
                onChange={handleChange}
                defaultChecked={lang === "ee"}
              />
            </label>
            <label
              className={
                lang === "es" ? "fi fi-es icon active" : "fi fi-es icon"
              }
              htmlFor="es"
            >
              <input
                type="radio"
                name="lang"
                value="es"
                id="es"
                onChange={handleChange}
                defaultChecked={lang === "es"}
              />
            </label>
          </div>
        </Container>
      </div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="header-bottom"
      >
        <Container>
          <NavLink to="/">
            <Navbar.Brand>FightClub</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={NavLink}
                to={`/`}
                className={({ isActive }) =>
                  isActive ? "nav-link.active" : "nav-link"
                }
              >
                {t("home")}
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link.active" : "nav-link"
                }
              >
                {t("about")}
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link.active" : "nav-link"
                }
              >
                {t("contact")}
              </Nav.Link>
            </Nav>
            <Nav>
              {userInfo && (
                <Nav.Link as={NavLink} to="/account">
                  {userInfo.name}
                </Nav.Link>
              )}
              {userInfo ? (
                <Button
                  onClick={logoutHandler}
                  size="lg"
                  className="text-uppercase"
                  variant="danger"
                >
                  {t("logout")}
                </Button>
              ) : (
                <Button
                  onClick={() => navigate(`/login`)}
                  size="lg"
                  className="text-uppercase"
                  variant="danger"
                >
                  {t("login")}
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
