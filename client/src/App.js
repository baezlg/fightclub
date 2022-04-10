import React from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import pMinDelay from "p-min-delay";
import Loader from "./components/loader/Loader";
import Loadable from "./components/loader/Loadable";
import Home from "./pages/home/Home";

const About = Loadable(() => pMinDelay(import("./pages/about/About"), 250), {
  fallback: <Loader />,
});
const Contact = Loadable(
  () => pMinDelay(import("./pages/contact/Contact"), 250),
  { fallback: <Loader /> }
);
const NotFound = Loadable(
  () => pMinDelay(import("./pages/notFound/NotFound"), 250),
  { fallback: <Loader /> }
);
const PrivacyPolicy = Loadable(
  () => pMinDelay(import("./pages/privacyPolicy/PrivacyPolicy"), 250),
  { fallback: <Loader /> }
);
const Faq = Loadable(() => pMinDelay(import("./pages/faq/Faq"), 250), {
  fallback: <Loader />,
});
const Login = Loadable(() => pMinDelay(import("./pages/login/Login"), 250), {
  fallback: <Loader />,
});
const Register = Loadable(
  () => pMinDelay(import("./pages/register/Register"), 250),
  {
    fallback: <Loader />,
  }
);
const Account = Loadable(
  () => pMinDelay(import("./pages/account/Account"), 250),
  {
    fallback: <Loader />,
  }
);

const App = () => {
  const { t } = useTranslation();
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path={`/${t("login")}`} element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path={`/${t("contact")}`} element={<Contact />} />
        <Route path={`/${t("about")}`} element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
