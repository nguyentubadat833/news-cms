// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ["@prisma/nuxt"],
  prisma: {
    runMigration: false
  },
  build: {
    transpile: ['@prisma/client']
  }
})