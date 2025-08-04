// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/ui"],
  typescript: {
    typeCheck: true,
  },
  css: ["~/assets/css/main.css"],
  ui: {
    theme: {
      colors: [
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
      ],
    },
  },
  icon: {
    customCollections: [
      {
        prefix: "custom",
        dir: "./app/assets/icons",
      },
    ],
  },
  image: {
    dir: "assets/images",
  },
});
