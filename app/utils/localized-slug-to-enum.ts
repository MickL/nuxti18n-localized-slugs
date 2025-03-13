import { ProductType } from '~/enums/product-type';
import { slugs } from '~~/i18n/slugs';

export const localizedSlugToEnum = (
  slug: string,
): ProductType | undefined => {
  const { locale, t } = useI18n();

  for (const [productType, localizedSlug] of Object.entries(slugs[locale.value])) {
    if (localizedSlug === slug) {
      return productType as ProductType;
    }
  }
};
