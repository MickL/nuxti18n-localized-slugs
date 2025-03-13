import { ProductType } from '~/enums/product-type';
import { AnimalType } from '~/enums/animal-type';

export default defineI18nLocale(async (locale) => {
  return {
    product: {
      title: 'Produkte',
      type: {
        [ProductType.Pant]: 'Hose | Hosen',
        [ProductType.Shirt]: 'Shirt | Shirts',
        [ProductType.Shoes]: 'Schuhe',
      },
    },
    animal: {
      title: 'Tiere',
      type: {
        [AnimalType.Cat]: 'Katze | Katzen',
        [AnimalType.Dog]: 'Hund | Hunde',
      },
    },
  };
});
