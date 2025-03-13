import type { Locale } from '~~/i18n/available-locale';
import { ProductType } from '~/enums/product-type';
import { AnimalType } from '~/enums/animal-type';

export const slugs: { [key: string]: Record<Locale, any> } = {
  'animal-type': {
    de: {
      [AnimalType.Cat]: 'katzen',
      [AnimalType.Dog]: 'hunde',
    },
    en: {
      [AnimalType.Cat]: 'cats',
      [AnimalType.Dog]: 'dogs',
    },
    fr: {
      [AnimalType.Cat]: 'chats',
      [AnimalType.Dog]: 'chiens',
    },
  },
  'product-type': {
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
  },
};
