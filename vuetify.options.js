import colors from 'vuetify/es5/util/colors'

export default {
  breakpoint: {
    thresholds: {
      xs: 340,
      sm: 540,
      md: 800,
      lg: 1280,
    },
    scrollBarWidth: 24,
  },
  icons: {},
  lang: {},
  // rtl: true,
  customVariables: ['~/assets/variables.scss'],
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
        // primary: colors.blue.darken2,
        // accent: colors.grey.darken3,
        // secondary: colors.amber.darken3,
        // info: colors.teal.lighten1,
        // warning: colors.amber.base,
        // error: colors.deepOrange.accent4,
        // success: colors.green.accent3,
        // background: "#f10000"
      },
      light: {
        primary: colors.blue.darken3,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      },
    }
  },
}
