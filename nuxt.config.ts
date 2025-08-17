// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  extends: ["app", "auth", "ecommerce"], //override app dir (monolith) with app layer(modular)
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@prisma/nuxt",
  ],
  // prisma: {
  //   prismaRoot: "prisma",
  // },
  nitro: {
    experimental: {
      websocket: true,
    },
    imports: {
      dirs: [
        //default (monolith)
        // "server/services",
        // "server/services",

        //custom layers location (modular)
        "app/server/request",
        "*/server/services",
        "*/server/repos",
      ],
    },
  },
});
