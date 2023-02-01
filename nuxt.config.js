import colors from "vuetify/es5/util/colors";

export default {
  target: "static",
  server: {
    port: 5000, // default: 3000
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s",
    title: "kwaidi-test",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/fonts.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/apex-chart.js", mode: "client" }, // Apex Charts
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    download: true,
    inject: true,
    overwriting: false,
    stylePath: "css/fonts.css",
    fontsDir: "fonts",
    fontsPath: "~assets/fonts",
    families: {
      Montserrat: [300, 400, 500, 600, 700, 800, 900],
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/gtm", // Simple usage
  ],

  gtm: {
    id: "GTM-XXXXXXX",
  },
  axios: {
    // proxy: true
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        light: {
          mainBlue: "#3AC2CB",
          orange: "#FE9518",
          green: "#34B53A",
          pink: "#F12E67",
          darkBlue: "#16263F",
          veryDarkBlue: "#040D21",
          darkGrey: "#A4B4CB",
          veryDarkGrey: "#36415C",
          veryLightGrey: "#fafafa",
          white: "#ffffff",
        },
        // dark: {
        //   primary: colors.blue.darken2,
        //   accent: colors.grey.darken3,
        //   secondary: colors.amber.darken3,
        //   info: colors.teal.lighten1,
        //   warning: colors.amber.base,
        //   error: colors.deepOrange.accent4,
        //   success: colors.green.accent3
        // }
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
