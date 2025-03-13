import { ProductType } from '~/enums/product-type';

export default defineI18nLocale(async (locale) => {
  return {
    product: {
      type: {
        [ProductType.Pant]: 'Pant | Pants',
        [ProductType.Shirt]: 'Shirt | Shirts',
        [ProductType.Shoes]: 'Shoes',
      },
    },
  };
});
