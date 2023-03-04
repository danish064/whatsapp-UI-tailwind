// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    [
      "@nuxtjs/tailwindcss",
      {
        cssPath: "~/assets/css/tailwind.css",
      },
    ],
  ],
  plugins: ["~/plugins/clickoutside.ts"],
  runtimeConfig: {
    public: {
      apiBase: "https://api.find24.app/api/v1",
    },
  },
});
