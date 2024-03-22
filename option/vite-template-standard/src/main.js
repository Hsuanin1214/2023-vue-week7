// import 'bootstrap/scss/bootstrap.scss'
import './assets/all.scss'
//
// core version + navigation, pagination modules:
// import Swiper from 'swiper'
// import { Swiper, SwiperSlide, Navigation, Pagination, Virtual } from 'swiper'
// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'

//
import { createApp } from 'vue'
import { createPinia } from 'pinia'
//
import {
  defineRule, configure,
  Form, Field, ErrorMessage
} from 'vee-validate'
import * as rules from '@vee-validate/rules'

import { setLocale, localize } from '@vee-validate/i18n'

import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
//

import App from './App.vue'
import router from './router'
//

Object.keys(rules).forEach((rule) => defineRule(rule, rules[rule]))

configure({
  generateMessage: localize({ zhTW }),
  validateOnInput: true
})

setLocale('zhTW')

// 定義必選規則
defineRule('required', value => {
  if (!value || value.length === 0) {
    return '請選擇一個取貨方式'
  }
  return true
})

// 如果有更特別的規則，可以這樣添加
defineRule('takeTypeSelected', value => {
  if (value === 'selfTake' || value === 'shipTake') {
    return true
  }
  return '請選擇一個取貨方式'
})
// Swiper.use([Navigation, Pagination, Virtual, SwiperSlide])
//

const app = createApp(App)
const pinia = createPinia()

app.component('v-form', Form)
app.component('v-field', Field)
app.component('error-message', ErrorMessage)

app.use(pinia)
app.use(router)
//

app.mount('#app')
