import { translationEN, indexEN, cvEN, projetsEN, blogEN, contactEN } from './en';
import { translationFR, indexFR, cvFR, projetsFR, blogFR, contactFR } from './fr';

export const languages = {
  en: 'English',
  fr: 'Français'
};

export const defaultLang = 'fr';

export const ui = {
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
} as const;
