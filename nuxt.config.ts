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
    private: {
      resendApiKey: process.env.RESEND_API_KEY,
    },
  },

  css: ["~/assets/style/main.scss"],

  devtools: { enabled: true },

  modules: ["@nuxtjs/i18n", "@nuxthq/ui", "@nuxtjs/robots", "nuxt-svgo", "@nuxt/image", "@nuxthq/studio", "@nuxt/content"],

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
    "/": { isr: true },
  },

  svgo: {
    autoImportPath: "./assets/logo/",
  },

  content: {
    documentDriven: true,
    watch: {
      ws: {
        showURL: false,
      },
    },
    highlight: {
      theme: "github-dark",
    },
    navigation: {
      fields: ["image", "_id"],
    },
    markdown: {
      anchorLinks: false,
    },
    locales: ["en", "fr"],
    defaultLocale: "en",
  },

  i18n: {
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    baseUrl: "/",
    locales: ["en", "fr"],
    defaultLocale: "en",
    vueI18n: "~/i18n.config.ts",
  },

});
