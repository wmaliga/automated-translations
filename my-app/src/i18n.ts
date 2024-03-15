import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './translations/en.json';
import de from './translations/de.json';
import fi from './translations/fi.json';
import pl from './translations/pl.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { ...en },
      de: { ...de },
      fi: { ...fi },
      pl: { ...pl }
    },
    fallbackLng: 'en',
  });