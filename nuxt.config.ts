import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ['@nuxtjs/i18n'],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    strategy: 'prefix',
    lazy: true,
    locales: [
      {
        code: 'en',
        file: './en.ts',
      },
      {
        code: 'de',
        file: './de.ts',
      },
      {
        code: 'fr',
        file: './fr.ts',
      },
    ],
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
});
