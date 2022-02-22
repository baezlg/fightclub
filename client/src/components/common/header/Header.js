import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { Navbar, Nav, NavDropdown, Container, Form } from "react-bootstrap";

const Header = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useState("en");
  const user = false;

  useEffect(() => {
    setLang(localStorage.getItem("lang"));
  }, [localStorage.getItem("lang")]);
  const handleChange = (e) => {
    console.log(e.target.value);
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
  };
  return (
    <div className="header">
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="header-bottom bg-transparent"
      >
        <div className="header-lang">
          <select onChange={(e) => handleChange(e)} value={lang ? lang : "en"}>
            <option value="en">en</option>
            <option value="es">es</option>
            <option value="et">et</option>
          </select>
        </div>
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