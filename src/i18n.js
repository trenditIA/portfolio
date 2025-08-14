import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importa los JSON de traducciones
import enTranslation from './locales/en/translation.json';
import esTranslation from './locales/es/translation.json';

i18n
  .use(LanguageDetector) // Detecta idioma del navegador
  .use(initReactI18next) // Vincula con React
  .init({
    resources: {
      en: { translation: enTranslation },
      es: { translation: esTranslation }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React ya escapa por defecto
    }
  });

export default i18n;
