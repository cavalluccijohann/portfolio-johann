export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    en: {
      name: "full name",
      email: "your email",
      phone: "your phone number",
      message: "your message",
    },
    fr: {
      name: "nom complet",
      email: "votre email",
      phone: "votre numéro de téléphone",
      message: "votre message",
    },
  },
}));
