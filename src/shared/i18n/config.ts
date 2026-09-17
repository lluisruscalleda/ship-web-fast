import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import cardsEn from '@/domains/Cards/i18n/en.json';
import homeEn from '@/domains/Home/i18n/en.json';
import sharedEn from '@/shared/i18n/en.json';

void i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        ...sharedEn,
        home: homeEn,
        cards: cardsEn,
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
