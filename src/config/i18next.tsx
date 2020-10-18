import i18n from 'i18next'

import US from '../locales/en'
import RU from '../locales/ru'

i18n.init({
  debug: false,
  fallbackLng: ['US', 'RU'],
  lng: 'RU',

  ns: ['app', 'home', 'reset', 'auth'],
  defaultNS: 'app',

  resources: {
    US,
    RU,
  },
})

export default i18n
