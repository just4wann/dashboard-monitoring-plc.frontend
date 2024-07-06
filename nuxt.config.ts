// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    layoutTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  typescript: {
    typeCheck: true
  },
  modules: ["@nuxt/fonts", "@nuxt/ui", "@nuxt/image"],
  css: ['~/assets/main.css'],
  compatibilityDate: '2024-07-05'
})