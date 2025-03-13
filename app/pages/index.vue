<script setup lang="ts">
import { AnimalType } from '~/enums/animal-type';
import { ProductType } from '~/enums/product-type';

const { t, locale: currentLocale, locales: availableLocales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
  <div class="container mx-auto py-2 space-y-4">
    <div>
      <div class="font-medium mb-0.5">Pages</div>

      <ul class="list-disc list-inside space-y-1">
        <li>
          <NuxtLinkLocale
            :to="{
              name: 'products-type',
              params: { type: enumToLocalizedSlug(ProductType.Shoes) },
            }"
            class="hover:underline"
          >
            {{ $t('product.title') }}
          </NuxtLinkLocale>
        </li>
        <li>
          <NuxtLinkLocale
            :to="{
              name: 'animals-type',
              params: { type: enumToLocalizedSlug(AnimalType.Cat) },
            }"
            class="hover:underline"
          >
            {{ $t('animal.title') }}
          </NuxtLinkLocale>
        </li>
      </ul>
    </div>

    <div>
      <div class="font-medium mb-0.5">Switch language</div>
      <div class="pl-2">
        <ul class="list-disc list-inside space-y-1">
          <li v-for="locale in availableLocales" :key="locale.code">
            <NuxtLink
              :to="switchLocalePath(locale.code)"
              class="hover:underline"
            >
              {{ locale.code }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
