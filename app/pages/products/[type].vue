<script setup lang="ts">
import { ProductType } from '~/enums/product-type';

defineI18nRoute({
  paths: {
    de: '/produkte/[type]',
    en: '/products/[type]/',
    fr: '/produits/[type]/',
  },
});

const productTypeSlug = useRoute().params['type'] as string;

const { t, locale: currentLocale, locales: availableLocales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

// 1. For fetching data: Localized slug -> Enum
const productType = localizedSlugToValue<ProductType>('product-type', productTypeSlug);

if (!productType) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true,
  });
}

// 2. For Changing language: Set localized slug for each language in setI18nParams()
const slugsForAllLocales = enumToLocalizedSlugsForAllLocales('product-type', productType)!;
const params = Object.fromEntries(
  Object.entries(slugsForAllLocales).map(
    ([locale, productTypeSlug]) => [locale, { type: productTypeSlug }],
  ),
);
const setI18nParams = useSetI18nParams();
setI18nParams(params);

// 3. For links: Enum to localized slug*/
</script>

<template>
  <div class="container mx-auto py-2 space-y-4">
    <div class="font-medium mb-0.5">Route data</div>
    <div class="pl-2 space-y-0.5">
      <div>Locale: {{ currentLocale }}</div>
      <div>Slug: {{ productTypeSlug }}</div>
      <div>Value: {{ productType }}</div>
    </div>

    <div class="font-medium mb-0.5">Switch locale:</div>
    <div class="pl-2">
      <ul class="list-disc list-inside space-y-1">
        <li v-for="locale in availableLocales" :key="locale.code">
          {{ locale.code }}:
          <NuxtLink :to="switchLocalePath(locale.code)" class="hover:underline">
            {{ switchLocalePath(locale.code) }}
          </NuxtLink>
        </li>
      </ul>
    </div>

    <div class="font-medium mb-1">Explicit links:</div>
    <div class="pl-2">
      <ul class="list-disc list-inside space-y-1">
        <li>
          <NuxtLinkLocale
            :to="{
              name: 'products-type',
              params: { type: enumToLocalizedSlug('product-type', ProductType.Pant) },
            }"
            class="hover:underline"
          >
            {{ t(`product.type.${ProductType.Pant}`, 2) }}
          </NuxtLinkLocale>
        </li>
        <li>
          <NuxtLinkLocale
            :to="{
              name: 'products-type',
              params: { type: enumToLocalizedSlug('product-type', ProductType.Shoes) },
            }"
            class="hover:underline"
          >
            {{ t(`product.type.${ProductType.Shoes}`, 2) }}
          </NuxtLinkLocale>
        </li>
        <li>
          <NuxtLinkLocale
            :to="{
              name: 'products-type',
              params: { type: enumToLocalizedSlug('product-type', ProductType.Shirt) },
            }"
            class="hover:underline"
          >
            {{ t(`product.type.${ProductType.Shirt}`, 2) }}
          </NuxtLinkLocale>
        </li>
      </ul>
    </div>
  </div>
</template>
