export default defineNuxtConfig({
  app: {
    layoutTransition: {
      name: "fade",
      mode: "out-in",
    },
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
  },

  runtimeConfig: {
    public: {},
    private: {
      resendApiKey: process.env.RESEND_API_KEY,
    },
  },

  css: ["~/assets/style/main.scss"],

  imports: {
    dirs: ["store"],
  },

  devtools: { enabled: true },

  build: {
    transpile: ["@heroicons/vue"],
  },

  modules: ["nuxt-headlessui", "@vueuse/nuxt", "@nuxtjs/i18n", "@pinia/nuxt", "nuxt-mailer", "@nuxthq/ui", "@nuxtjs/robots", "nuxt-svgo"],

  colorMode: {
    preference: "light",
    fallback: "light",
    storageKey: "nuxt-starter-color-mode",
  },
  robots: {
    UserAgent: "*",
    Disallow: "",
  },

  // Charge la page avant tout
  routeRules: {
    "/": { isr: true, prerender: true },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/", "/about", "/contact", "/projects"],
    },
  },

  svgo: {
    autoImportPath: "./assets/logo/",
  },
});
