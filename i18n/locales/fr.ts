import { ProductType } from '~/enums/product-type';
import { AnimalType } from '~/enums/animal-type';

export default defineI18nLocale(async (locale) => {
  return {
    product: {
      title: 'Produits',
      type: {
        [ProductType.Pant]: 'Pantalon | Pantalons',
        [ProductType.Shirt]: 'Chemise | Chemises',
        [ProductType.Shoes]: 'Chaussures',
      },
    },
    animal: {
      title: 'Animaux',
      type: {
        [AnimalType.Cat]: 'Chat | Chats',
        [AnimalType.Dog]: 'Chien | Chiens ',
      },
    },
  };
});
