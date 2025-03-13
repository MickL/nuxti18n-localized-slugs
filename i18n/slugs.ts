import type { Locale } from '~~/i18n/available-locale';
import { ProductType } from '~/enums/product-type';

export const slugs: Record<Locale, Record<ProductType, string>> = {
  de: {
    [ProductType.Pant]: 'hosen',
    [ProductType.Shirt]: 'shirts',
    [ProductType.Shoes]: 'schuhe',
  },
  en: {
    [ProductType.Pant]: 'pants',
    [ProductType.Shirt]: 'shirts',
    [ProductType.Shoes]: 'shoes',
  },
  fr: {
    [ProductType.Pant]: 'pantalons',
    [ProductType.Shirt]: 'chemises',
    [ProductType.Shoes]: 'chaussures',
  },
};