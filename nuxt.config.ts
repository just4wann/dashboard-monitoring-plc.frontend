// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    layoutTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
  ui: {
    icons: ['carbon'],
  },
  typescript: {
    typeCheck: true,
  },
  modules: ['@nuxt/fonts', '@nuxt/ui', '@nuxt/image', '@pinia/nuxt'],
  css: ['~/assets/main.css'],
  compatibilityDate: '2024-07-05',
});
