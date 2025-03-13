import { ProductType } from '~/enums/product-type';

export default defineI18nLocale(async (locale) => {
  return {
    product: {
      type: {
        [ProductType.Pant]: 'Pantalon | Pantalons',
        [ProductType.Shirt]: 'Chemise | Chemises',
        [ProductType.Shoes]: 'Chaussures',
      },
    },
  };
});
