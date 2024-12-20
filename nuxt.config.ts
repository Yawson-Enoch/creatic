// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: ['~/assets/css/app.css'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },

  modules: ['@nuxt/fonts'],
  fonts: {
    provider: 'google',
    experimental: {
      processCSSVariables: true,
    },
  },

  /* disable auto-imports */
  imports: {
    autoImport: false,
  },
  components: {
    dirs: [],
  },
});
