import { ProductType } from '~/enums/product-type';
import { AnimalType } from '~/enums/animal-type';

export default defineI18nLocale(async (locale) => {
  return {
    product: {
      title: 'Products',
      type: {
        [ProductType.Pant]: 'Pant | Pants',
        [ProductType.Shirt]: 'Shirt | Shirts',
        [ProductType.Shoes]: 'Shoes',
      },
    },
    animal: {
      title: 'Animals',
      type: {
        [AnimalType.Cat]: 'Cat | Cats',
        [AnimalType.Dog]: 'Dog | Dogs',
      },
    },
  };
});
