import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import pt from 'vuetify/es5/locale/pt'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: { pt },
    current: 'pt'
  },
  icons: {
    iconfont: 'md'
  },
  theme: {
    dark: false,
    themes: {
      dark: {
        primary: '#00695C',
        secondary: '#546E7A',
        accent: '#8c9eff',
        error: '#b71c1c'
      },
      light: {
        primary: '#00695C',
        secondary: '#546E7A',
        accent: '#8c9eff',
        error: '#b71c1c'
      }
    }
  }
})
