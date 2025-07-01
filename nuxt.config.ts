// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  extends: ["app"], //override app dir (monolith) with app layer(modular)
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/ui",
  ],
  nitro: {
    imports: {
      dirs: [
        //default (monolith)
        // "server/services",
        // "server/services",

        //custom layers location (modular)
        "*/server/services",
        "*/server/repos",
      ],
    },
  },
});
