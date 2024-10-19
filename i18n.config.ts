import { translationFR, indexFR, cvFR, projetsFR, blogFR, contactFR } from './locales/fr';
import { translationEN, indexEN, cvEN, projetsEN, blogEN, contactEN } from './locales/en';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'fr',
  messages: {
    fr: {
      ...translationFR,
      ...indexFR,
      ...cvFR,
      ...projetsFR,
      ...blogFR,
      ...contactFR
    },
    en: {
      ...translationEN,
      ...indexEN,
      ...cvEN,
      ...projetsEN,
      ...blogEN,
      ...contactEN
    }
  }
}));
