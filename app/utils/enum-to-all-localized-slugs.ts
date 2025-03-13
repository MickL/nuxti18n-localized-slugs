import type { ProductType } from '~/enums/product-type';
import { slugs } from '~~/i18n/slugs';
import type { Locale } from '~~/i18n/available-locale';

export const enumToLocalizedSlugsForAllLocales = (
  value: ProductType,
): Record<Locale, string> => {
  return Object.keys(slugs).reduce(
    (acc, locale) => {
      acc[locale as Locale] = slugs[locale as Locale][value];
      return acc;
    },
    {} as Record<Locale, string>,
  );
};
