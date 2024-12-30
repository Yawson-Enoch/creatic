// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  css: ['@/assets/css/app.css'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },

  modules: ['@nuxt/fonts', '@nuxt/image', 'nuxt-swiper'],

  fonts: {
    provider: 'google',
    experimental: {
      processCSSVariables: true,
    },
  },

  runtimeConfig: {
    public: {
      /* this gets overridden when NUXT_PUBLIC_SITE_URL env var is set */
      siteUrl: '',
    },
  },

  /* SSG: pregenerate all pages at build time */
  routeRules: {
    '/**': { prerender: true },
  },
});
