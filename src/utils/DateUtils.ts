import { enUS } from 'date-fns/locale/en-US';
import { fr } from 'date-fns/locale/fr';
import type { Locale } from 'date-fns';

export function getLocaleFromLanguage(language: string): Locale {
  return language === 'fr' ? fr : enUS;
}
