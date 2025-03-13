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
const productType = localizedSlugToEnum(productTypeSlug);

if (!productType) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true,
  });
}

// 2. For Changing language: Set localized slug for each language in setI18nParams()
const params = Object.fromEntries(
  Object.entries(enumToLocalizedSlugsForAllLocales(productType)).map(
    ([locale, slug]) => [locale, { type: slug }],
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

    <div class="font-medium mb-0.5">Switch locale path:</div>
    <ul class="list-disc list-inside space-y-1">
      <li v-for="locale in availableLocales" :key="locale.code">
        {{ locale.code }}:
        <NuxtLink :to="switchLocalePath(locale.code)" class="hover:underline">
          {{ switchLocalePath(locale.code) }}
        </NuxtLink>
      </li>
    </ul>

    <div class="font-medium mb-1">Explicit links:</div>
    <ul class="list-disc list-inside space-y-1">
      <li>
        <NuxtLinkLocale
          :to="{ name: 'products-type', params: { type: enumToLocalizedSlug(ProductType.Pant) } }"
          class="hover:underline"
        >
          {{ t(`product.type.${ProductType.Pant}`, 2) }}
        </NuxtLinkLocale>
      </li>
      <li>
        <NuxtLinkLocale
          :to="{ name: 'products-type', params: { type: enumToLocalizedSlug(ProductType.Shoes) } }"
          class="hover:underline"
        >
          {{ t(`product.type.${ProductType.Shoes}`, 2) }}
        </NuxtLinkLocale>
      </li>
      <li>
        <NuxtLinkLocale
          :to="{ name: 'products-type', params: { type: enumToLocalizedSlug(ProductType.Shirt) } }"
          class="hover:underline"
        >
          {{ t(`product.type.${ProductType.Shirt}`, 2) }}
        </NuxtLinkLocale>
      </li>
    </ul>
  </div>
</template>
