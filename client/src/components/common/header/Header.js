import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { Navbar, Nav, NavDropdown, Container, Form } from "react-bootstrap";
import useLocalStorage from "../../../hooks/useLocalStorage";

const Header = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useLocalStorage("lang", { lang: "gb" });
  const user = true;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLang((lang) => ({ [name]: value }));
    console.log(lang);
    i18n.changeLanguage(value);
  };
  return (
    <div className="header">
      <div className="p-2 bg-secondary">
        <Container className="d-flex justify-content-end">
          <div className="flags">
            <label
              className={
                lang.lang === "gb" ? "fi fi-gb icon active" : "fi fi-gb icon"
              }
              htmlFor="gb"
            >
              <input
                type="radio"
                name="lang"
                value="gb"
                id="gb"
                defaultChecked={lang.lang === "gb"}
                onChange={handleChange}
              />
            </label>
            <label
              className={
                lang.lang === "ee" ? "fi fi-ee icon active" : "fi fi-ee icon"
              }
              htmlFor="ee"
            >
              <input
                type="radio"
                name="lang"
                value="ee"
                id="ee"
                onChange={handleChange}
                defaultChecked={lang.lang === "ee"}
              />
            </label>
            <label
              className={
                lang.lang === "es" ? "fi fi-es icon active" : "fi fi-es icon"
              }
              htmlFor="es"
            >
              <input
                type="radio"
                name="lang"
                value="es"
                id="es"
                onChange={handleChange}
                defaultChecked={lang.lang === "es"}
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
