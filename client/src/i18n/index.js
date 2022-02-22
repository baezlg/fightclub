import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Cookies from "js-cookie";
import english from "./locales/en/translations.json";
import spanish from "./locales/es/translations.json";
import estonian from "./locales/et/translations.json";

const langtranslation = () => {
  return i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .init({
      resources: {
        en: {
          translation: english,
        },
        es: {
          translation: spanish,
        },
        et: {
          translation: estonian,
        },
      },
      lng: Cookies.get("i18next") || "en",
      supportedLngs: ["en", "es", "et"],
      fallbackLng: "en",
      detection: {
        order: [
          "cookie",
          "htmlTag",
          "localStorage",
          "sessionStorage",
          "navigator",
          "path",
          "subdomain",
        ],
        caches: ["cookie"],
      },
    });
};

export default langtranslation;
