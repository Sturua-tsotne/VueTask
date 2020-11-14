import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Locale from './locale'

Vue.use(VueI18n)

export default new VueI18n({
    locale: 'ka',
    messages: Locale.getLocaleText()
})