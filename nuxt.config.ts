// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/ui", "@vueuse/motion/nuxt"],
  ssr: false,
  typescript: {
    typeCheck: true,
  },
  css: ["~/assets/css/main.css"],
  ui: {
    colorMode: false,
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
    provider: "ipx",
  },
  nitro: {
    output: {
      dir: "dist",
    },
  },
});
