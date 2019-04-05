import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elementTwLocale from 'element-ui/lib/locale/lang/zh-TW'// element-ui lang
import twLocale from './tw'

Vue.use(VueI18n)

const messages = {
  tw: {
    ...twLocale,
    ...elementTwLocale
  }
}

const i18n = new VueI18n({
  locale: 'tw',
  // set locale messages
  messages
})

export default i18n
