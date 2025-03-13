<script setup lang="ts">
import { AnimalType } from '~/enums/animal-type';

defineI18nRoute({
  paths: {
    de: '/tiere/[type]',
    en: '/animals/[type]/',
    fr: '/animaux/[type]/',
  },
});

const animalTypeSlug = useRoute().params['type'] as string;

const { t, locale: currentLocale, locales: availableLocales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

// 1. For fetching data: Localized slug -> Enum
const animalType = localizedSlugToEnum(animalTypeSlug);

if (!animalType) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true,
  });
}

// 2. For Changing language: Set localized slug for each language in setI18nParams()
const params = Object.fromEntries(
  Object.entries(enumToLocalizedSlugsForAllLocales(animalType)).map(
    ([locale, animalTypeSlug]) => [locale, { type: animalTypeSlug }],
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
      <div>Slug: {{ animalTypeSlug }}</div>
      <div>Value: {{ animalType }}</div>
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

    <div class="font-medium mb-0.5">Explicit links:</div>
    <div class="pl-2">
      <ul class="list-disc list-inside space-y-1">
        <li>
          <NuxtLinkLocale
            :to="{
              name: 'products-type',
              params: { type: enumToLocalizedSlug(AnimalType.Cat) },
            }"
            class="hover:underline"
          >
            {{ t(`product.type.${AnimalType.Cat}`, 2) }}
          </NuxtLinkLocale>
        </li>
        <li>
          <NuxtLinkLocale
            :to="{
              name: 'products-type',
              params: { type: enumToLocalizedSlug(AnimalType.Dog) },
            }"
            class="hover:underline"
          >
            {{ t(`product.type.${AnimalType.Dog}`, 2) }}
          </NuxtLinkLocale>
        </li>
      </ul>
    </div>
  </div>
</template>
