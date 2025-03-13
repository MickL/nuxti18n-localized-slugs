import type { ProductType } from '~/enums/product-type';
import { slugs } from '~~/i18n/slugs';
import type { Locale } from '~~/i18n/available-locale';

export const enumToLocalizedSlug = (value: ProductType): string => {
  const { locale } = useI18n();

  return slugs[locale.value][value];
};
