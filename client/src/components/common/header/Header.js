import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import Cookies from "js-cookie";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const Header = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useState("gb");
  const user = true;

  const handleChange = (e) => {
    const { value } = e.target;
    i18n.changeLanguage(value);
    setLang(Cookies.get("i18next"));
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
          <Navbar.Brand href="#home">FightClub</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={`#${t("news")}`}>{t("home")}</Nav.Link>
              <NavDropdown
                title={`${t("classes")}`}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href={`#${t("bjj")}`}>
                  {t("bjj")}
                </NavDropdown.Item>
                <NavDropdown.Item href={`#${t("wrestling")}`}>
                  {t("wrestling")}
                </NavDropdown.Item>
                <NavDropdown.Item href={`#${t("mma")}`}>
                  {t("mma")}
                </NavDropdown.Item>
                <NavDropdown.Item href={`#${t("boxing")}`}>
                  {t("boxing")}
                </NavDropdown.Item>
                <NavDropdown.Item href={`#${t("karate")}`}>
                  {t("karate")}
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href={`#${t("prices")}`}>{t("prices")}</Nav.Link>
              <Nav.Link href={`#${t("news")}`}>{t("news")}</Nav.Link>
              <Nav.Link href={`#${t("about")}`}>{t("about")}</Nav.Link>
              <Nav.Link href={`#${t("contact")}`}>{t("contact")}</Nav.Link>
            </Nav>
            <Nav>
              {user && <Nav.Link href="#">john</Nav.Link>}
              <Nav.Link href={`#${t("login")}`}>{t("login")}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
