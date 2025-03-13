import { slugs } from '~~/i18n/slugs';
import type { Locale } from '~~/i18n/available-locale';

export const enumToLocalizedSlugsForAllLocales = (
  slugKey: string,
  value: any,
): Record<Locale, string> | undefined => {
  if (!slugs[slugKey]) {
    console.warn(`Slug-key '${slugKey}' does not exist`);
    return;
  }

  return Object.keys(slugs[slugKey]).reduce(
    (acc, locale) => {
      acc[locale as Locale] = slugs[slugKey]![locale as Locale][value];
      return acc;
    },
    {} as Record<Locale, string>,
  );
};
