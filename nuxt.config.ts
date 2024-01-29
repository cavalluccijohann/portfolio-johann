import messages from "./locales/messages";

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

  i18n: {
    detectBrowserLanguage: {
      alwaysRedirect: true,
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    locales: [
      {
        code: "en",
        iso: "en-US",
      },
      {
        code: "fr",
        iso: "fr-FR",
      },
    ],
    baseUrl: "https://nuxt-starter.fr",
    vueI18n: {
      legacy: false,
      locale: "en",
      fallbackLocale: "en",
      availableLocales: ["en", "fr"],
      messages: messages,
    },
  },

  robots: {
    UserAgent: "*",
    Disallow: "",
  },

  svgo: {
    autoImportPath: "./assets/logo/",
  },
});
