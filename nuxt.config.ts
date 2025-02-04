// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  nitro: {
    preset: 'vercel'
  },
  runtimeConfig: {
    MONGO_URI: process.env.MONGO_URI
  }
})
