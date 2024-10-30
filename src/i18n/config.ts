import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { number, currency, datetime } from "./formatters";

export const supportedLngs = {
  en: "English",
  ar: "Arabic (العربية)",
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: Object.keys(supportedLngs),
    debug: true,
  });

i18n.services.formatter?.add("number", number);
i18n.services.formatter?.add("currency", currency);
i18n.services.formatter?.add("datetime", datetime);

export default i18n;
