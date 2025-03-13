<script setup lang="ts">
import { AnimalType } from '~/enums/animal-type';
import { ProductType } from '~/enums/product-type';
</script>

<template>
  <div class="container mx-auto py-2 space-y-4">
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
</template>
