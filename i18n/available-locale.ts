// For type checking, define available locales
export const availableLocales = ['de', 'en', 'fr'] as const;
export type Locale = (typeof availableLocales)[number]; // TODO: Does this come von @nuxtjs/i18n ?
