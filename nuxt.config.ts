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
    head: {
      script: [
        {
          src: "https://analytics.hrcd.fr/js/script.js",
          defer: true,
          "data-domain": "johanncvl.com",
        },
      ],
      title: "Johann Cvl",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Johann Cvl, développeur web full-stack, basé à Nice. Développement de sites web, applications web, applications mobiles, applications desktop, et bien plus encore. Pour tout projet de développement web, contactez-moi.",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  runtimeConfig: {
    private: {
      resendApiKey: process.env.RESEND_API_KEY,
    },
  },

  css: ["~/assets/style/main.scss"],
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "@nuxthq/ui", "@nuxtjs/robots", "nuxt-svgo", "@nuxt/image", "@nuxthq/studio", "@nuxt/content", "nuxt-simple-sitemap"],

  site: {
    url: "https://johanncvl.com",
    name: "Johann's Portfolio",
  },

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

  compatibilityDate: "2024-09-18",
});
