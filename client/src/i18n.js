import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: { translation: { welcome: "Welcome to Tekly" } },
  es: { translation: { welcome: "Bienvenido a Tekly" } },
  fr: { translation: { welcome: "Bienvenue à Tekly" } },
  zh: { translation: { welcome: "欢迎来到 Tekly" } },
  hi: { translation: { welcome: "Tekly में आपका स्वागत है" } },
  sq: { translation: { welcome: "Mirë se vini në Tekly" } },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;
