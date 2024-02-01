/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./**/*.svg",
  ],
  theme: {
    extend: {
      colors: {
        "color-text": "var(--text-color)",
        "neutral-color": "#414141",
        "primary-color": withOpacity("--primary"),
        "sunny-color": withOpacity("--sunny"),
        inverted: "var(--inverted)",
        "text-color-primary": "var(--text-color-primary)",
      },
    },
  },
};
